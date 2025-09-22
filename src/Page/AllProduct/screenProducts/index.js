import { Link } from "react-router-dom";
import { RightOutlined, HomeOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNews, getProducts } from '../../../service';
import { Image } from 'antd';
import './index.scss';

function ProductsScreen() {
  const [data, setData] = useState([]);
  const [news, setNews] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getProducts();
      setData(response);
    };
    fetchApi();
  }, []);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getNews();
      setNews(response);
    };
    fetchApi();
  }, []);

  const product = data.find(item => Number(item.id) === Number(id));

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  if (!product) return <div style={{ minHeight: '100vh' }}>Đang tải sản phẩm...</div>;

  const images = [
    product.image,
    product.images1,
    product.images2,
    product.images3
  ].filter(Boolean);


  console.log(news)

  return (
    <>
    <div className="products-screen__hero">
        <Link to={"/"}><HomeOutlined /> Trang chủ <RightOutlined /></Link>
        <Link to={"updating"}>Danh Mục <RightOutlined /></Link>
        <p>{product.title}</p>
      </div>
    <div className="products-screen">

      <div className="products-screen__products">
        <div className="products-screen__products-flex">
            <div className="products-screen__products-flex-left">
                {images.map((img, index) => (
                    <img
                    key={index}
                    src={img}
                    alt={`thumb-${index}`}
                    onClick={() => setMainImage(img)}
                    className={mainImage === img ? "border-img" : ""}
                    />
                ))}
            </div>

            <div className="products-screen__products-flex-right">
            {mainImage ? (
                <Image src={mainImage} alt="ảnh chính" />
            ) : (
                <p>Đang tải ảnh</p>
            )}
            </div>
        </div>
        


        <div className="products-screen__products-info">
            <p className="title">{product.title}</p>
            <p className="quantity">
            Số lượng: <span>{product.quantity}</span>
            </p>

            <div>
                Xem đánh giá
            </div>


            <div className="products-screen__products-info-price">
                <p className="new-price">
                    {(product.price - (product.price * product.sale) / 100).toLocaleString('vi-VN')} VND
                </p>
                {product.sale ? (<>
                    <p className="old-price">{product.price.toLocaleString('vi-VN')} VND</p>
                </>) : (
                    ""
                )}
                <p className="sale">-{product.sale}%</p>
            </div>
            <p className="setQuantity"></p>
            <button>
                <p>MUA NGAY</p>
                <span>Giao tận nơi hoặc nhận tại cửa hàng</span>
            </button>
        </div>
    </div>
    </div>


    <div className="infoProducts">
        <div className="infoProducts__eva">
          <div className="infoProducts__eva-top">
            <h5>Cấu hình</h5>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>1</p>
          </div>
          <div className="infoProducts__eva-top">
            <h5>Thông tin sản phẩm</h5>
            <p>{product.description}</p>
          </div>
          <div className="infoProducts__eva-similar">
              <h5>Nhận xét và đánh giá {product.title}</h5>
            </div>
        </div>
        <div className="infoProducts__news">
            <h5>Tin tức về công nghệ</h5>
            {news.map(item => (
              <Link to={`/news/${item.id}`} className="infoProducts__news-info" key={item.id}>
                <div className="infoProducts__news-info-img">
                  <img src={item.image1} alt={item.title1} />
                </div>
                <div className="infoProducts__news-info-title">
                  <p>{item.title1} </p>
                </div>
              </Link>
            ))}
        </div>
      </div>



      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </>
  );
}

export default ProductsScreen;