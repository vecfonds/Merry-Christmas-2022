import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home";
import Gift1 from "./components/Gift1/Gift1";
import Gift2 from "./components/Gift2/Gift2";
import Gift3 from "./components/Gift3/Gift3";
import Gift4 from "./components/Gift4/Gift4";
import BrandStory from "./components/BrandStory/BrandStory";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<BrandStory />} />
        <Route path="/gift1" element={<Gift1 />} />
        <Route path="/gift2" element={<Gift2 />} />
        <Route path="/gift3" element={<Gift3 />} />
        <Route path="/gift4" element={<Gift4 />} />

        {/* <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} /> */}
      </Routes>
    </div>
  );
}

// <div className="container-fluid">
//   <div className="row">
//     <div className="col-2 bg-dark min-height-100vh">
//       <Sidebar />
//     </div>
//     <main className="col-10">
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/customers" element={<Customers />} />
//       </Routes>
//     </main>
//   </div>
// </div>
