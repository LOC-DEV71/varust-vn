import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Thay Carousel của Ant Design bằng react-slick
import { getProducts } from '../../../service';
import 'slick-carousel/slick/slick.css'; // Import CSS của slick
import 'slick-carousel/slick/slick-theme.css';
import './section-5.scss';

function SectionFive() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getProducts();
      setData(response);
    };
    fetchApi();
  }, []);

  // Cấu hình react-slick
  const settings = {
    pauseOnHover: false,
    dots: false, // Ẩn dots
    infinite: true, // Lặp vô tận
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 5, // Hiển thị 5 sản phẩm
    slidesToScroll: 1, // Chuyển 1 sản phẩm mỗi lần
    autoplay: true, // Bật autoplay
    autoplaySpeed: 2500, // 3 giây mỗi lần chuyển
    arrows: true, // Bật mũi tên
  };


  return (
    <div className="section5">
      <div className="section5__title">
        <h5>Màn hình bán chạy</h5>
        <Link to={'/'}>
          Xem tất cả <RightOutlined />
        </Link>
      </div>

      <div className="section5__products">
        <Slider {...settings}>
          {data.map(item => (
            <Link to={`screen-products/${item.id}`} className="section5__products-flex-item" title={item.title} key={item.id} >
              <div className="section5__products-flex-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="section5__products-flex-title">
                <p className='title'>{item.title}</p>
                {item.sale>0 ? (<>
                  <p className='old-price'>{item.price.toLocaleString('vi-VN')} VND</p>
                </>):
                (<>
                  
                </>
              )}
                <p className='new-price'>{item.sale>0 ? ((item.price - item.price*item.sale/100).toLocaleString('vi-VN')): (item.price.toLocaleString('vi-VN'))} VND</p>
                <div className='section5__products-flex-title-desc'>
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
  );
}

export default SectionFive;