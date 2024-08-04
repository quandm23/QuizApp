import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getQuestions } from "../../FetAPI/questionjson";
import { getTopic } from "../../FetAPI/topicjson";
import { addAnswers, getAllAnswser } from "../../FetAPI/answers";
import {getCookie} from './../../cookie/index'
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answers = []; 
    for(let i=0 ; i<e.target.length - 1 ;i++){
     if(e.target.elements[i].checked){
      answers.push({
          "questionId": parseInt(e.target.elements[i].name),
          "answer": parseInt(e.target.elements[i].value)
      });
     
     }
    }
    const dataAnswer = await getAllAnswser();
    const id =dataAnswer.length+1;
    const options = {
      id : id,
      userId: getCookie("id"),
      topicId: topic.id,
      answers: answers
    }

    const result = await addAnswers(options);
    if(result){
      navigate("/result/"+id);
    }else{
      alert("Wrong!");
    }
  };

  return (<>
    <div>
      <button className="back" onClick={handleBack}>Back</button>
      <div>{dataTopic && dataTopic.length > 0 && (<h1>Weocome to Quiz Topic : <span>{dataTopic[0].name}</span></h1>)}</div>
    </div>

    <form onSubmit={handleSubmit}>
      <div className="quetions">
        {dataQuestions && (<>
          {dataQuestions.map((item, index) => {
            return (<div className="quetions__item" key={item.id}>
              <strong className="quetions__title">Câu {index + 1}: {item.question}</strong>
              {item.answers.map((itemans, indexans) => {
                return (<div>
                  <input type="radio" name={item.id} value={indexans} id={"quiz" + item.id + indexans} />
                  <label htmlFor={"quiz" + item.id + indexans}>{itemans}</label>
                </div>);
              })}
            </div>);
          })}
        </>)}
        <button>Submit</button>
      </div>
    </form>
  </>);
}

export default Quiz;