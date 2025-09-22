import { useEffect, useState } from "react";
import { getProducts } from "../../../service";

function RenderAllProducts(){
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchApi = async () =>{
            const respone = await getProducts();
            setData(respone);
        }
        fetchApi();
    }, [])
    console.log(data);
    return(
        
        <>
        
        </>
    )
}

export default RenderAllProducts;