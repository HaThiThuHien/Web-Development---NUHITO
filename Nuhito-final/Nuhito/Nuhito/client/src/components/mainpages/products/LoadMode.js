import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'

function LoadMore() {
    const state = useContext(GlobalState)
    const [page, setPage] = state.productsAPI.page
    const [result] = state.productsAPI.result

    return (
        <div className="load_more page-pagination text-center">
            {
                result < page * 12 ? ""
                    : <button className='btn btn-lg btn-black-default-hover' onClick={() => setPage(page + 1)}>Thêm</button>
            }
        </div>
    )
}

export default LoadMore