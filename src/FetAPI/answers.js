import { addAPI, getAPI } from "../services"

export const getAllAnswser = async ()=>{
    const data = getAPI("answers");
    return data;
}

export const getAnswser = async (id)=>{
    const data = getAPI("answers?id="+id);
    return data;
}
export const addAnswers = async (dataAdd) => {
    const result = await addAPI("answers", dataAdd);
    return result;
 }