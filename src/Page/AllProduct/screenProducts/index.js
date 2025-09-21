import { Link } from "react-router-dom";
import { RightOutlined, HomeOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from '../../../service';
import { Button, Image } from 'antd';
import './index.scss';

function ProductsScreen() {
  const [data, setData] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getProducts();
      setData(response);
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
            <Button>MUA NGAY</Button>
        </div>
    </div>

      <div className="products-screen__evaluate"></div>
      <div className="products-screen__similar"></div>

    </div>
    </>
  );
}

export default ProductsScreen;