import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import './history.css'

function OrderDetails() {
    const state = useContext(GlobalState)
    const [history] = state.userAPI.history
    const [orderDetails, setOrderDetails] = useState([])

    const params = useParams()

    useEffect(() => {
        if (params.id) {
            history.forEach(item => {
                if (item._id === params.id) setOrderDetails(item)
            })
        }
    }, [params.id, history])


    if (orderDetails.length === 0) return null;

    return (
        <div className="history-page">
            <div className='container'>
                <div className='row align-items-center'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Payer ID</th>
                                <th>Country Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{orderDetails.payer.name.surname + " " + orderDetails.payer.name.given_name}</td>
                                <td>{orderDetails.payer.email_address}</td>
                                <td>{orderDetails.payer.payer_id}</td>
                                <td>{orderDetails.payer.address.country_code}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table style={{ margin: "30px 0px" }} id="history-products">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Products</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderDetails.cart.map(item => (
                                    <tr key={item._id}>
                                        <td><img src={item.image1.url} alt="" /></td>
                                        <td>{item.title}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price * item.quantity}đ</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default OrderDetails