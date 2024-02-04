import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalState } from '../../../GlobalState'
import { useNavigate, useParams } from 'react-router-dom'

const initialState = {
    product_id: '',
    title: '',
    price: 0,
    description: '',
    style: '',
    color: '',
    material: '',
    category: '',
    _id: ''
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    const [loading4, setLoading4] = useState(false);


    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [page, setPage] = state.productsAPI.page

    const navigate = useNavigate()
    const param = useParams()

    const [products] = state.productsAPI.products
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.productsAPI.callback

    useEffect(() => {
        setPage(5);
        if (param.id) {
            setOnEdit(true)
            products.forEach(product => {
                if (product._id === param.id) {
                    setProduct(product)
                    setImage1(product.image1)
                    setImage2(product.image2)
                    setImage3(product.image3)
                    setImage4(product.image4)
                }
            })
        } else {
            setOnEdit(false)
            setProduct(initialState)
            setImage1(false)
            setImage2(false)
            setImage3(false)
            setImage4(false)
        }
    }, [param.id, products])

    const handleUpload = async (e, imageStateSetter, setLoadingStateSetter) => {
        e.preventDefault();
        try {
            if (!isAdmin) return alert("You're not an admin!");

            const file = e.target.files[0];

            if (!file) return alert("File not exist.");

            if (file.size > 1024 * 1024) // 1mb
                return alert("Size too large!");

            if (file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.");

            let formData = new FormData();
            formData.append('file', file);

            setLoadingStateSetter(true);

            const res = await axios.post('/api/upload', formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                    Authorization: token
                }
            });

            setLoadingStateSetter(false);
            imageStateSetter(res.data);
        } catch (err) {
            if (err.response) {
                alert(`Error: ${err.response.data.msg}`);
            } else {
                alert(`Error: ${err.message}`);
            }
        }
    };

    const handleDestroy = async (e, publicID, imageStateSetter, setLoadingStateSetter) => {
        try {
            if (!isAdmin) return alert("You're not an admin");
            setLoadingStateSetter(true);
            const response = await fetch('/api/destroy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({ public_id: publicID })
            });

            if (!response.ok) {
                throw new Error('Response is not OK');
            }

            setLoadingStateSetter(false);
            imageStateSetter(false);
        } catch (err) {
            alert(err.message);
        }
    }

    const handleChangeInput = e => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            if (!isAdmin) return alert("You're not an admin");
            if (!image1 || !image2 || !image3 || !image4) return alert("Please upload all files!");

            const requestOptions = {
                method: onEdit ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({ ...product, image1, image2, image3, image4 })
            };

            const response = await fetch(onEdit ? `/api/products/${product._id}` : '/api/products', requestOptions);

            if (!response.ok) {
                throw new Error('Response is not OK');
            }

            setCallback(!callback);
            navigate("/create_product");
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="create_product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="upload">
                                    <input type="file" name="image1" className="file_up1" onChange={(e) => handleUpload(e, setImage1, setLoading1)} />
                                    {
                                        loading1 ? <div className="file_img1"></div>
                                            : <div className="file_img1" style={{ display: image1 ? "block" : "none" }}>
                                                <img src={image1 ? image1.url : ''} alt="" />
                                                <span onClick={(e) => handleDestroy(e, image1.public_id, setImage1, setLoading1)}>x</span>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="upload">
                                    <input type="file" name="image2" className="file_up2" onChange={(e) => handleUpload(e, setImage2, setLoading2)} />
                                    {
                                        loading2 ? <div className="file_img2"></div>
                                            : <div className="file_img2" style={{ display: image2 ? "block" : "none" }}>
                                                <img src={image2 ? image2.url : ''} alt="" />
                                                <span onClick={(e) => handleDestroy(e, image2.public_id, setImage2, setLoading2)}>x</span>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="upload">
                                    <input type="file" name="image3" className="file_up3" onChange={(e) => handleUpload(e, setImage3, setLoading3)} />
                                    {
                                        loading3 ? <div className="file_img3"></div>
                                            : <div className="file_img3" style={{ display: image3 ? "block" : "none" }}>
                                                <img src={image3 ? image3.url : ''} alt="" />
                                                <span onClick={(e) => handleDestroy(e, image3.public_id, setImage3, setLoading3)}>x</span>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="upload">
                                    <input type="file" name="image4" className="file_up4" onChange={(e) => handleUpload(e, setImage4, setLoading4)} />
                                    {
                                        loading4 ? <div className="file_img4"></div>
                                            : <div className="file_img4" style={{ display: image4 ? "block" : "none" }}>
                                                <img src={image4 ? image4.url : ''} alt="" />
                                                <span onClick={(e) => handleDestroy(e, image4.public_id, setImage4, setLoading4)}>x</span>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6" style={{ padding: "0 50px" }}>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <label htmlFor="product_id">Mã sản phẩm</label>
                                <input type="text" name="product_id" id="product_id" required
                                    value={product.product_id} onChange={handleChangeInput} disabled={onEdit} />
                            </div>

                            <div className="row">
                                <label htmlFor="title">Tên sản phẩm</label>
                                <input type="text" name="title" id="title" required
                                    value={product.title} onChange={handleChangeInput} />
                            </div>

                            <div className="row">
                                <label htmlFor="price">Giá</label>
                                <input type="number" name="price" id="price" min="0" required
                                    value={product.price} onChange={handleChangeInput} />
                            </div>

                            <div className="row">
                                <label htmlFor="description">Mô tả</label>
                                <textarea type="text" name="description" id="description" required
                                    value={product.description} rows="5" onChange={handleChangeInput} />
                            </div>

                            <div className="row">
                                <label htmlFor="style">Phong cách</label>
                                <input type="text" name="style" id="style" required
                                    value={product.style} onChange={handleChangeInput} />
                            </div>

                            <div className="row">
                                <label htmlFor="color">Màu sắc</label>
                                <input type="text" name="color" id="color" required
                                    value={product.color} onChange={handleChangeInput} />
                            </div>

                            <div className="row">
                                <label htmlFor="material">Chất liệu</label>
                                <input type="text" name="material" id="material" required
                                    value={product.material} onChange={handleChangeInput} />
                            </div>

                            <div className="row">
                                <label htmlFor="categories">Phân loại</label>
                                <select name="category" value={product.category} required onChange={handleChangeInput} >
                                    <option>Chọn một danh mục sản phẩm</option>
                                    {
                                        categories.map(category => (
                                            <option value={category._id} key={category._id}>
                                                {category.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button className='btn btn-md btn-black-default-hover pad' type="submit" style={{ margin: "20px 0" }}>{onEdit ? "Cập nhật" : "Thêm sản phẩm"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct