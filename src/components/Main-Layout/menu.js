    import { CustomerServiceOutlined, EnvironmentOutlined, FileSearchOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
    import { Input } from 'antd';
import { useEffect, useState } from 'react';
    import { Link } from 'react-router-dom';
    function Menu(){
        const [collapse, setCollapse] = useState(true);
        const[deleteIcon, setDeleteIcon] = useState(true);
        const[logo, setLogo] = useState(true);
        
            useEffect(() => {
                const handleResize = () => {
                if (window.innerWidth <= 1290) {
                    setCollapse(false);
                } else {
                    setCollapse(true);
                }
                };
        
                // chạy 1 lần khi load
                handleResize();
        
                // lắng nghe resize
                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
            }, []);
            useEffect(() => {
                const handleResize = () => {
                if (window.innerWidth <= 1100) {
                    setDeleteIcon(false);
                } else {
                    setDeleteIcon(true);
                }
                };
        
                // chạy 1 lần khi load
                handleResize();
        
                // lắng nghe resize
                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
            }, []);
            useEffect(() => {
                const handleResize = () => {
                if (window.innerWidth <= 960) {
                    setLogo(false);
                } else {
                    setLogo(true);
                }
                };
        
                // chạy 1 lần khi load
                handleResize();
        
                // lắng nghe resize
                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
            }, []);
        return(
            <>
                <div className={logo ? "layout__header-menu-logo":"layout__header-menu-logo-1"}>
                    <Link to={"/"}>
                        <img src={logo ? ("/logo-varust-vn.png"):("/logo-varust-vn-1.webp")} alt="logo" />
                    </Link>
                </div>
                <div className="layout__header-menu-search">
                    <Input placeholder='Bạn cần tìm gì?' suffix={<SearchOutlined/>}/>
                </div>

                
                {deleteIcon ? (
                    <>
                        <div className="layout__header-menu-hotline">
                            <CustomerServiceOutlined/>
                            {collapse ? (
                                <div className="layout__header-menu-hotline-title">
                                    Hotline
                                    <br/>
                                    <Link >
                                        19001900
                                    </Link>
                                </div>
                            ): ""}
                        </div>
                        <div className="layout__header-menu-system">
                            <EnvironmentOutlined />
                            {collapse ? (
                                <div className="layout__header-menu-system-title">
                                    <Link >
                                        Hệ thống<br/>Showroom
                                    </Link>
                            </div>
                            ):("")}
                            
                        </div>
                    </>
                ):("")}
                <div className="layout__header-menu-tracuu">
                    <FileSearchOutlined />
                    {collapse ? (
                        <div className="layout__header-menu-tracuu-title">
                            <Link >
                                Tra cứu <br/> đơn hàng
                            </Link>
                    </div>
                    ):("")}
                    
                </div>
                <div className="layout__header-menu-cart">
                    <ShoppingCartOutlined />
                    {collapse ? (
                        <div className="layout__header-menu-cart-title">
                            <Link >
                                Giỏ<br/>hàng
                            </Link>
                    </div>
                    ):("")}
                    
                </div>
                <div className="layout__header-menu-user">
                    <img src='k' alt=''/>
                </div>
            </>
        )
    }

    export default Menu;