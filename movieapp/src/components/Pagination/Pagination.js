import React from 'react';


const Pagination = ({ moviesPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / moviesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="pagination">
        <ul>
            {pageNumbers.map(number => (
                <li key={number}>
                    <a onClick={() => paginate(number)} href="!#">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
        </nav>
    );
}

export default Pagination;
