import LoginPanel from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Dealers from './components/Dealers/Dealers.jsx';
import Dealer from './components/Dealers/Dealer.jsx';
import PostReview from './components/Dealers/PostReview';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
    </Routes>
  );
}
export default App;