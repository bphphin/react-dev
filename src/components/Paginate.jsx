import React, { useRef } from 'react'

export default function Paginate({ paginate, handleSkip, skipPage }) {

    return (
        <>
            <nav aria-label="Page navigation example" className='text-center my-4'>
                <ul className="inline-flex -space-x-px text-sm">
                    {/* <li>
                        <button href="#"
                            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Previous
                        </button>
                    </li> */}
                    { paginate.map((item,i) => (
                        <>
                            <li>
                                <button
                                    key={ i }
                                    className={item === skipPage ?
                                        'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white active' :
                                        'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                                    onClick={() => handleSkip(item)}
                                >
                                    {item}
                                </button>
                            </li>
                        </>
                    )) }
                    {/* <li>
                        <button href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Next
                        </button>
                    </li> */}
                </ul>
            </nav>
        </>
    )
}
