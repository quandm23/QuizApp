import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getQuestions } from "../../FetAPI/questionjson";
import { getTopic } from "../../FetAPI/topicjson";
function Quiz() {
  //State
  const [dataQuestions, setDataQuestions] = useState();
  const [dataTopic, setDataTopic] = useState();

  //Back
  const navigate = useNavigate();
  const topic = useParams();
  console.log(topic.id);

  //Back
  const handleBack = () => {
    navigate(-1);
  }

  //Fet API Quetions
  useEffect(() => {
    const fet = async () => {
      const data = await getQuestions(topic.id);
      setDataQuestions(data);
    }
    fet();
  }, []);

  //FetAPI Topic Name
  useEffect(() => {
    const fet = async () => {
      const data = await getTopic(topic.id);
      setDataTopic(data);
    }
    fet();
  }, []);
  return (<>
    <div>
      <button className="back" onClick={handleBack}>Back</button>
      <div>{dataTopic && dataTopic.length > 0 && (<h1>Weocome to Quiz Topic : <span>{dataTopic[0].name}</span></h1>)}</div>
    </div>
    
    <div className="quetions">
    {dataQuestions && (<>
        {dataQuestions.map((item,index) =>{
          return (<div className="quetions__item" key={item.id}>
            <strong className="quetions__title">Câu {index+1}: {item.question}</strong>
            {item.answers.map((itemans,indexans)=>{
             return (<div>
             <input type="radio" name={item.id} value={indexans} id={"quiz"+item.id+indexans}/>
             <label htmlFor={"quiz"+item.id+indexans}>{itemans}</label>
             </div>);
            })}
          </div>);
        })}
    </>) }
    </div>
  </>);
}

export default Quiz;