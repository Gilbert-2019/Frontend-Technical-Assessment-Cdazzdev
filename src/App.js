import "./App.css";
import "./responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Notfound from "./screens/Notfound";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Students from "./screens/Students";
import Enrollments from "./screens/Enrollments";
import PrivateRouter from "./PrivateRouter";
import EnrolledCourses from "./screens/EnrolledCourses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/students" element={<Students />} />
        <Route path="/enrollment" element={<Enrollments />} />
        <Route path="/enrollcourse/:id" element={<EnrolledCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
