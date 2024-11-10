// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Chat from "./pages/chat/Chat";
import NotFound from "./pages/NotFound";


function App() {

  return (
    // <HelmetProvider>
    // <ThemeProvider>

    <Router >
      <Routes>

        <Route path="/" element={<Home />} />

        {/* Routes with sidebar */}
        <Route element={<Layout />}>
          <Route
            path="/chat"
            element={<Chat />}
          />
          {/* <Route path="/account" element={<Account />} /> */}
        </Route>

        {/* Fallback for undefined routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>


    </Router>

    //   </HelmetProvider> 
    // </ThemeProvider > 


  );
}

export default App;
