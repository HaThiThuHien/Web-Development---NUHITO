import React from 'react';

function NotFound() {
    return (
        <div className="error-section">
            <div className="container">
                <div className="row">
                    <div className="error-form">
                        <h1 className="big-title">404</h1>
                        <h4 className="sub-title">Opps! KHÔNG TÌM THẤY TRANG</h4>
                        <p data-aos>Trang mà bạn đang tìm không tồn tại, đã bị xoá,<br />bị đổi tên hoặc tạm thời không có sẵn.</p>
                        <div className="row">
                            <div className="col-10 offset-1 col-md-4 offset-md-4">
                                <a href="/" className="btn btn-md btn-black-default-hover mt-7">Quay về trang chủ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
