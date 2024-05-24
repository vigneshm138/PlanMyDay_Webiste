import React, { useState } from 'react'
import Singleplace from '../SinglePlace/Singleplace'
// import '../Places/Place.css'

const Default = () => {
    const [showId, setShowId] = useState()
    const [showSinglePage, setshowSinglePage] = useState(false)
    const [singlePro, setsinglePro] = useState([])
    const [defaultSugg, setdefaultSugg] = useState([
        {
            id: 1,
            hrs: 3,
            placeType: "Cinema",
            placeName: "prozone mall",
            location: "coimbatore",
            area: "saravanampatti",
            img: "https://www.scai.in/wp-content/uploads/2020/04/Coimbatore-3.jpg",
            keyPoints: ["Good Experiecnce for Movie", "Shoping Hub"],
            heading: "For 5 hrs spend wacthing Movie",
            whatwedo: ["High-Quality Viewing Experience: Prozone theaters are known for their top-notch audio and visual systems. They often feature advanced projection technology and surround sound systems, providing an immersive cinematic experience. So, if you're a fan of crisp visuals and booming sound, Prozone could be the perfect choice for your movie night.", "Comfort and Amenities: Prozone theaters typically offer comfortable seating options, ranging from standard to premium recliners. Additionally, they often have amenities like spacious lobbies, clean restrooms, and concession stands offering a variety of snacks and drinks. These added comforts can enhance your overall enjoyment of the movie-going experience.", "Comfort and Amenities: Prozone theaters typically offer comfortable seating options, ranging from standard to premium recliners. Additionally, they often have amenities like spacious lobbies, clean restrooms, and concession stands offering a variety of snacks and drinks. These added comforts can enhance your overall enjoyment of the movie-going experience."]
        },
        {
            id: 2,
            hrs: 5,
            placeType: "Cinema",
            placeName: "prozone mall",
            location: "coimbatore",
            area: "saravanampatti",
            img: "https://cdn1.goibibo.com/voy_ing/t_fs/coimbatore-brookefields-mall-157466998484o.jpeg",
            keyPoints: ["Good Experiecnce for Movie", "Shoping Hub"],
            heading: "For 5 hrs spend wacthing Movie",
            whatwedo: ["High-Quality Viewing Experience: Prozone theaters are known for their top-notch audio and visual systems. They often feature advanced projection technology and surround sound systems, providing an immersive cinematic experience. So, if you're a fan of crisp visuals and booming sound, Prozone could be the perfect choice for your movie night.", "Comfort and Amenities: Prozone theaters typically offer comfortable seating options, ranging from standard to premium recliners. Additionally, they often have amenities like spacious lobbies, clean restrooms, and concession stands offering a variety of snacks and drinks. These added comforts can enhance your overall enjoyment of the movie-going experience.", "Comfort and Amenities: Prozone theaters typically offer comfortable seating options, ranging from standard to premium recliners. Additionally, they often have amenities like spacious lobbies, clean restrooms, and concession stands offering a variety of snacks and drinks. These added comforts can enhance your overall enjoyment of the movie-going experience."]
        },
        {
            id: 3,
            hrs: 2,
            placeType: "Cinema",
            placeName: "prozone mall",
            location: "coimbatore",
            area: "saravanampatti",
            img: "https://th.bing.com/th/id/OIP.SCGTO9MJBbP-c5fQaHdBxgHaE8?rs=1&pid=ImgDetMain",
            keyPoints: ["Good Experiecnce for Movie", "Shoping Hub"],
            heading: "For 5 hrs spend wacthing Movie",
            whatwedo: ["High-Quality Viewing Experience: Prozone theaters are known for their top-notch audio and visual systems. They often feature advanced projection technology and surround sound systems, providing an immersive cinematic experience. So, if you're a fan of crisp visuals and booming sound, Prozone could be the perfect choice for your movie night.", "Comfort and Amenities: Prozone theaters typically offer comfortable seating options, ranging from standard to premium recliners. Additionally, they often have amenities like spacious lobbies, clean restrooms, and concession stands offering a variety of snacks and drinks. These added comforts can enhance your overall enjoyment of the movie-going experience.", "Comfort and Amenities: Prozone theaters typically offer comfortable seating options, ranging from standard to premium recliners. Additionally, they often have amenities like spacious lobbies, clean restrooms, and concession stands offering a variety of snacks and drinks. These added comforts can enhance your overall enjoyment of the movie-going experience."]
        }
    ])




    const handleShowHomeTF = (id) => {
        setShowId(id)
        setshowSinglePage(true)
        const fill = defaultSugg.filter(item => item.id === showId)
        setsinglePro(fill)
        console.log(typeof defaultSugg);

    }


    return (
        <div>
            <div className='placesss' >
                {defaultSugg.map((item) => {
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
                                <button className='placeBox-btn' onClick={() => handleShowHomeTF(item.id)}>mark may day</button>
                            </div>
                        </div>
                    )
                })}
            </div>


            {showSinglePage &&
                <div className=' fixedHomeTemplate'>
                    {singlePro.map((item) => {
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
            }
        </div>
    )
}

export default Default
