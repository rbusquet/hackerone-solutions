import React from "react";

function urlForPage(page) {
  return `https://jsonmock.hackerrank.com/api/articles?page=${page}`;
}

function Articles() {
  const [data, setData] = React.useState({});
  const [page, setPage] = React.useState(1);
  const { total_pages = 0, data: articles = [] } = data;

  React.useEffect(() => {
    let mounted = true;
    async function query() {
      const response = await fetch(urlForPage(page));
      const json = await response.json();
      if (mounted) setData(json);
    }
    query();
    return () => (mounted = false);
  }, [page]);
  return (
    <React.Fragment>
      <div className="pagination">
        {Array.from({ length: total_pages }).map((value, idx) => (
          <button
            data-testid="page-button"
            key={`page-button-${idx + 1}`}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
      <ul className="results">
        {articles
          .filter((article) => Boolean(article.title))
          .map((article, idx) => (
            <li key={`title-${idx}`} data-testid="result-row">
              {article.title}
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
}

export default Articles;
