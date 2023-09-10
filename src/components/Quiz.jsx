import React, { useRef, useState } from 'react'
import { quizList } from '../constants/quiz.js';

export default function Quiz() {
    const [quiz , setQuiz] = useState(0);
    const [score , setScore] = useState(0);
    const [checked, setChecked] = useState(true);
    const bgBtnCorrect = useRef(null);

    const handleQuizButton = isCorrect => {
        if(isCorrect) {
            setScore(score+1)
        }
        if(quiz + 1 >= quizList.length) {
            setChecked(false);
        }
        setQuiz(quiz+1);
    }
    console.log(checked);
    return (
        <>
            {
                checked ? (
                    <>
                        <div className='text-center'>
                            <div>
                                <h1 className='text-xl'>Câu hỏi{ quiz + 1 }/{ quizList.length }</h1>
                                <p className='text-lg'>{ quizList[quiz].questionText }</p>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                { quizList[quiz].answersOption.map(item => (
                                    <button className='px-5 py-1 bg-red-400 text-white rounded'
                                    key={Math.random()}
                                    onClick={ () => handleQuizButton(item.isCorrect) }
                                    ref={ bgBtnCorrect }
                                    >
                                        { item.answersText }
                                    </button>
                                )) }
                            </div>
                        </div>
                    </>
                )
                : (
                    <>
                        <p>Bạn có { score } câu đúng</p>
                        <p>Bạn có { quizList.length - score } câu chưa trả lời đúng</p>
                    </>
                )
            }
        </>
    )
}
