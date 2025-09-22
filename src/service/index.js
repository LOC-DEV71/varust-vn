import { get } from "../utils"

export const getProducts = async () =>{
    const result = await get("products");
    return result;
}
export const getNews = async () =>{
    const result = await get("news");
    return result;
}