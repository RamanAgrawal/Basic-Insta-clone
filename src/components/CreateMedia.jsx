import { useState } from 'react'
import { ImCancelCircle } from 'react-icons/im'


//function component for rendering media
const CreateMedia = ({ item }) => {
    const [details, setDetails] = useState(false)//for toggle detail
    return (
        <div className='video-cover'>
            {item.media_type === 'VIDEO' &&
                <div>

                    <video
                        height='100%'
                        width='250'
                        autoPlay
                        is="x-muted"
                        loop
                    >
                        <source src={item.media_url} type="video/mp4" />
                    </video>

                </div>

            }
            <div className='show-more'>
                <h2 >
                    {item.username}
                </h2>
                {details ?
                    <div className='details' >
                        <div
                            onClick={() => setDetails(false)}
                            style={{ float: 'right' }}
                        >
                            <ImCancelCircle />
                        </div>
                        {item.caption}
                        <div>posted on- {new Date(item.timestamp).toDateString()}</div>
                    </div> :
                    <div
                        onClick={() => setDetails(prev => !prev)}
                        className='show-details-btn'
                        >show more</div>
                }
            </div>

        </div>
    )
}
export default CreateMedia