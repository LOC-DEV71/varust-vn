import { Link } from "react-router-dom";
import { TagOutlined, FileTextOutlined, SettingOutlined, PushpinOutlined, DollarOutlined, SecurityScanOutlined } from '@ant-design/icons';
import SectionOne from "./section/section-1";
import SectionTwo from "./section/section-2";
import SectionThree from "./section/section-3";
import SectionFour from "./section/section-4";
import SectionFive from "./section/section-5";
import SectionSix from "./section/section-6";

function Home(){
    return(
        <>
            <div className="layout__main-top">
                <Link to={"updating"}>
                    <TagOutlined />
                    <div className="layout__main-top-title">
                        Build PC tặng màn 240Hz
                    </div>
                </Link>
                <Link to={"updating"}>
                    <FileTextOutlined />
                    <div className="layout__main-top-title">
                        Tin tức công nghệ
                    </div>
                </Link>
                <Link to={"updating"}>
                    <SettingOutlined />
                    <div className="layout__main-top-title">
                        Dịch vụ sửa chữa
                    </div>
                </Link>
                <Link to={"updating"}>
                    <PushpinOutlined />
                    <div className="layout__main-top-title">
                        Dịch vụ kĩ thuật tại nhà
                    </div>
                </Link>
                <Link to={"updating"}>
                    <DollarOutlined />
                    <div className="layout__main-top-title">
                        Thay cũ đổi mới
                    </div>
                </Link>
                <Link to={"updating"}>
                    <SecurityScanOutlined />
                    <div className="layout__main-top-title">
                        Tra cứu bảo hành
                    </div>
                </Link>
            </div>
            


            <div className="layout__main-sectionOne">
                <SectionOne/>
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