import React from "react";
import useFetch from "./component/useFetch";

type Blog = {
  id: number;
  title: string;
  blogtxt: string;
};

const App = () => {
  const { data, loading, error } = useFetch<Blog[]>(
    "https://63d801935dbd723244319be0.mockapi.io/api/v1/blog"
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <div>
      <ul>
        {data?.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
