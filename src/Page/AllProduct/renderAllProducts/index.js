import { useEffect, useState } from "react";
import { getApi } from "../../../service";
import { Link, useParams } from "react-router-dom";
import './index.scss';

function RenderAllProducts(){
    const [data, setData] = useState([]);
    const {category} = useParams();
    useEffect(() => {
        const fetchApi = async () =>{
            const respone = await getApi("products");
            setData(respone);
        }
        fetchApi();
    }, [])
    const products = data.filter(item => item.category === category);
    const setScreen = products ? products : [];
    // console.log(screen);
    return(
        <>
            <div className="fullScreen">
                {setScreen.map(item => (
                    <Link to={`/screen-products/${item.id}`} className="fullScreen__item" key={item.id}>
                        <div className="fullScreen__item-img">
                            <img src={item.image} alt={item.title}/>
                        </div>
                        <div className="fullScreen__item-title">
                            <p>{item.title}</p>
                        </div>
                        <div className="fullScreen__item-price">
                            <p className="price-old">{item.price.toLocaleString('vi-VN')} VND</p>
                            {item.sale > 0 ? (
                                <p className="price">{(item.price - item.price*item.sale/100).toLocaleString('vi-VN')} VND</p>
                            ):(".")}
                        </div>
                        <div className="fullScreen__item-quantitySale">
                            {item.sale > 0 ? (
                                <p className="sale">{item.sale}%</p>
                            ):("")}
                            <p className="quantity"><span>Số lượng:</span> {item.quantity}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default RenderAllProducts;