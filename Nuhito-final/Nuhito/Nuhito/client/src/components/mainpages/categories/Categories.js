import React, { useState, useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'

function Categories() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = useState('')
    const [group, setGroup] = useState('Áo')
    const [token] = state.token
    const [callback, setCallback] = state.categoriesAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    const createCategory = async e => {
        e.preventDefault()
        try {
            if (onEdit) {
                const res = await axios.put(`/api/category/${id}`, { name: category, group: group }, {
                    headers: { Authorization: token }
                })
                alert(res.data.msg)
            } else {
                const res = await axios.post('/api/category', { name: category, group: group }, {
                    headers: { Authorization: token }
                })
                alert(res.data.msg)
            }
            setOnEdit(false)
            setCategory('')
            setGroup('Áo')
            setCallback(!callback)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const editCategory = async (id, name, group) => {
        setID(id)
        setCategory(name)
        setGroup(group)
        setOnEdit(true)
    }

    const deleteCategory = async (id) => {
        try {
            const res = await fetch(`/api/category/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': token }
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.msg);
            }

            const data = await res.json();
            alert(data.msg);
            setCallback(!callback);
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="edit-categories">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-6">
                        <div className="group-categories">
                            <h4>Tạo danh mục</h4>
                            <form onSubmit={createCategory}>
                                <input type="text" name="category" value={category} required
                                    placeholder="Tên danh mục" onChange={e => setCategory(e.target.value)} />
                                <select name="group" value={group} required onChange={e => setGroup(e.target.value)} >
                                    <option value="Áo">Áo</option>
                                    <option value="Quần">Quần</option>
                                    <option value="Váy">Váy</option>
                                    <option value="Phụ kiện">Phụ kiện</option>
                                </select>
                                <button className="btn btn-md btn-black-default-hover pad" type="submit">{onEdit ? "Cập nhật" : "Tạo"}</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="group-categories">
                            <h3>Áo</h3>
                            {
                                categories.filter(category => category.group === "Áo").map(category => (
                                    <div className="row group-categories" key={category._id}>
                                        <div className="col-lg-7 col-md-6">
                                            <p>{category.name}</p>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <button className="btn btn-md btn-black-default-hover" onClick={() => editCategory(category._id, category.name, category.group)}>Edit</button>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <button className="btn btn-md btn-black-default-hover" onClick={() => deleteCategory(category._id)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="group-categories">
                            <h3>Quần</h3>
                            {
                                categories.filter(category => category.group === "Quần").map(category => (
                                    <div className="row group-categories" key={category._id}>
                                        <div className="col-lg-7 col-md-6">
                                            <p>{category.name}</p>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <button className="btn btn-md btn-black-default-hover" onClick={() => editCategory(category._id, category.name, category.group)}>Edit</button>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <button className="btn btn-md btn-black-default-hover" onClick={() => deleteCategory(category._id)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="group-categories">
                            <h3>Váy</h3>
                            {
                                categories.filter(category => category.group === "Váy").map(category => (
                                    <div className="row group-categories" key={category._id}>
                                        <div className="col-lg-7 col-md-6">
                                            <p>{category.name}</p>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <button className="btn btn-md btn-black-default-hover" onClick={() => editCategory(category._id, category.name, category.group)}>Edit</button>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <button className="btn btn-md btn-black-default-hover" onClick={() => deleteCategory(category._id)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="group-categories">
                            <h3>Phụ kiện</h3>
                            {
                                categories.filter(category => category.group === "Phụ kiện").map(category => (
                                    <div className="row group-categories" key={category._id}>
                                        <div className="col-lg-7 col-md-6">
                                            <p>{category.name}</p>
                                        </div>
                                        <div className="col-lg-2 col-md-6">
                                            <button className="btn btn-md btn-black-default-hover" onClick={() => editCategory(category._id, category.name, category.group)}>Edit</button>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <button className="btn btn-md btn-black-default-hover" onClick={() => deleteCategory(category._id)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories