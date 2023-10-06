// import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import data from "../service/data";


interface Answer {
  questionNo: number,
  answerNo: number,
  answerResult: string
}



const PickRandomNumber = () => {
  const navigate = useNavigate();

  const randomNumbers: string[] = data.numberList;
  const answers: Answer[] = data.answers;


  const location = useLocation();
  const { questionName, questionNumber } = location.state;
  const answerNumber: number = Math.floor((Math.random() * 10) + 1);


  const handleClick = () => {
    answers.filter(answer => {
      if (answer.answerNo == answerNumber && answer.questionNo == questionNumber) {
        navigate('/result', { state: { answer: answer.answerResult } });


      }
    })

  }


  return (
    <div className="flex flex-col items-center">
      <h1>{questionName}</h1>
      <div className="grid grid-cols-9 w-1/6  bg-blue-900">
        {
          randomNumbers.map((number, index) => (
            <div className="flex" key={index}>
              <button onClick={handleClick}>
                {number}

              </button>


            </div>
          ))}
      </div>
      <button onClick={() => navigate('/')}>နောက်သို့</button>
      {/* <p>{result}</p> */}

    </div>







  );
};

export default PickRandomNumber;
