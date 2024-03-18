import React, { useEffect } from "react";
import ShotsCard from "./shotsCard";
import PaginationComponent from "./pagination";

export default function GetData() {
  const [data, setData] = React.useState([]);

  const [currentPage, setcurrentPage] = React.useState(1);
  const [postPerPage, setPostPerPage] = React.useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.dribbble.com/v2/user/shots?access_token=0ee23db9c906074f6ca0147bc13a0e54e0d7ed287a920cd4ac524e0d715483f4"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  // console.log(currentPosts)
  // let totalData = Object.keys(data).length;
  // console.log(totalData);

  // console.log(data.length)
  const totalData = data.length;
  // console.log(totalData);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {currentPosts.map((data) => {
          return (
            <div key={data.id}>
              <ShotsCard
                key={data.id}
                title={data.title}
                images={data.images.normal}
                url={data.html_url}
                published={data.published_at}
              />
              {/* {console.log( Object.keys( data ).length )} */}
              {/* {console.log(data.length)} */}
            </div>
          );
        })}
      </div>
      <PaginationComponent
        getData={data}
        totalPost={totalData}
        postPerPage={postPerPage}
        setCurrentPage={setcurrentPage}
      />
    </div>
  );
}
