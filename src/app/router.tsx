import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ad from "../pages/Home"
import Auth from "../pages/Catalogue";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Ad />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;