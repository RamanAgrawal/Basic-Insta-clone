import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { tokenActions } from '../store/InstaSlice';
import Carousel from './Carousel';
import CreateMedia from './CreateMedia';

//Main function for fetching data from api
const ShowData = () => {
    const token = useSelector(state => state.insta.token)
    const data = useSelector(state => state.insta.data)

    const dispatch = useDispatch();
    const { setData } = tokenActions;

    const [loading, setLoading] = useState('')

    useEffect(() => {
        const getData = async () => {
            setLoading('setting up apis.....')
            if (token) {
                try {
                    setLoading('Loading...');
                    //fetching media from instagram api
                    const res = await axios(`https://graph.instagram.com/me/media?
                    fields=id,caption,media_type,media_url,thumbnail_url,timestamp,username&access_token=${token}`)
                    setLoading('');
                    dispatch(setData(res.data.data));
                } catch (error) {
                    setLoading('something went wrong');
                }
                setLoading('')
            }
        }
        getData();
    }, [token])



    return (
        <div className='media-container'>
            {loading && <div className='loader'>
                <h2>{loading}</h2>
            </div>}
            <Carousel>
                {
                    data.map(item => (
                        //Only videos will be disply
                        item.media_type === 'VIDEO' && <CreateMedia key={item.caption} item={item} />
                    ))
                }

            </Carousel>
        </div>
    )
}

export default ShowData