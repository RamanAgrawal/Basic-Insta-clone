import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { tokenActions } from '../store/InstaSlice';
import Carousel from './Carousel';


//function component for rendering media
const ShowMedia = ({ item }) => {
    const [details, setDetails] = useState(false)//for toggle details
    const [mute, setMute] = useState(true);
    return (
        <div className='video-cover'>
            {item.media_type === 'VIDEO' &&
                <div>

                    <video height='100%' width='300' autoPlay loop muted={mute}
                        onClick={() => setMute(prev => !prev)}
                    >
                        <source src={item.media_url} type="video/mp4" />
                    </video>

                </div>

            }
            <div onClick={() => setDetails(prev => !prev)} className='show-more'>
                <h2 style={{ color: 'wheat' }}>
                    {item.username}
                </h2>
                {details ? 
                    <div className='details'>
                        {item.caption}
                        <div>posted on-{new Date(item.timestamp).toDateString()}</div>
                    </div> :
                    <div>show more</div>
                }
            </div>

        </div>
    )
}


//Main function for geeting data from api
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
        <div style={{ width: "400px", marginInline: 'auto' }}>
            {loading && <div className='loader'>
                <h2>{loading}</h2>
            </div>}
            <Carousel>

                {
                    data.map(item => (
                        //Only videos will be disply
                        item.media_type === 'VIDEO' && <ShowMedia key={item.caption} item={item} />
                    ))
                }

            </Carousel>
        </div>
    )
}

export default ShowData