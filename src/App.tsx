import { useState } from "react";
import MD from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useDocuments } from "./Hooks/useDocuments";

function App() {
  const [url, setUrl] = useState(
    "https://raw.githubusercontent.com/facebook/react/main/README.md"
  );

  const { doc } = useDocuments(url);

  return (
    <>
      <nav className="nav">
        <h1>Markdown Viewer</h1>
        <label>
          URL of markdown file:
          <input
            id="url"
            type="url"
            placeholder="URL of markdown file"
            value={url}
            list="urls"
            onChange={({ target: { value } }) => setUrl(value)}
          />
        </label>
        <datalist id="urls">
          <option value="https://raw.githubusercontent.com/german-egg/markdown-viewer/main/README.md">
            markdown-viewer README.md
          </option>
          <option value="https://raw.githubusercontent.com/facebook/react/main/README.md">
            React README.md
          </option>
        </datalist>
      </nav>

      <main className="document">
        <MD
          children={doc}
          components={{
            code(props) {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                //@ts-expect-error - I don't know how to fix this
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={vscDarkPlus}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </main>
    </>
  );
}

export default App;
