import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import Exchanges from "./Components/Exchanges";
import CoinDetail from "./Components/CoinDetail";
import Footer from "./Components/Footer";
import CryptoNews from "./Components/CryptoNews";
// import "../src/styles/app.scss";
import "../src/styles/newscard.scss";
import "../src/styles/cryptonews.scss";
import "../src/styles/home.scss";


function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/coins" element={<Coins/>}></Route>
        <Route path="/exchanges" element={<Exchanges/>}></Route>
        <Route path="/coins/:id" element={<CoinDetail/>}></Route>
        <Route path="/news" element={<CryptoNews/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
