import {Layout} from 'antd';
import MenuSider from './menuSider';
import { Carousel } from "antd";
import './section-1.scss';
const {Sider, Content} = Layout;
function SectionOne(){
    return(
        <>
            <Layout className='layout'>
                <Sider className="sider" theme="light">
                    <MenuSider/>
                </Sider>
                <Content className="content">
                    <div className="content__top">
                <div className="content__top-left">
                    <Carousel autoplay dots={false} autoplaySpeed={2700} pauseOnHover={false}>
                            <div className='content__top-left-img'>
                                <img src='/illustration-4.webp' alt='img-bar' />
                            </div>
                            <div className='content__top-left-img'>
                                <img src='/illustration-5.webp' alt='img-bar' />
                            </div>
                            <div className='content__top-left-img'>
                                <img src='/illustration-6.webp' alt='img-bar' />
                            </div>
                            <div className='content__top-left-img'>
                                <img src='/illustration-7.webp' alt='img-bar' />
                            </div>
                            <div className='content__top-left-img'>
                                <img src='/illustration-8.webp' alt='img-bar' />
                            </div>
                        </Carousel>
                    </div>
                    <div className="content__top-right">
                        <div className='content__top-right-img'>
                            <img src='/illustration-9.webp' alt='img-bar' />
                        </div>
                        <div className='content__top-right-img'>
                            <img src='/illustration-10.webp' alt='img-bar' />
                        </div>
                    </div>
                </div>

                <div className="content__bott">
                    <div className='content__bott-img'>
                        <img src='/illustration-11.webp' alt='img-bar' />
                    </div>
                    <div className='content__bott-img'>
                        <img src='/illustration-12.webp' alt='img-bar' />
                    </div>
                    <div className='content__bott-img'>
                        <img src='/illustration-13.webp' alt='img-bar' />
                    </div>
                </div>
                </Content>
            </Layout>
        </>
    )
}

export default SectionOne;