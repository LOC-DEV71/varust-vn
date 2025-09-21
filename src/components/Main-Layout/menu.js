    import { CustomerServiceOutlined, EnvironmentOutlined, FileSearchOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
    import { Input } from 'antd';
    import { Link } from 'react-router-dom';
    function Menu(){
        return(
            <>
                <div className="layout__header-menu-logo">
                    <Link to={"/"}>
                        <img src="/logo-varust-vn.webp" alt="logo" />
                    </Link>
                </div>
                <div className="layout__header-menu-search">
                    <Input placeholder='Bạn cần tìm gì?' suffix={<SearchOutlined/>}/>
                </div>
                <div className="layout__header-menu-hotline">
                    <CustomerServiceOutlined/>
                    <div className="layout__header-menu-hotline-title">
                            Hotline
                            <br/>
                            <Link >
                                19001900
                            </Link>
                    </div>
                </div>
                <div className="layout__header-menu-system">
                    <EnvironmentOutlined />
                    <div className="layout__header-menu-system-title">
                            <Link >
                                Hệ thống<br/>Showroom
                            </Link>
                    </div>
                </div>
                <div className="layout__header-menu-tracuu">
                    <FileSearchOutlined />
                    <div className="layout__header-menu-tracuu-title">
                            <Link >
                                Tra cứu <br/> đơn hàng
                            </Link>
                    </div>
                </div>
                <div className="layout__header-menu-cart">
                    <ShoppingCartOutlined />
                    <div className="layout__header-menu-cart-title">
                            <Link >
                                Giỏ<br/>hàng
                            </Link>
                    </div>
                </div>
                <div className="layout__header-menu-user">
                    <img src='k' alt=''/>
                </div>
            </>
        )
    }

    export default Menu;