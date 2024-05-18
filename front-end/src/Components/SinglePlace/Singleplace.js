import React from 'react'
import './Singleplace.css'



const Singleplace = () => {


    return (
        <div style={{ margin: "10px 0" }}>
            <div className='singleplace'>
                <div className='singleplace-firstDiv'>
                    <div>
                        <p>coimbatore</p>
                    </div>
                    <div>
                        <p>prozone mall</p>
                    </div>
                    <div className='singleplace-imgDiv'>
                        <img src='https://img.staticmb.com/mbcontent/images/crop/uploads/2022/11/Night-view-of-Prozone-Mall_0_1200.jpg' alt='imagess' />
                    </div>
                </div>
                <div className='singleplace-details'>
                    <h3> For a 4-hour movie experience at Prozone Mall's cinema:</h3>
                    <ul>
                        <li>Pre-Movie Preparation: Arrive a bit early to purchase tickets and snacks.</li>
                        <li>Movie Enjoyment: Immerse yourself in the cinematic experience, enjoying the film.</li>
                        <li>Post-Movie Time: After the movie, grab a quick bite or explore the mall for an hour, perhaps checking out shops or relaxing in a café.</li>
                    </ul>
                    <button>remember me</button>
                </div>
            </div>
        </div>
    )
}

export default Singleplace
