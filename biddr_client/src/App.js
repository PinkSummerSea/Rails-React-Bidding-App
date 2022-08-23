import './App.css';
import WelcomPage from './components/WelcomPage';
import AuctionShowPage from './components/AuctionShowPage';
import AuctionIndexPage from './components/AuctionIndexPage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomPage />}/>
        <Route path="/auctions" element={<AuctionIndexPage />}/>
        <Route path="/auctions/:id" element={<AuctionShowPage />}/>
        <Route path="/sign_in" element={<SignInPage />}/>
        <Route path="/sign_up" element={<SignUpPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
