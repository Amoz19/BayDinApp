import { useMemo, useState } from 'react';
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

    const filteredItems = useMemo(() => {
        return questions.filter(question => {
            return question.questionName.includes(query);
        });
    }, [questions, query]);


    const navigator = useNavigate();



    const [currentPage, setCurrentPage] = useState(1);
    const questionPerPage = 5;

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
        event.preventDefault();
        setCurrentPage(value);
    };



    return (
        <div className='h-screen  bg-slate-800 flex flex-col justify-center items-center px-3 relative'>
            <h1 className='text-3xl my-3 text-white'>လက်ထောက်ဗေဒင်</h1>
            <div className='md:w-3/4 mx-2 md:mx-auto ' >
                <input
                    type='text'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className='w-full p-2 rounded-3xl border-2 border-slate-400 focus:outline-none my-3 text-black'
                    placeholder='နမူနာ _ အဝေးရောက်နေသူ၏ ကောင်းခြင်း/ဆိုးခြင်းနှင့် ဆိုင်သော အဟော။' />

                {currentBlogs.map(question => (
                    <div key={question.questionNo}
                        onClick={() => handleClick(question.questionName, question.questionNo)}
                        className='my-3 w-full p-4 m-auto rounded grid lg:grid-cols-latop bg-slate-300 text-zinc-900'
                    >
                        <button className='border-b-2 lg:border-b-0 lg:border-r-2 border-slate-700 flex justify-center'>{question.questionNo}</button>
                        <button className='text-center lg:px-5 lg:text-left'>{question.questionName}</button>
                    </div>
                ))}

                {filteredItems.length ? <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={handlePageChange}
                    color='primary'
                /> : <p className='text-center font-bold'>Not found 🧭</p>}
            </div>
        </div>







    );
}

export default QuestionPage;