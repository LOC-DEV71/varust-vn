import { Link } from "react-router-dom";
import { 
  TagOutlined, 
  FileTextOutlined, 
  SettingOutlined, 
  PushpinOutlined, 
  DollarOutlined, 
  SecurityScanOutlined 
} from '@ant-design/icons';
import SectionOne from "./section/section-1";
import SectionTwo from "./section/section-2";
import SectionThree from "./section/section-3";
import SectionFour from "./section/section-4";
import SectionFive from "./section/section-5";
import SectionSix from "./section/section-6";
import { useEffect, useState } from "react";

function Home(){
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 855);
      setShowIcon(window.innerWidth > 500);
    };
    handleResize(); // chạy 1 lần khi load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return(
    <>
      <div className="layout__main-top">
        <Link to={"updating"} title="Build PC tặng màn 240Hz">
          {showIcon && <TagOutlined />}
          <div className="layout__main-top-title">
            {isLargeScreen ? "Build PC tặng màn 240Hz" : "Build PC"}
          </div>
        </Link>

        <Link to={"updating"} title="Tin tức công nghệ">
          {showIcon && <FileTextOutlined />}
          <div className="layout__main-top-title">
            {isLargeScreen ? "Tin tức công nghệ" : "Tin Tức"}
          </div>
        </Link>

        <Link to={"updating"} title="Dịch vụ sửa chữa">
          {showIcon && <SettingOutlined />}
          <div className="layout__main-top-title">
            {isLargeScreen ? "Dịch vụ sửa chữa" : "Sửa Chữa"}
          </div>
        </Link>

        <Link to={"updating"} title="Dịch vụ kĩ thuật tại nhà">
          {showIcon && <PushpinOutlined />}
          <div className="layout__main-top-title">
            {isLargeScreen ? "Dịch vụ kĩ thuật tại nhà" : "Dịch vụ"}
          </div>
        </Link>

        <Link to={"updating"} title="Thay cũ đổi mới">
          {showIcon && <DollarOutlined />}
          <div className="layout__main-top-title">
            {isLargeScreen ? "Thay cũ đổi mới" : "Đổi"}
          </div>
        </Link>

        <Link to={"updating"} title="Tra cứu bảo hành">
          {showIcon && <SecurityScanOutlined />}
          <div className="layout__main-top-title">
            {isLargeScreen ? "Tra cứu bảo hành" : "Tra cứu"}
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
