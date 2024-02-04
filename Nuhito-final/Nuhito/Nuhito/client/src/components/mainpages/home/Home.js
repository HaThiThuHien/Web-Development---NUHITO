import React from 'react'
import Slider1 from '../../../assets/images/hero-slider/hero-slider-1.jpg'
import Slider2 from '../../../assets/images/hero-slider/hero-slider-2.jpg'
import Banner_Aolen from '../../../assets/images/banner/banner-style-1-img-1.jpg'
import Banner_Ao from '../../../assets/images/banner/banner-style-2-img-1.jpg'
import Banner_Quan from '../../../assets/images/banner/banner-style-2-img-2.jpg'
import Banner_Vay from '../../../assets/images/banner/banner-style-2-img-3.jpg'
import Banner_Dam from '../../../assets/images/banner/banner-style-2-img-4.jpg'
import Banner_Phukien from '../../../assets/images/banner/banner-style-3-img-1.jpg'
import Service1 from '../../../assets/images/icons/service-promo-1.png'
import Service2 from '../../../assets/images/icons/service-promo-2.png'
import Service3 from '../../../assets/images/icons/service-promo-3.png'
import Service4 from '../../../assets/images/icons/service-promo-4.png'

function Home() {
    return (
        <>
            <div className="hero-slider-section">
                <div className="hero-slider-active swiper-container">
                    <div className="swiper-wrapper">
                        <div className="hero-single-slider-item swiper-slide swiper-slide-duplicate swiper-slide-active">
                            <div className="hero-slider-bg">
                                <img src={Slider1} alt="#" />
                            </div>
                            <div className="hero-slider-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="hero-slider-content">
                                                <h4 className="subtitle">Best quality</h4>
                                                <h2 className="title">Discover <br /> your <br /> signature style <br /> with us</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-single-slider-item swiper-slide swiper-slide-duplicate swiper-slide-active">
                            <div className="hero-slider-bg">
                                <img src={Slider2} alt="#" />
                            </div>
                            <div className="hero-slider-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="hero-slider-content">
                                                <h4 className="subtitle">High fashion</h4>
                                                <h2 className="title">Discover <br /> your <br /> signature style <br /> with us</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-section section-top-gap-100 section-fluid">
                <div className="banner-wrapper">
                    <div className="container-fluid">
                        <div className="row mb-n6">
                            <div className="col-lg-6 col-12 mb-6">
                                <div className="banner-single-item banner-style-1 banner-animation img-responsive">
                                    <div className="image">
                                        <img src={Banner_Aolen} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Áo len</h4>
                                        <h5 className="sub-title">Hot trend 2023</h5>
                                        <a href="/products" className="btn btn-lg btn-outline-golden icon-space-left"><span
                                            className="d-flex align-items-center">Mua sắm ngay <i
                                                className="ion-ios-arrow-thin-right"></i></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12 mb-6">
                                <div className="row mb-n6">
                                    <div className="col-lg-6 col-sm-6 mb-6">
                                        <div className="banner-single-item banner-style-2 banner-animation img-responsive">
                                            <div className="image">
                                                <img src={Banner_Ao} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Áo</h4>
                                                <a href="/products" className="link-text"><span>Mua sắm ngay</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 mb-6">
                                        <div className="banner-single-item banner-style-2 banner-animation img-responsive">
                                            <div className="image">
                                                <img src={Banner_Quan} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Quần</h4>
                                                <a href="/products" className="link-text"><span>Mua sắm ngay</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 mb-6">
                                        <div className="banner-single-item banner-style-2 banner-animation img-responsive">
                                            <div className="image">
                                                <img src={Banner_Vay} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Váy</h4>
                                                <a href="/products" className="link-text"><span>Mua sắm ngay</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 mb-6">
                                        <div className="banner-single-item banner-style-2 banner-animation img-responsive">
                                            <div className="image">
                                                <img src={Banner_Dam} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Đầm</h4>
                                                <a href="/products" className="link-text"><span>Mua sắm ngay</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-section section-top-gap-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="banner-single-item banner-style-3 banner-animation img-responsive">
                                <div className="image">
                                    <img className="img-fluid" src={Banner_Phukien} alt="" />
                                </div>
                                <div className="content">
                                    <h3 className="title">Phụ kiện</h3>
                                    <h5 className="sub-title">Điểm nhấn cho trang phục của bạn</h5>
                                    <a href="/products"
                                        className="btn btn-lg btn-outline-golden icon-space-left"><span
                                            className="d-flex align-items-center">Mua sắm ngay <i
                                                className="ion-ios-arrow-thin-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-promo-section section-top-gap-100 section-inner-bg">
                <div className="service-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="service-promo-single-item">
                                    <div className="image">
                                        <img src={Service1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="title">MIỄN PHÍ VẬN CHUYỂN</h6>
                                        <p>Giao hàng an toàn, nhanh chóng và hoàn toàn miễn phí!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="service-promo-single-item">
                                    <div className="image">
                                        <img src={Service2} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="title">HOÀN TIỀN TRONG 30 NGÀY</h6>
                                        <p>Hoàn tiền trong vòng 30 ngày nếu có vấn đề về chất lượng sản phẩm!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="service-promo-single-item">
                                    <div className="image">
                                        <img src={Service3} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="title">THANH TOÁN AN TOÀN</h6>
                                        <p>Cung cấp phương thức thanh toán an toàn và tiện lợi.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="service-promo-single-item">
                                    <div className="image">
                                        <img src={Service4} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="title">CHĂM SÓC KHÁCH HÀNG</h6>
                                        <p>Luôn lắng nghe phản hồi của khách hàng để nâng cao chất lượng dịch vụ.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home