
import { useState } from 'react';
import data from '../service/data'
import { Link } from 'react-router-dom';

interface Questions {
    questionNo: number,
    questionName: string
}




const QuestionPage = () => {
    const questions: Questions[] = data.questions;
    const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

    const handleClick = (questionName: string) => {
        setSelectedQuestion(questionName)
    }


    return (
        <>
            <table className="table-fixed grid place-content-center m-10 border ">
                {questions.map(question => (
                    <tbody className='' key={question.questionNo}>
                        <tr className='grid grid-cols-table leading-10 bg-slate-800 text-[whitesmoke]' >
                            <td className='border border-r text-center'>
                                <Link
                                    to={`/randomNumber?questionName=${question.questionName}`}
                                    onClick={() => handleClick(question.questionName)}
                                >
                                    {question.questionNo}
                                </Link>
                            </td>
                            <td className='border border-r px-5'>
                                <Link
                                    to={`/randomNumber?questionName=${question.questionName}`}
                                    onClick={() => handleClick(question.questionName)}
                                >
                                    {question.questionName}
                                </Link>
                            </td>
                        </tr>
                        {/* </Link> */}
                    </tbody>
                ))}
            </table >
            {selectedQuestion && <p>{selectedQuestion}</p>
            }


        </>

    );
}

export default QuestionPage;