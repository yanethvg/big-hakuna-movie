import React from 'react';
import { Link } from 'react-router-dom'

const Pagination = ({  paginate, currentPage }) => {
  return (
    <nav>
      <ul className='pagination  justify-content-center mt-5'>
        { 
            (currentPage > 1) ? 
              <li  className='page-item mx-1'>
                <Link to="/movies" onClick={() => paginate(currentPage-1)} className='btn btn-secondary'>
                  Previos
                </Link>
              </li>
            : <li  className='page-item mx-1'>
                <Link to="/movies" onClick={() => paginate(currentPage+1)} className='btn btn-secondary'>
                  Next
                </Link>
              </li>
        }
      </ul>
    </nav>
  );
};

export default Pagination;