import { Link } from "react-router-dom";
import './footer.scss';
import { useEffect, useState } from "react";
function Footer(){
    const [collapse, setCollapse] = useState(true)
    const [collapse2, setCollapse2] = useState(true)
    const [collapse3, setCollapse3] = useState(true)
    useEffect(() => {
        const handleResize = () =>{
            setCollapse(window.innerWidth > 1175);
            setCollapse2(window.innerWidth > 750)
            setCollapse3(window.innerWidth > 730)
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    },[])
    return(
        <>
            <div className="footer">
                <div className="footer__one">
                    <p>Về VarustVN</p>
                    <Link to={"/updating"}>Giới thiệu</Link><br/>
                    <Link to={"/updating"}>Tuyển dụng</Link><br/>
                    <Link to={"/updating"}>Liên hệ</Link><br/>
                </div>
                <div className="footer__one">
                    {collapse3 ? (
                        <>
                            <p>Chính sách</p>
                            <Link to={"/updating"}>Chính sách bảo hành</Link><br/>
                            <Link to={"/updating"}>Chính sách giao hàng</Link><br/>
                            <Link to={"/updating"}>Chính sách bảo mật</Link><br/>
                        </>
                    ) : ("")}
                </div>
                <div className="footer__one">
                    {collapse3 ? (
                        <>
                            <p>Thông tin</p>
                            <Link to={"/updating"}>Hệ thống cửa hàng</Link><br/>
                            <Link to={"/updating"}>Hướng dẫn mua hàng</Link><br/>
                            <Link to={"/updating"}>Hướng dẫn thanh toán</Link><br/>
                            {collapse2 ? (
                                <>
                                    <Link to={"/updating"}>Hướng dẫn trả góp</Link><br/>
                                    <Link to={"/updating"}>Tra cứu địa chỉ bảo hành</Link><br/>
                                    <Link to={"/updating"}>Build PC</Link><br/>
                                </>
                            ) : ("")}
                        </>
                    ) : ("")}
                </div>
                <div className="footer__one">
                    <p>Tổng đài hỗ trợ</p>
                    <Link to={"/updating"}>Mua hàng: <span>1900.0000</span></Link><br/>
                    <Link to={"/updating"}>Bảo hành: <span>1900.0001</span></Link><br/>
                    <Link to={"/updating"}>Khiếu nại: <span>1900.0002</span></Link><br/>
                    <Link to={"/updating"}>Email: <span>loclc8533@ut.edu.vn</span></Link><br/>
                </div>
                <div className="footer__one">
                    {collapse ? (
                        <>
                            <p>Đơn vị vận chuyển</p>
                            <div className="footer__five-img">
                                <Link to={"/updating"}>
                                    <img src="/speed1.webp" alt="speed" />
                                </Link>
                                <Link to={"/updating"}>
                                    <img src="/speed2.webp" alt="speed" />
                                </Link>
                                <Link to={"/updating"}>
                                    <img src="/speed3.webp" alt="speed" />                        
                                </Link>
                                <Link to={"/updating"}>
                                    <img src="/speed4.webp" alt="speed" />
                                </Link>
                            </div>
                        </>
                    ) : ("")}
                </div>
            </div>
        </>
    )
}

export default Footer;