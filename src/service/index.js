import { get } from "../utils"

export const getApi = async (path) =>{
    const result = await get(path);
    return result;
}
