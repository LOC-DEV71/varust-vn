import {Link, useParams} from 'react-router-dom';
import {HomeOutlined, RightOutlined} from '@ant-design/icons';
import { Carousel } from 'antd';
import { useEffect, useState } from 'react';
import { getApi } from '../../service';
import './index.scss';
function News(){
    const [data, setData] = useState([]);
    const {id} = useParams();
    // console.log(id)
    
    useEffect(() => {
        const fetchApi = async () =>{
            const response = await getApi("news");
            setData(response);
        }
        fetchApi();
    }, [])

    const news = data.find(item => Number(item.id) === Number(id))

    const newsReset = news ? (news) : [];
    console.log(newsReset)
    return(
        <>
            <div className="news">
                <div className="news__top">
                    <Link to={"/"}><HomeOutlined /> Trang chủ <RightOutlined /></Link>
                    <Link to={"/blog"}>Tin tức công nghệ <RightOutlined /></Link>
                    <p>{newsReset.title1}</p>
                </div>
                <div className="news__hero">
                    <Carousel autoplay autoplaySpeed={2000} dots={false} pauseOnHover={false}>
                        <img src='/illustration-15.webp' alt='ảnh top' />
                        <img src='/illustration-16.webp' alt='ảnh top' />
                        <img src='/illustration-17.webp' alt='ảnh top' />
                    </Carousel>
                </div>
            </div>
            <div className='news-hero__main'>
                <div className='news-hero__main-title news-hero__main-title1'>
                    {newsReset.title1}
                </div>
                <div className='news-hero__main-desc'>
                    {newsReset.desc1}
                </div>
                {newsReset.image1 ? (<>
                    <div className='news-hero__main-img'>
                        <img src={newsReset.image1} alt={newsReset.title}/>
                    </div>
                </>) : (<></>)}
                <div className='news-hero__main-title'>
                    {newsReset.title2}
                </div>
                <div className='news-hero__main-desc'>
                    {newsReset.desc2}
                </div>
                {newsReset.image2 ? (<>
                    <div className='news-hero__main-img'>
                        <img src={newsReset.image2} alt={newsReset.title}/>
                    </div>
                </>) : (<></>)}
                <div className='news-hero__main-desc'>
                    {newsReset.desc3}
                </div>
                {newsReset.image3 ? (<>
                    <div className='news-hero__main-img'>
                        <img src={newsReset.image3} alt={newsReset.title}/>
                    </div>
                </>) : (<></>)}
                 <div className='news-hero__main-title'>
                    {newsReset.title3}
                </div>
                <div className='news-hero__main-desc'>
                    {newsReset.desc4}
                </div>
                {newsReset.image4 ? (<>
                    <div className='news-hero__main-img'>
                        <img src={newsReset.image4} alt={newsReset.title}/>
                    </div>
                </>) : (<></>)}
                <div className='news-hero__main-title'>
                    {newsReset.title4}
                </div>
                <div className='news-hero__main-desc'>
                    {newsReset.desc5}
                </div>
            </div>

            <div className='news__support'>
                <div className='news__support-left'>
                    <img src='/illustration-18.webp' alt='quảng cáo' />
                </div>
                <div className='news__support-right'>
                    <img src='/illustration-19.webp' alt='quảng cáo' />
                    <img src='/illustration-20.webp' alt='quảng cáo' />
                </div>
            </div>
        </>
    )
}

export default News;