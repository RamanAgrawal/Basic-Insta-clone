import React, { useState } from 'react'
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti'
import { TfiClose } from 'react-icons/tfi'
const Carousel = ({ children: media }) => {
    const [curr, setCurr] = useState(0);
    const [open, setOpen] = useState(false)
    const prev = () => setCurr(curr => curr === 0 ? media.length - 6 : curr - 1)
    const next = () => setCurr(curr => curr === media.length - 5 ? 0 : curr + 1)

    const [active, setActive] = useState(curr);

    const count = media.length;
    const MAX_VISIBILITY = 3;
    return (
        <div className={open ? 'carousel' : 'carousel-main'}>

            {!open ? <>
                <div className='inner'
                    onClick={() => {
                        setOpen(true)
                        setActive(curr)
                    }
                    }
                    style={{ transform: `translateX(-${curr * 33}%)` }}
                >{media}</div>
                <div className="controls">
                    <button onClick={prev}>
                        <TiChevronLeftOutline size={40} />
                    </button>
                    <button onClick={next}>
                        <TiChevronRightOutline size={40} />
                    </button>
                </div> </> :

                <>
                    <button
                        className='close'
                        onClick={() => setOpen(!open)}
                    ><TfiClose size={30} />
                    </button>
                    {active > 0 &&
                        <button className='nav left'
                            onClick={() => setActive(i => i - 1)}>
                            <TiChevronLeftOutline />
                        </button>}
                    {media.map((child, i) => (
                        <div className='card-container' style={{
                            '--active': i === active ? 1 : 0,
                            '--offset': (active - i) / 3,
                            '--direction': Math.sign(active - i),
                            '--abs-offset': Math.abs(active - i) / 3,
                            'pointer-events': active === i ? 'auto' : 'none',
                            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '1' : '1',
                            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                        }}
                        >
                            {child}
                        </div>))
                    }
                    {active < count - 1 &&
                        <button className='nav right'
                            onClick={() => setActive(i => i + 1)}>
                            <TiChevronRightOutline />
                        </button>}
                </>



            }
        </div >
    )
}

export default Carousel