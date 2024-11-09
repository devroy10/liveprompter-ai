import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Chat from "./pages/chat/Chat";
import NotFound from "./pages/NotFound";

import "./App.css";
function App() {

  return (
    // <HelmetProvider>
    // <ThemeProvider>
    <>
      <BrowserRouter >
        {/* <Layout > */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/" element={<Layout />}>
            <Route
              path="chat"
              element={<Chat />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* </Layout> */}

      </BrowserRouter>

      {/* //  </HelmetProvider> */}
      {/* // </ThemeProvider > */}

    </>
  );
}

export default App;
