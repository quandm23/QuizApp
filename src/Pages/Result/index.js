import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswser } from "../../FetAPI/answers";
import { getQuestions } from "../../FetAPI/questionjson";
import { getTopic } from "../../FetAPI/topicjson";

function Result() {
   const [dataTopics, setDataTopic] = useState();
   const [dataFinal,setDataFinal] = useState();

   const prams = useParams();
   // Get Answers by id
   // Get Answers by topicId
   useEffect(() => {
      const fet = async () => {
         const dataA = await getAnswser(prams.id);
         const topicId = dataA[0].topicId
         const dataQ = await getQuestions(topicId);
         const dataT = await getTopic(topicId);
       
         const dataF = [];
         for(let i=0 ; i<dataQ.length ;i++){
            
            dataF.push({
               ...dataQ[i],
               ...dataA[0].answers.find(item => item.questionId === dataQ[i].id)
            })
         }
         setDataTopic(dataT);
         setDataFinal(dataF);
      }
      fet();
   }, []);
   console.log(dataFinal);

   return (<>
      {dataTopics && dataTopics.length > 0 && (<h1>Weocome to Quiz Topic : <span>{dataTopics[0].name}</span></h1>)}
      {dataFinal && (<>
         {dataFinal.map((item, index) => {
            return (<>
               <div>
                  <strong className={item.answer=== item.correctAnswer?"correct":"notcorrect"}>Câu{index + 1}: {item.question}</strong>
                  {item.answers.map((items,indexs) => {
                      let checked = false;
                      let className = "";
                      if(item.answer === indexs){
                        checked = true;
                        className = "selected"
                      }

                      if(item.correctAnswer === indexs){
                        className += " true"
                      }

                      return (<>
                      <div className="check">
                      <input type="radio" checked={checked}/>
                      <span className={className+" check"}>{items}</span>
                      </div>
                      </>)
                  })}
               </div>
            </>);
         })}
      </>)}
   </>);
}
export default Result;