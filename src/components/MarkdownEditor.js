import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write Markdown here..."
        style={{ width: "50%", padding: "10px" }}
      />

      <div
        className="preview"
        style={{
          width: "50%",
          padding: "10px",
          borderLeft: "1px solid #ccc",
          overflowY: "auto"
        }}
      >
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;