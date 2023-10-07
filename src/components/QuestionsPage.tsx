import { useState } from 'react';
import data from '../service/data'

import { useNavigate } from 'react-router-dom';

import { Pagination } from "@mui/material";

interface Questions {
    questionNo: number,
    questionName: string
}

const QuestionPage = () => {
    const [query, setQuery] = useState<string>('')
    const questions: Questions[] = data.questions;

    const filteredItems = questions.filter(question => {
        return question.questionName.includes(query)
    })

    const navigator = useNavigate();



    const [currentPage, setCurrentPage] = useState(1);
    const questionPerPage = 8;

    const lastPostIndex = currentPage * questionPerPage;
    const firstPostIndex = lastPostIndex - questionPerPage;

    const currentBlogs = filteredItems.slice(firstPostIndex, lastPostIndex)

    const pageCount = Math.ceil(questions.length / questionPerPage);


    const handleClick = (questionName: string, questionNumber: number) => {
        navigator('/randomNumber',
            { state: { questionName: questionName, questionNumber: questionNumber } }
        );
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };



    return (
        <div className='bg-slate-800 h-screen flex justify-center items-center'>
            <div className='md:w-3/4 mx-2 md:mx-auto ' >
                <input
                    type='text'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className='w-full p-2 rounded-3xl border-2 border-slate-400 focus:outline-none mb-3'
                    placeholder='နမူနာ _ အဝေးရောက်နေသူ၏ ကောင်းခြင်း/ဆိုးခြင်းနှင့် ဆိုင်သော အဟော။' />

                {currentBlogs.map(question => (
                    <div key={question.questionNo}
                        onClick={() => handleClick(question.questionName, question.questionNo)}
                        className='my-2 rounded grid lg:grid-cols-latop leading-10 bg-slate-300 text-zinc-900'
                    >
                        <button>{question.questionNo}</button>
                        <button className='text-center lg:text-left'>{question.questionName}</button>
                    </div>
                ))}

                <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={handlePageChange}
                    color='primary'
                    className=" bg-slate-300 grid place-items-center mt-4"
                />
            </div>
        </div>







    );
}

export default QuestionPage;