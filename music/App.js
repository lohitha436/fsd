import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to Music Store 🎵</h2>;
}

function Songs() {
  return (
    <div>
      <h2>Songs List</h2>
      <ul>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
      </ul>
    </div>
  );
}

function Albums() {
  return (
    <div>
      <h2>Albums</h2>
      <ul>
        <li>Album A</li>
        <li>Album B</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <h1>Music Store</h1>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/songs"> Songs</Link> | 
        <Link to="/albums"> Albums</Link>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
