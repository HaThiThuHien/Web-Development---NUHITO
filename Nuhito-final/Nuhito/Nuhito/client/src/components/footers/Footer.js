import React from 'react'

function Footer() {
    return (
        <footer className="footer-section footer-bg">
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="container">
                        <div className="row mb-n6">
                            <div className="col-lg-4 col-sm-6 mb-6">
                                <div className="footer-widget-single-item footer-widget-color--golden"
                                    data-aos-delay="0">
                                    <h5 className="title">CHÍNH SÁCH</h5>
                                    <ul className="footer-nav">
                                        <li><a href="/policy#P1">Miễn phí vận chuyển</a></li>
                                        <li><a href="/policy#P2">Trả hàng &amp; Hoàn tiền</a></li>
                                        <li><a href="/policy#P3">Câu hỏi thường gặp</a></li>
                                        <li><a href="/policy#P4">Liên hệ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-6">
                                <div className="footer-widget-single-item footer-widget-color--golden"
                                    data-aos-delay="200">
                                    <h5 className="title">SẢN PHẨM</h5>
                                    <ul className="footer-nav">
                                        <li><a href="/products">Áo</a></li>
                                        <li><a href="/products">Quần</a></li>
                                        <li><a href="/products">Váy</a></li>
                                        <li><a href="/products">Phụ kiện</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-6">
                                <div className="footer-widget-single-item footer-widget-color--golden"
                                    data-aos-delay="400">
                                    <h5 className="title">GIỚI THIỆU</h5>
                                    <div className="footer-about">
                                        <p>Nuhito - nơi khám phá phong cách độc đáo của bạn.
                                            Chúng tôi mang đến những bộ trang phục là tác phẩm nghệ thuật,
                                            kết hợp sự sáng tạo và chất lượng tinh tế.
                                            Nuhito là điểm hẹn của những người yêu thời trang và đam mê phong cách.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row mb-n6">
                            <div className="col-xl-8 col-lg-8 col-md-6 mb-6">
                                <div className="footer-copyright">
                                    <p> COPYRIGHT &copy; NUHITO. ALL RIGHTS RESERVED.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-6">
                                <div className="footer-social">
                                    <h4 className="title">FOLLOW US</h4>
                                    <ul className="footer-social-link">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;