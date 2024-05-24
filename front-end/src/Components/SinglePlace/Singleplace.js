import React, { useEffect, useState } from 'react'
import './Singleplace.css'
import axios from 'axios'



const Singleplace = ({ showId, setshowSinglePage }) => {
    const [singleplace, setsingleplace] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4001/product/get").then(res => setsingleplace(res.data.filter(item => item._id == showId)))
    }, [])

    return (
        <div className=''>
            <div className=' fixedHomeTemplate'>
                {singleplace.map((item) => {
                    return (
                        <div className='singleplace'>
                            <div className='singleplace-firstDiv'>
                                <div>
                                    <p>{item.location}</p>
                                </div>
                                <div>
                                    <p>{item.placeName}</p>
                                </div>
                                <div className='singleplace-imgDiv'>
                                    <img src={item.img} alt='imagess' />
                                </div>
                            </div>
                            <div className='singleplace-details'>
                                <h3> {item.heading}</h3>
                                <ul>
                                    {item.whatwedo.map(item => <li>{item}</li>)}
                                </ul>
                                <button>remember me</button>
                                <button onClick={() => setshowSinglePage(false)}>close</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Singleplace
