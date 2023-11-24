import { useState } from "react";
import { useDocuments } from "./Hooks/useDocuments";
import { MD } from "./Components/MD";

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
        <MD doc="`The lift coefficient ($C_L$) is a dimensionless coefficient.`" />
        <MD doc={doc} />
      </main>
      <footer>
        <p>
          Markdown Viewer is developed by{" "}
          <a href="mailto:galiprandi@gmail.com">Germán Aliprandi</a>
        </p>
      </footer>
    </>
  );
}

export default App;
