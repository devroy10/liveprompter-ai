import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Chat from "./pages/chat/Chat";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route
            path="/chat"
            element={<Chat />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
