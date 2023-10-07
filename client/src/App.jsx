import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/Layout/MainLayout";
import Register from "./components/Register";
import FormLayout from "./pages/Layout/FormLayout";
import Login from "./components/Login";
import Success from "./components/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<FormLayout />}>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
