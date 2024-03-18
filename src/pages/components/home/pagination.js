import React from "react";

const PaginationComponent = ({
  getData,
  totalPosts,
  postPerPage,
  setCurrentPage,
}) => {
  let pages = [];
  let totalShots = getData.length;
  for (let i = 1; i <= Math.ceil(totalShots / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="mt-4 p-4">
      <nav aria-label="Pagination" className="flex justify-center items-center">
        <ul class="inline-flex -space-x-px text-base h-10">
          {/* Map data */}
          {pages.map((page) => (
            <li>
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className=" flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PaginationComponent;
