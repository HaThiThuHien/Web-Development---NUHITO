import React, { useContext } from 'react'
import { GlobalState } from '../../../../GlobalState'

function ProductItemList({ product, isAdmin, deleteProduct, handleCheck }) {
    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart
    const addWishlist = state.userAPI.addWishlist
    return (
        <div className='col-12'>
            <div className="product-list-single product-color--golden" id="productsList">
                {
                    isAdmin && <input type="checkbox" checked={product.checked}
                        onChange={() => handleCheck(product._id)} />
                }
                <a href={`/detail/${product._id}`} className="product-list-img-link">
                    <img className="img-fluid" src={product.image1.url} alt="" />
                    <img className="img-fluid" src={product.image2.url} alt="" />
                </a>
                <div className="product-list-content">
                    <h5 className="product-list-link" title={product.title}><a href={`/detail/${product._id}`}>{product.title}</a></h5>
                    <span className="product-list-price">{product.price}đ</span>
                    <p>{product.description}</p>
                    <div className="product-action-icon-link-list">
                        {
                            isAdmin ?
                                <>
                                    <a href="#" className="btn btn-lg btn-black-default-hover"
                                        onClick={() => deleteProduct(product._id, [product.image1.public_id, product.image2.public_id, product.image3.public_id, product.image4.public_id])}>Xoá</a>
                                    <a href={`/edit_product/${product._id}`} className="btn btn-lg btn-black-default-hover">Sửa</a>
                                </>
                                : <>
                                    <a href="#" className="btn btn-lg btn-black-default-hover" onClick={() => addCart(product, 1)}>Thêm vào giỏ hàng</a>
                                    <a href="#" className="btn btn-lg btn-black-default-hover" onClick={() => addWishlist(product)}><i className="icon-heart"></i></a>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItemList