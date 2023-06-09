import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { tokenActions } from '../store/AccessTokenSlice';
import ShowData from './ShowData';
const RedirectHandler = () => {

  const dispatch = useDispatch();
  const { setToken } = tokenActions;
  const [error,setError]=useState('')

  useEffect(() => {
    const getCode = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');


      if (code) {

        const clientId = '1701407990273199';
        const clientSecret = 'e31a4bf45e873070327e7e0f1bba9567'
        const redirectUri = 'https://localhost:5173/redirect'

        const params = new URLSearchParams();
        params.append('client_id', clientId);
        params.append('client_secret', clientSecret);
        params.append('grant_type', 'authorization_code');
        params.append('redirect_uri', redirectUri);
        params.append('code', code);
        try {
          const response = await axios.post('https://api.instagram.com/oauth/access_token', params)
          const accessToken = response.data.access_token;
          dispatch(setToken(accessToken));
        } catch (error) {
          setError('Unable to get Access Token')
          console.error('Error getting access token:', error.response.data);
        }
      }
    };

    getCode();
  }, []);

  return (
    <>
   {error&& <h2 className='error'z>{error}</h2>}
     <ShowData/>
    </>
  );
};

export default RedirectHandler;
