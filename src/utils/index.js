const API__DOMAIN = "http://localhost:3001/";

export const get = async (path) =>{
    const response = await fetch(API__DOMAIN + path);
    const result = response.json();
    return result;
}