import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
// import axios from 'axios'
import PaypalButton from './PaypalButton'
import img_empty from '../../../assets/images/emprt-cart/empty-cart.png'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)

            setTotal(total)
        }

        getTotal()

    }, [cart])

    const addToCart = async (cart) => {
        const response = await fetch('/user/addcart', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ cart })
        });

        if (!response.ok) {
            throw new Error('Response is not OK');
        }
    }

    const addArrToCart = async (newCart) => {
        const response = await fetch('/user/addcart', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ cart: newCart })
        });

        if (!response.ok) {
            throw new Error('Response is not OK');
        }
    };

    const removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }
    const tranSuccess = async (payment) => {
        const { id, payer } = payment;
        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
                body: JSON.stringify({ cart, id, payer }),
            });

            const data = await response.json();

            if (response.ok) {
                setCart([]);
                addToCart([]);
                alert("You have successfully placed an order.");
            } else {
                // Handle the case where the server returns an error
                console.error(data.msg); // You can customize the error handling
                alert("Failed to place an order. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to place an order. Please try again.");
        }
    };

    const handleQuantityChange = (id, value) => {
        const newCart = cart.map(item => {
            if (item._id === id) {
                return { ...item, quantity: value };
            }
            return item;
        });

        setCart(newCart);
    };

    const updateCart = async () => {
        try {
            await addArrToCart(cart);
            alert("Cart updated successfully!");
        } catch (error) {
            console.error('Error updating cart:', error);
            alert("Failed to update cart. Please try again later.");
        }
    };

    if (cart.length === 0)
        return (
            <div className="empty-cart-section section-fluid">
                <div className="emptycart-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
                                <div className="emptycart-content text-center">
                                    <div className="image">
                                        <img className="img-fluid" src={img_empty} alt="" />
                                    </div>
                                    <h4 className="title">EMPTY</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    return (
        <div className="cart-section">
            <div className="cart-table-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_desc">
                                <div className="table_page table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="product_remove">Xoá</th>
                                                <th className="product_thumb">Hình ảnh</th>
                                                <th className="product_name">Sản phẩm</th>
                                                <th className="product-price">Giá</th>
                                                <th className="product_quantity">Số lượng</th>
                                                <th className="product_total">Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart.map(product => (
                                                    <tr key={product._id}>
                                                        <td className="product_remove"><a href="#" onClick={() => removeProduct(product._id)}><i className="fa fa-trash-o"></i></a></td>
                                                        <td className="product_thumb"><a href={`/detail/${product._id}`}><img src={product.image1.url} alt="" /></a></td>
                                                        <td className="product_name"><a href={`/detail/${product._id}`}>{product.title}</a></td>
                                                        <td className="product-price">{product.price}đ</td>
                                                        <td className="product_quantity"><input min="1" max="100" type="number" value={product.quantity}
                                                            onChange={(e) => handleQuantityChange(product._id, e.target.value)} /></td>
                                                        <td className="product_total">{product.price * product.quantity}đ</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart_submit">
                                    <button className="btn btn-md btn-golden" type="submit" onClick={updateCart}>Cập nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="coupon_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="coupon_code right">
                                <h3>Tổng cộng</h3>
                                <div className="coupon_inner">
                                    <div className="cart_subtotal">
                                        <p className="cart_amount">{total}đ</p>
                                    </div>
                                    <PaypalButton
                                        total={total}
                                        tranSuccess={tranSuccess} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart