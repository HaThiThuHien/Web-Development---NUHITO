import React, { useState } from 'react'
import About from '../../../assets/images/about/img-about.jpg'
import Leader1 from '../../../assets/images/team/leader1.png'
import Leader2 from '../../../assets/images/team/leader2.png'
import Leader3 from '../../../assets/images/team/leader3.png'

function AboutUs() {
    return (
        <>
            <div className="about-top">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-between d-sm-column">
                        <div className="col-md-6">
                            <div className="about-img">
                                <div className="img-responsive">
                                    <img src={About} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content">
                                <h3 className="title">GIỚI THIỆU VỀ NUHITO</h3>
                                <h5 className="semi-title">NUHITO - Nơi khám phá phong cách độc đáo của bạn. </h5>
                                <p>Đồng hành và thấu hiểu những băn khoăn trong hành trình định hình vẻ đẹp và xây dựng phong cách riêng của chị em phụ nữ, NUHITO cho ra đời những sản phẩm mang tính tiện lợi cao, tối ưu được hầu hết các khuyết điểm trên cơ thể, để các chị cảm thấy tự tin, thoải mái nhất khi khoác lên người. Bởi với NUHITO, mỗi sản phẩm là tình yêu thương, là năng lượng hạnh phúc mà NUHITO muốn trao gửi đến từng phụ nữ Việt trên mọi miền tổ quốc. NUHITO tin rằng, hành trình này sẽ luôn được mọi người quan tâm, chia sẻ vì đây là hành trình từ trái tim và sẽ chạm đến trái tim, nhất là những tâm hồn đang lạc lối cần chỉ dẫn để quay về bên trong.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="progressbar-section section-top-gap-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="content">
                                <h4 className="title">ĐỊNH HÌNH PHONG CÁCH MỚI</h4>
                                <p>Mỗi ngày tại NUHITO, chúng tôi đều hy vọng hôm nay sẽ làm được 2 điều: gửi trao những sản phẩm thời trang chất lượng và lan tỏa hạnh phúc đến mọi người. Đó là mong muốn khi NUHITO lần đầu ra mắt vào năm 2015. Và suốt 8 năm qua, nhờ có chị em mà mỗi ngày đều là một ngày hạnh phúc. Đó là 8 năm chúng tôi được gặp gỡ, lắng nghe và kết nối với những tâm hồn đồng điệu. 8 năm học được cách quan tâm từ những điều nhỏ nhất, để trân trọng những giá trị và vẻ đẹp nhiệm màu của từng con người. 8 năm chứng kiến những nỗ lực sáng tạo không ngừng, những quyết định dám nghĩ dám làm, để dấn thân trên con đường làm đẹp và mang đến cho phụ nữ phong cách thời thượng, cùng những trải nghiệm tốt hơn mỗi ngày. Với NUHITO 8 năm không phải là đích đến, mà là một hành trình. Và dù 8 hay 20 năm nữa, hành trình này sẽ luôn là hành trình hạnh phúc khi vẫn còn mọi người ở bên, những người đồng hành và truyền cảm hứng cho chúng tôi trên con đường sứ mệnh của THỜI TRANG HẠNH PHÚC, lan tỏa năng lượng tích cực và phụng sự cộng đồng.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="custom-progress m-t-40">
                                <div className="skill-progressbar">
                                    <h6 className="font--semi-bold m-b-15">Trẻ trung</h6>
                                    <div className="line-progressbar" data-percentage="90" data-progress-color="#b19361">
                                        <div className="progressbar" style={{ width: '90%' }}>
                                            <div className="proggress"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-progressbar">
                                    <h6 className="font--semi-bold m-b-15">Năng động</h6>
                                    <div className="line-progressbar" data-percentage="86" data-progress-color="#b19361">
                                        <div className="progressbar" style={{ width: '86%' }}>
                                            <div className="proggress"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-progressbar">
                                    <h6 className="font--semi-bold m-b-15">Thời thượng</h6>
                                    <div className="line-progressbar" data-percentage="97" data-progress-color="#b19361">
                                        <div className="progressbar" style={{ width: '97%' }}>
                                            <div className="proggress"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-section section-top-gap-100 secton-fluid section-inner-bg">
                <div className="section-title-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-content-gap">
                                    <div className="secton-content text-center">
                                        <h3 className="section-title">Meet Our Team</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-wrapper">
                    <div className="container">
                        <div className="row mb-n6">
                            <div className="col-xl-4 mb-5">
                                <div className="team-single">
                                    <div className="team-img">
                                        <img className="img-fluid" src={Leader1} alt="" />
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Thu Hiền</h6>
                                        <span className="team-title">CTO</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 mb-5">
                                <div className="team-single">
                                    <div className="team-img">
                                        <img className="img-fluid" src={Leader2} alt="" />
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Nhung Nguyễn</h6>
                                        <span className="team-title">CEO Founder</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 mb-5">
                                <div className="team-single">
                                    <div className="team-img">
                                        <img className="img-fluid" src={Leader3} alt="" />
                                    </div>
                                    <div className="team-content">
                                        <h6 className="team-name font--bold mt-5">Ngọc Thơ</h6>
                                        <span className="team-title">Chief Officer</span>
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

export default AboutUs