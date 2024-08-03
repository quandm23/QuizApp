
import { getAPI, addAPI } from "../services"

export const login = async (email, password) => {
   const resultemail = await getAPI("users?email=" + email);
   const resultpassword = await getAPI("users?password=" + password);
   if (JSON.stringify(resultemail) === JSON.stringify(resultpassword)) {
      return resultpassword;
   } else {
      return [];
   }
}

export const register = async (dataAdd) => {
   const result = await addAPI("users", dataAdd);
   return result;
}