import { FetAPI } from "../FetAPI"
const domain = "http://localhost:3002/"

export const getAPI =  async (path) =>{
      const data = await FetAPI(domain+path);
      return data;
}

export const addAPI = async (path,dataAdd)=>{
      const res = await fetch(domain+path, {
         method : "Post",
         headers : {
          Accept : "aplication/json",
          "Content-type" : "aplication/json"
        },
        body : JSON.stringify(dataAdd),
      });
      const data = await res.json();
      return data;
}