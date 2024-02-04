import React, { useContext } from 'react'
import { GlobalState } from '../../../../GlobalState'

function ProductItemGrid({ product, isAdmin, deleteProduct, handleCheck }) {
    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart
    const addWishlist = state.userAPI.addWishlist
    return (
        <div className="product-default-single-item product-color--golden" id="productsList">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                    onChange={() => handleCheck(product._id)} />
            }
            <div className="image-box">
                <a href={`/detail/${product._id}`} className="image-link">
                    <img src={product.image1.url} alt="" />
                    <img src={product.image2.url} alt="" />
                </a>
                <div className="action-link">
                    {
                        isAdmin ?
                            <>
                                <div className="action-link-left">
                                    <a href="#" onClick={() => deleteProduct(product._id, [product.image1.public_id, product.image2.public_id, product.image3.public_id, product.image4.public_id])}>Xoá</a>
                                </div>
                                <div className="action-link-right">
                                    <a href={`/edit_product/${product._id}`}>Sửa</a>
                                </div>
                            </>
                            : <>
                                <div className="action-link-left">
                                    <a href="#" onClick={() => addCart(product, 1)}>Thêm vào giỏ hàng</a>
                                </div>
                                <div className="action-link-right">
                                    <a href="#" onClick={() => addWishlist(product)}><i className="icon-heart"></i></a>
                                </div>
                            </>
                    }
                </div>
            </div>
            <div className="content">
                <div className="content-left">
                    <h6 className="title"><a href={`/detail/${product._id}`}>{product.title}</a></h6>
                    <span className="price">{product.price}đ</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItemGrid