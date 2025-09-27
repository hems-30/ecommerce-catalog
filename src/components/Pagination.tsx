import React from 'react';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  // Generate page numbers with dots
  const getPageNumbers = () => {
    const delta = 2;
    const range: (number | string)[] = [];
    let lastNumber = 0;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        if (lastNumber + 1 !== i) {
          range.push('...');
        }
        range.push(i);
        lastNumber = i;
      }
    }

    return range;
  };

  const pageNumbers = getPageNumbers();

  const baseBtn =
    'px-3 py-1 border rounded transition-colors disabled:opacity-50 hover:bg-gray-200';

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={baseBtn}
      >
        Prev
      </button>

      {pageNumbers.map((p, idx) =>
        p === '...' ? (
          <span key={idx} className="px-3 py-1">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => handlePageChange(Number(p))}
            className={`${baseBtn} ${p === currentPage ? 'bg-blue-600 text-white' : ''}`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={baseBtn}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;