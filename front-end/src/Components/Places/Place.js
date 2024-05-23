import React, { useEffect, useState } from 'react'
import './Place.css'
import Singleplace from '../SinglePlace/Singleplace'
import axios from 'axios'

const Place = () => {

    const [sampleJson, setsampleJson] = useState([])
    const [showId, setShowId] = useState()
    const [showSinglePage, setshowSinglePage] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:4001/product/get").then(res => setsampleJson(res.data))
    }, [])

    const handleShowHomeTF = (id) => {
        setShowId(id)
        setshowSinglePage(true)
    }
    return (
        <div>
            <div className='placesss'>
                {sampleJson.map((item) => {
                    return (
                        <div className='placeBox-container'>
                            <div className='placeBox-hrs'>
                                <p>Its take</p>
                                <h1>{item.hrs}</h1>
                                <p> hrs</p>
                            </div>
                            <div className='place-box'>
                                <div className='placeBox-typename'>
                                    <p>{item.placeType}</p>
                                    <p>{item.placeName}</p>
                                </div>
                                <div className='placeBox-location'>
                                    <span>Location</span>
                                    <p>{item.location}</p>
                                </div>
                                <div className='placeBox-area'>
                                    <span>area</span>
                                    <p>{item.area}</p>
                                </div>
                                <div className='placeBox-imganddetails'>
                                    <div className='placeBox-img'>
                                        <img src={item.img} alt={item.placeName} />
                                    </div>
                                    <div className='placeBox-details'>
                                        <ul>
                                            {item.keyPoints.map(item => <li>{item}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <button className='placeBox-btn' onClick={() => handleShowHomeTF(item._id)}>mark may day</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            {showSinglePage && <Singleplace showId={showId} setshowSinglePage={setshowSinglePage} />}
        </div>
    )
}

export default Place
