import React, { useEffect, useState } from "react";

const Pagination = ({ page, getData }) => {

  const [pageInfo, setPageInfo] = useState({
    previousPage: null,
    currentPage: 1,
    nextPage: null,
    totalPages: 1,
  });

  useEffect(() => {
    if (page?.pages) {
      setPageInfo({
        previousPage: page.pages.previous_page,
        currentPage: page.pages.current_page,
        nextPage: page.pages.next_page,
        totalPages: page.pages.total_pages,
      });
    }
  }, [page]);
  // console.log("page: ", page);
  // console.log("1: ", pageInfo.previousPage);
  // console.log("2: ", pageInfo.currentPage);
  // console.log("3: ", pageInfo.nextPage);
  // console.log("4: ", pageInfo.totalPages);

  const handlePage = (newPage) => {
    if (
      newPage !== pageInfo.currentPage &&
      newPage > 0 &&
      newPage <= pageInfo.totalPages
    ) {
      setPageInfo((prev) => ({
        ...prev,
        currentPage: newPage,
      }));
      getData("blogs", newPage);
    }
  };

  return (
    <section>
      <main>
        <button
          disabled={!pageInfo.previousPage}
          onClick={() => handlePage(pageInfo.previousPage)}
        >
          Previous
        </button>

        <button>
          {pageInfo.currentPage}
        </button>

        {pageInfo.nextPage && (
          <button onClick={() => handlePage(pageInfo.nextPage)}>
            {pageInfo.nextPage}
          </button>
        )}

        {pageInfo.totalPages !== 1 &&
          pageInfo.currentPage !== pageInfo.totalPages && (
            <button onClick={() => handlePage(pageInfo.totalPages)}>
              <span>...{pageInfo.totalPages}</span>
            </button>
          )}

        <button
          disabled={
            !pageInfo.nextPage && !pageInfo.nextPage <= pageInfo.totalPages
          }
          onClick={() => handlePage(pageInfo.nextPage)}
        >
          Next
        </button>
      </main>
    </section>
  );
};

export default Pagination;
