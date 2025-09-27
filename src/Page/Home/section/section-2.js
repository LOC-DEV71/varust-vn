import { ThunderboltOutlined } from "@ant-design/icons";
import './section-3.scss';
import { Link } from "react-router-dom";
import { getApi } from '../../../service';
import 'slick-carousel/slick/slick.css'; // Import CSS của slick
import 'slick-carousel/slick/slick-theme.css';
import './section-5.scss';
import Slider from 'react-slick'; // Thay Carousel của Ant Design bằng react-slick
import { useEffect, useState } from "react";
import './section-2.scss';

function SectionThree(){
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
          const response = await getApi("products");
          setData(response);
        };
        fetchApi();
      }, []);

   

    const settings = {
        pauseOnHover: false,
        dots: false, // Ẩn dots
        infinite: true, // Lặp vô tận
        speed: 500, // Tốc độ chuyển slide
        slidesToShow: 4, // Hiển thị 5 sản phẩm
        slidesToScroll: 1, // Chuyển 1 sản phẩm mỗi lần
        autoplay: true, // Bật autoplay
        autoplaySpeed: 2500, // 3 giây mỗi lần chuyển
        arrows: true, // Bật mũi tên
        responsive: [
            {
            breakpoint: 1111, // màn hình <= 1111px
            settings: {
                slidesToShow: 3, // hiển thị 3 sản phẩm
            }
            },
            {
            breakpoint: 850,   // màn hình <= 775px
            settings: {
                slidesToShow: 2, // hiển thị 2 sản phẩm
            }
            },
            {
            breakpoint: 650,   // màn hình <= 520px
            settings: {
                slidesToShow: 1, // hiển thị 1 sản phẩm
            }
            },
            {
            breakpoint: 400,   // màn hình <= 520px
            settings: {
                slidesToShow: 1, // hiển thị 1 sản phẩm
            }
            }
        ]
        
    };

    const productSale = data.filter(item => item.sale > 0)
    const productSaleAwait = productSale ? productSale : [];
    return(
        <>
            <div className="section2">
                <h3 className="section2__titletop"> <ThunderboltOutlined/> DEAL HỜI TUẦN NÀY</h3>


                <div className="section2__products">

                    <div className="section2__products-left">
                        <img src="/sale.webp" alt="deal" />
                    </div>


                    <div className="section2__products-right">
                        <Slider {...settings}>
                            {productSaleAwait.map(item => (
                                <Link to={`/screen-products/${item.id}`} className="section2__products-right-item" key={item.id}>
                                    <div className="section2__products-right-item-img">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="section2__products-right-item-title">
                                        <p className='title'>{item.title}</p>
                                        {item.sale>0 ? (<>
                                        <p className='old-price'>{item.price.toLocaleString('vi-VN')} VND</p>
                                        </>):
                                        (<>
                                        
                                        </>
                                    )}
                                        <p className='new-price'>{item.sale>0 ? ((item.price - item.price*item.sale/100).toLocaleString('vi-VN')): (item.price.toLocaleString('vi-VN'))} VND</p>
                                        <div className="section2__products-right-item-title-desc">
                                            {item.sale > 0 ? (<>
                                                <p className='sale'>-{item.sale}%</p>
                                            </>):("")}
                                            <p className='quantity'>Số lượng: <span>{item.quantity}</span></p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </Slider>
                    </div>
                   
                </div>
            </div>  
        </>
    )
}

export default SectionThree;