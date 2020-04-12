
import React from 'react';
import { Link } from 'react-router-dom'

const Pagination = ({ peliculasPerPage, totalPeliculas, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPeliculas / peliculasPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination  justify-content-center mt-5'>
        {pageNumbers.map(number => (
           <li key={number} className='page-item mx-1'>
           <Link onClick={() => paginate(number)} className='btn btn-secondary'>
             {number}
           </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;