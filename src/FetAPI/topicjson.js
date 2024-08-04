import {getAPI} from './../services'
export const getTopics = async ()=>{
    const data = await getAPI("topics");
    return data;
}

export const getTopic = async (id)=>{
    const data = await getAPI("topics?id="+id);
    return data;
}