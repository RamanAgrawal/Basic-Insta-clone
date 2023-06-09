import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RedirectHandler from './components/RedirectHandler';

const InstagramLoginButton = () => {
 
  const handleLogin = async () => {
    const clientId = '618981290211297';
    const redirectUri = 'https://localhost:5173/redirect'
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media,instagram_graph_user_profile
    &response_type=code`;
    window.location.href = authUrl;
    
  }

  return (
    <div className='btn-container'>
      <button onClick={handleLogin}>SYNC INSTAGRAM</button>
    </div>
  );
};

const App = () => {

  return (
    <BrowserRouter>
       <h1 className='logo'>InstaClone</h1>
      <Routes>
        <Route path='/' element={<InstagramLoginButton />} />
        <Route path='/redirect' element={<RedirectHandler />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
