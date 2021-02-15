const Pagination = ({ 
    pageNumbers,
    paginate,
    nextPage, 
    prevPage 
}) => {
    
    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => prevPage()}>Previous</a>
                </li>
                {pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <a onClick={() => paginate(number)} href="#" className="page-link">{number}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => nextPage(pageNumbers.length)}>Next</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;