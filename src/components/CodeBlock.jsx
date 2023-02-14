import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

export default function Code({ code, language, classes }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={classes}>
      <h2> Code Syntax Block {language}</h2>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}