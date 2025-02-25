import React from 'react'

const Card = ({ username, btnText = "VisitMe" }) => {
    console.log(username);

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h2>username  : {username}</h2>
            <a href="#">
                <img className="rounded-t-lg" src="https://images.pexels.com/photos/5475173/pexels-photo-5475173.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&dpr=0.5" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex text-white text-bold">
                    {btnText}
                </a>
            </div>
        </div>
    )
}

export default Card