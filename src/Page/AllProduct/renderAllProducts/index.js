import { useEffect, useState } from "react";
import { getApi } from "../../../service";

function RenderAllProducts(){
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchApi = async () =>{
            const respone = await getApi("products");
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