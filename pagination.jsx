import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange, currnetPage } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return <nav>
        <ul className="pagination">
            {pages.map(page => (<li key={page} className={page === currnetPage ? 'page-item active' : 'page-item'}>
                <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
            </li>))}

        </ul>
    </nav>
}
Pagination.PropTypes={
    itemsCount:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired,
    currnetPage:PropTypes.number.isRequired
};
export default Pagination;
