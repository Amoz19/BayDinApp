
import { useLocation, useNavigate } from "react-router-dom";
import data from "../service/data";

interface Answer {
  questionNo: number,
  answerNo: number,
  answerResult: string
}

const PickRandomNumber = () => {
  const navigate = useNavigate();

  const randomNumbers = data.numberList;
  const answers: Answer[] = data.answers;

  const location = useLocation();
  const { questionName, questionNumber } = location.state;


  const handleClick = (answernumber: number) => {
    answers.filter(answer => {
      if (answer.answerNo == answernumber && answer.questionNo == questionNumber) {
        navigate('/result', { state: { answer: answer.answerResult } });
      }
    })
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-900 px-5">
      <h1 className="bg-slate-700 text-white p-5 rounded text-center font-bold">မေးခွန်း - {questionName}</h1>
      <div className="grid grid-cols-9 lg:w-3/6  bg-slate-800 text-white mb-3">
        {randomNumbers.map((randomNumber, index) => (
          <button
            key={index}
            onClick={() => handleClick(randomNumber.key)}
            className="p-2 lg:p-5 border border-zinc-100"
          >
            {randomNumber.value}
          </button>
        ))}
      </div>
      <button
        onClick={() => navigate('/')}
        className="bg-red-900 text-white py-1 px-3 rounded-3xl"
      >နောက်သို့</button>

    </div>
  );
};

export default PickRandomNumber;
