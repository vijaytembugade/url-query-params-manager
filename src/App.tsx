import { useState } from "react";
import useUrlQuery from "./hooks/useUrlQuery";

function App() {
  const [text, setText] = useState("");

  const {
    getQueryParam,
    setQueryParam,
    removeQueryParam,
    url,
    getAllQueryParams,
  } = useUrlQuery();

  console.log(getAllQueryParams());

  return (
    <>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
      />
      <button onClick={() => setQueryParam(text, text)}>Set Text</button>
    </>
  );
}

export default App;
