import React from "react";
import { useFetch } from "./hooks/swr";

function App() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default App;
