    import {Layout} from 'antd';
    import MenuSider from './menuSider';
    import { Carousel } from "antd";
    import './section-1.scss';
    import { useEffect, useState } from 'react';
    const {Sider, Content} = Layout;
    function SectionOne(){
        const [collapse, setCollapse] = useState(true);
        // const [renderSider, setRenderSider] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 1020) {
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
            <button onClick={()=>setCollapse(!collapse)}>00</button>
                <Layout className='layout'>
                    <Content className="content">

                    <Sider width={180} className={collapse ? "sider" : "sider-none"} theme="light">
                        <MenuSider  />
                    </Sider>

                    <div className="content__main">
                        <div className='content__main-top'>
                            <div className="content__main-top-left">
                                <Carousel autoplay dots={true} autoplaySpeed={2700} pauseOnHover={false} arrows >
                                    <div className='content__main-top-left-img'>
                                        <img src='/illustration-4.webp' alt='img-bar' />
                                    </div>
                                    <div className='content__main-top-left-img'>
                                        <img src='/illustration-5.webp' alt='img-bar' />
                                    </div>
                                    <div className='content__main-top-left-img'>
                                        <img src='/illustration-6.webp' alt='img-bar' />
                                    </div>
                                    <div className='content__main-top-left-img'>
                                        <img src='/illustration-7.webp' alt='img-bar' />
                                    </div>
                                    <div className='content__main-top-left-img'>
                                        <img src='/illustration-8.webp' alt='img-bar' />
                                    </div>
                                </Carousel>
                            </div>
                            <div className="content__main-top-right">
                                <div className='content__main-top-right-img'>
                                    <img src='/illustration-9.webp' alt='img-bar' />
                                </div>
                                <div className='content__main-top-right-img'>
                                    <img src='/illustration-10.webp' alt='img-bar' />
                                </div>
                            </div>
                        </div>

                        <div className="content__main-bott">
                            <div className='content__main-bott-img'>
                                <img src='/illustration-11.webp' alt='img-bar' />
                            </div>
                            <div className='content__main-bott-img'>
                                <img src='/illustration-12.webp' alt='img-bar' />
                            </div>
                            <div className='content__main-bott-img'>
                                <img src='/illustration-21.webp' alt='img-bar' />
                            </div>
                        </div>
                    </div>
                    </Content>
                </Layout>
            </>
        )
    }

    export default SectionOne;