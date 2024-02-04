import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../GlobalState'
import Logo from '../../assets/images/logo/logo_black.png'
import Products_banner from '../../assets/images/banner/menu-banner.png'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Header() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [wishlist] = state.userAPI.wishlist

    const logoutUser = async () => {
        await axios.get('/user/logout') ////////////////////////////////////////

        localStorage.removeItem('firstLogin')

        window.location.href = "/";
    }

    const adminRouter = () => {
        return (
            <>
                <li><a href="/create_product">Thêm sản phẩm</a></li>
                <li><a href="/category">Chỉnh sửa danh mục</a></li>
            </>
        )
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/history">Lịch sử</Link></li>
                <li><Link to="/" onClick={logoutUser}>Đăng xuất</Link></li>
            </>
        )
    }

    const handleOpenMenuClick = () => {
        document.getElementById('mobile-menu-offcanvas').classList.add('offcanvas-open');
    };

    const handleCloseMenuClick = () => {
        document.getElementById('mobile-menu-offcanvas').classList.remove('offcanvas-open');
    };

    const [isStickyHeader, setStickyHeader] = useState(false);
    const [isScrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY || document.documentElement.scrollTop;

            if (scroll < 100) {
                setStickyHeader(false);
                setScrollTop(false);
            } else {
                setStickyHeader(true);
                setScrollTop(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [category, setCategory] = state.productsAPI.category
    const [search, setSearch] = state.productsAPI.search

    const handleCategory = (e, categoryId) => {
        // e.preventDefault();
        setCategory(categoryId === "" ? "" : "category=" + categoryId);
        setSearch('');
    };

    return (
        <>
            <header className="header-section d-none d-xl-block">
                <div className="header-wrapper">
                    <div className={`header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden ${isStickyHeader ? 'sticky' : ''}`}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 d-flex align-items-center justify-content-between">
                                    <div className="header-logo">
                                        <div className="logo">
                                            <a href="/"><img src={Logo} alt="Nuhito logo" /></a>
                                        </div>
                                    </div>

                                    <div className="main-menu menu-color--black menu-hover-color--golden">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a className="active main-menu-link" href="/">Trang chủ</a>
                                                </li>
                                                <li>
                                                    <a href="/aboutus">Giới thiệu</a>
                                                </li>
                                                <li>
                                                    <a href="/policy">Chính sách</a>
                                                </li>
                                                <li className="has-dropdown has-megaitem">
                                                    <a href="/products">Sản phẩm</a>
                                                    <div className="mega-menu">
                                                        <ul className="mega-menu-inner">
                                                            <li className="mega-menu-item">
                                                                <a href="#" className="mega-menu-item-title">Áo</a>
                                                                <ul className="mega-menu-sub">
                                                                    {
                                                                        categories.filter(category => category.group === "Áo").map(category => (
                                                                            <li key={category._id}><a href="/products" onClick={(e) => handleCategory(e, category._id)}>{category.name}</a></li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </li>
                                                            <li className="mega-menu-item">
                                                                <a href="#" className="mega-menu-item-title">Quần</a>
                                                                <ul className="mega-menu-sub">
                                                                    {
                                                                        categories.filter(category => category.group === "Quần").map(category => (
                                                                            <li key={category._id}><a href="/products" onClick={(e) => handleCategory(e, category._id)}>{category.name}</a></li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </li>
                                                            <li className="mega-menu-item">
                                                                <a href="#" className="mega-menu-item-title">Váy</a>
                                                                <ul className="mega-menu-sub">
                                                                    {
                                                                        categories.filter(category => category.group === "Váy").map(category => (
                                                                            <li key={category._id}><a href="/products" onClick={(e) => handleCategory(e, category._id)}>{category.name}</a></li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </li>
                                                            <li className="mega-menu-item">
                                                                <a href="#" className="mega-menu-item-title">Phụ kiện</a>
                                                                <ul className="mega-menu-sub">
                                                                    {
                                                                        categories.filter(category => category.group === "Phụ kiện").map(category => (
                                                                            <li key={category._id}><a href="/products" onClick={(e) => handleCategory(e, category._id)}>{category.name}</a></li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                        <div className="menu-banner">
                                                            <a href="#" className="menu-banner-link">
                                                                <img className="menu-banner-img" src={Products_banner} alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">Tài khoản</a>
                                                    <ul className="sub-menu">
                                                        {isAdmin && adminRouter()}
                                                        {
                                                            isLogged ? loggedRouter() :
                                                                <>
                                                                    <li><a href="/login">Đăng nhập</a></li>
                                                                    <li><a href="/register">Đăng ký</a></li>
                                                                </>
                                                        }
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <ul className="header-action-link action-color--black action-hover-color--golden">
                                        {
                                            ((!isLogged) || isAdmin) ? '' :
                                                <>
                                                    <li>
                                                        <a href="/wishlist" className="offcanvas-toggle">
                                                            <i className="icon-heart"></i>
                                                            <span className="item-count">{wishlist.length}</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/cart" className="offcanvas-toggle">
                                                            <i className="icon-bag"></i>
                                                            <span className="item-count">{cart.length}</span>
                                                        </a>
                                                    </li>
                                                </>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="mobile-header mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-between">
                            <div className="mobile-header-left">
                                <ul className="mobile-menu-logo">
                                    <li>
                                        <a href="/">
                                            <div className="logo">
                                                <img src={Logo} alt="Nuhito logo" />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mobile-right-side">
                                <ul className="header-action-link action-color--black action-hover-color--golden">
                                    {
                                        ((!isLogged) || isAdmin) ? '' :
                                            <>
                                                <li>
                                                    <a href="/wishlist" className="offcanvas-toggle">
                                                        <i className="icon-heart"></i>
                                                        <span className="item-count">{wishlist.length}</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/cart" className="offcanvas-toggle">
                                                        <i className="icon-bag"></i>
                                                        <span className="item-count">{cart.length}</span>
                                                    </a>
                                                </li>
                                            </>
                                    }
                                    <li>
                                        <a href="#" className="offcanvas-toggle offside-menu" onClick={handleOpenMenuClick}>
                                            <i className="icon-menu"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-offcanvas" className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section">
                <div className="offcanvas-header text-right">
                    <button className="offcanvas-close" onClick={handleCloseMenuClick}><i className="ion-android-close"></i></button>
                </div>
                <div className="offcanvas-mobile-menu-wrapper">
                    <div className="mobile-menu-bottom">
                        <div className="offcanvas-menu">
                            <ul>
                                <li>
                                    <a href="/"><span>Trang chủ</span></a>
                                </li>
                                <li>
                                    <a href="/aboutus"><span>Giới thiệu</span></a>
                                </li>
                                <li>
                                    <a href="/policy"><span>Chính sách</span></a>
                                </li>
                                <li>
                                    <a href="/products"><span>Sản phẩm</span></a>
                                    <ul className="mobile-sub-menu">
                                        <li>
                                            <a href="/products"><span>Áo</span></a>
                                        </li>
                                        <li>
                                            <a href="/products"><span>Quần</span></a>
                                        </li>
                                        <li>
                                            <a href="/products"><span>Váy</span></a>
                                        </li>
                                        <li>
                                            <a href="/products"><span>Phụ kiện</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span>Tài khoản</span></a>
                                    <ul className="mobile-sub-menu">
                                        {isAdmin && adminRouter()}
                                        {
                                            isLogged ? loggedRouter() :
                                                <>
                                                    <li><a href="/login">  Đăng nhập</a></li>
                                                    <li><a href="/register">  Đăng ký</a></li>
                                                </>
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button className={`material-scrolltop ${isScrollTop ? 'reveal' : ''}`} type="button"></button>
        </>
    );
}

export default Header;
