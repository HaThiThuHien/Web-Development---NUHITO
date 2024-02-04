import React, { useContext, useState} from 'react'
import { GlobalState } from '../../../GlobalState'
// import axios from 'axios'
import img_empty from '../../../assets/images/emprt-cart/empty-cart.png'

function Wishlist() {
    const state = useContext(GlobalState)
    const [wishlist, setWishlist] = state.userAPI.wishlist
    const addCart = state.userAPI.addCart
    const [token] = state.token

    const addToWishlist = async (wishlist) => {
        const response = await fetch('/user/addwishlist', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({ wishlist })
        });

        if (!response.ok) {
            throw new Error('Response is not OK');
        }
    }

    const removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            wishlist.forEach((item, index) => {
                if (item._id === id) {
                    wishlist.splice(index, 1)
                }
            })

            setWishlist([...wishlist])
            addToWishlist(wishlist)
        }
    }

    if (wishlist.length === 0)
        return (
            <div className="empty-wishlist-section section-fluid">
                <div className="emptywishlist-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3">
                                <div className="emptywishlist-content text-center">
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
        <div className="wishlist-section">
            <div className="wishlist-table-wrapper">
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
                                                <th className="add_to_cart">Thêm vào giỏ hàng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                wishlist.map(product => (
                                                    <tr key={product._id}>
                                                        <td className="product_remove"><a href="#" onClick={() => removeProduct(product._id)}><i className="fa fa-trash-o"></i></a></td>
                                                        <td className="product_thumb"><a href={`/detail/${product._id}`}><img src={product.image1.url} alt="" /></a></td>
                                                        <td className="product_name"><a href={`/detail/${product._id}`}>{product.title}</a></td>
                                                        <td className="product-price">{product.price}đ</td>
                                                        <td className="add_to_cart"><div className="product-add-to-cart-btn"><a href='#' onClick={() => addCart(product, 1)}>Thêm</a></div></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist