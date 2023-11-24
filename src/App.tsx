import { useState } from "react";
import { useDocuments } from "./Hooks/useDocuments";
import { MD } from "./Components/MD";

function App() {
  const queryParameters = new URLSearchParams(window.location.search);
  const urlFromParams = queryParameters.get("url");

  console.log({ urlFromParams });

  const [url, setUrl] = useState(
    urlFromParams ??
      "https://raw.githubusercontent.com/facebook/react/main/README.md"
  );

  const { doc } = useDocuments(url);

  return (
    <>
      <nav className="nav">
        <h1>Markdown Viewer</h1>
        <label>
          Markdown text or URL of file:
          <input
            id="text"
            type="text"
            placeholder="Markdown text or URL of file"
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
          <option value="https://gist.githubusercontent.com/stevenyap/7038119/raw/e484a7da2578d1c4bd14e1fcaf974ade4ba76aa4/Github%2520Flavored%2520Markdown.md">
            Github Flavored Markdown
          </option>
        </datalist>
      </nav>

      <main className="document">
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
