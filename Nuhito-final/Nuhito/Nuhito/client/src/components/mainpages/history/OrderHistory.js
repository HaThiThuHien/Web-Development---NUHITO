import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
import './history.css'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    useEffect(() => {
        if (token) {
            const getHistory = async () => {
                if (isAdmin) {
                    const res = await fetch('/api/payment', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': token
                        }
                    })
                    const data = await res.json();
                    setHistory(Array.isArray(data) ? data : [data]);
                } else {
                    const res = await fetch('/user/history', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': token
                        }
                    })
                    const data = await res.json();
                    setHistory(Array.isArray(data) ? data : [data]);
                }
            }

            getHistory()
        }
    }, [token, isAdmin, setHistory])

    return (
        <div className="history-page">
            <div className='container'>
                <div className='row align-items-center'>
                    <h2>History</h2>

                    <h4>You have {history.length} ordered</h4>

                    <table>
                        <thead>
                            <tr>
                                <th>Payment ID</th>
                                <th>Date of Purchased</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                history.map((items, index) => (
                                    <tr key={items._id ? items._id : index}>
                                        <td>{items.paymentID ? items.paymentID : 'IDx'}</td>
                                        <td>{items.createdAt ? new Date(items.createdAt).toLocaleDateString() : '25/12/2023'}</td>
                                        <td>{<Link to={`/history/${items._id}`}>View</Link>}</td>
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

export default OrderHistory
