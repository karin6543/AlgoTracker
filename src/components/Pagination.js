import React from 'react'

const Pagination = ({probPerpage, totalNum, paginate}) => {

    const probNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNum / probPerpage); i++){
        probNumbers.push(i)
    }
    return (

        <div >
    
       <nav className>
            <ul>
            Pages
            {probNumbers.map(number => (
                <span key={number}>
                    <button onClick={() => paginate(number)}>
                        {number}
                    </button>
                </span>
            ))}
            </ul>

       </nav>
        </div>
    )
}

export default Pagination;