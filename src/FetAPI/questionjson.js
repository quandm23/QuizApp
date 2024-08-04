import { getAPI } from "../services"
export const getQuestions = async(topicID)=>{
  const data = await getAPI("questions?topicId="+topicID);
  return data;
}