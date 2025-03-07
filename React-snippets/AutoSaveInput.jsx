import { useState, useEffect } from "react";

const AutoSaveInput = () => {
  const [text, setText] = useState(localStorage.getItem("autosave") || "");

  useEffect(() => {
    localStorage.setItem("autosave", text);
  }, [text]);

  return <input value={text} onChange={(e) => setText(e.target.value)} />;
};

export default AutoSaveInput;
