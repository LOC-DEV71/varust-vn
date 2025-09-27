import { Link } from "react-router-dom";
import { TagOutlined, FileTextOutlined, SettingOutlined, PushpinOutlined, DollarOutlined, SecurityScanOutlined } from '@ant-design/icons';
import SectionOne from "./section/section-1";
import SectionTwo from "./section/section-2";
import SectionThree from "./section/section-3";
import SectionFour from "./section/section-4";
import SectionFive from "./section/section-5";
import SectionSix from "./section/section-6";
import { useEffect, useState } from "react";

function Home(){
    const [collapse, setCollapse] = useState(true);
    useEffect(() => {
            const handleResize = () => {
            if (window.innerWidth <= 855) {
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
    return(
        <>
            <div className="layout__main-top">
                <Link to={"updating"} title="Build PC tặng màn 240Hz">
                    <TagOutlined />
                    <div className="layout__main-top-title">
                        {collapse ? "Build PC tặng màn 240Hz":"Build PC"}
                    </div>
                </Link>
                <Link to={"updating"} title="Tin tức công nghệ">
                    <FileTextOutlined />
                    <div className="layout__main-top-title">
                        {collapse ? "Tin tức công nghệ" : "Tin Tức"}
                    </div>
                </Link>
                <Link to={"updating"} title="Dịch vụ sửa chữa">
                    <SettingOutlined />
                    <div className="layout__main-top-title">
                        {collapse ? "Dịch vụ sửa chữa" : "Sửa Chữa"}
                    </div>
                </Link>
                <Link to={"updating"} title="Dịch vụ kĩ thuật tại nhà">
                    <PushpinOutlined />
                    <div className="layout__main-top-title">
                        {collapse ? " Dịch vụ kĩ thuật tại nhà":"Dịch vụ"}
                       
                    </div>
                </Link>
                <Link to={"updating"} title="Thay cũ đổi mới">
                    <DollarOutlined />
                    <div className="layout__main-top-title">
                        {collapse ? "Thay cũ đổi mới":"Đổi"}
                        
                    </div>
                </Link>
                <Link to={"updating"} title="Tran cứu bảo hành">
                    <SecurityScanOutlined />
                    <div className="layout__main-top-title">
                        {collapse ? "Tra cứu bảo hành" : "Tra cứu"}
                        
                    </div>
                </Link>
            </div>
            


            <div className="layout__main-sectionOne">
                <SectionOne />
            </div>

            <div className="layout__main-two">
                <SectionTwo/>
            </div>
            <div className="layout__main-three">
                <SectionThree/>
            </div>
            <div className="layout__main-four">
                <SectionFour/>
            </div>
            <div className="layout__main-five">
                <SectionFive/>
            </div>
            <div className="layout__main-six">
                <SectionSix/>
            </div>

        </>
    )
}

export default Home;