import React, { useState } from 'react'
import '../../Commonformstyle.css'
import { TiTick } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import axios from 'axios'

const Hometemplate = () => {


    const [hrs, sethrs] = useState()
    const [placeType, setplaceType] = useState("mall")
    const [placeName, setplaceName] = useState()
    const [location, setlocation] = useState()
    const [area, setarea] = useState()
    const [img, setimg] = useState()
    const [highlights, sethighlights] = useState()
    const [heading, setheading] = useState()
    const [wedo, setwedo] = useState()
    const [showSuccessful, setshowSuccessful] = useState(false)

    const handleSubmit = (e) => {
        const splitdo=wedo.split('@')
        e.preventDefault()
        axios.post("http://localhost:4001/product/post", { hrs, placeType, placeName, location, area, img, keyPoints: highlights, heading, whatwedo: splitdo }).then(res => setshowSuccessful(true)).catch(err => console.log(err))
        sethrs('')
        setplaceType('')
        setplaceName('')
        setlocation('')
        setarea('')
        setimg('')
        sethighlights('')
        setheading('')
        setwedo('')
        console.log(hrs);
        console.log(placeType);
        console.log(placeName);
        console.log(location);
        console.log(area);
        console.log(img);
        console.log(highlights);
        console.log(heading);
        console.log(wedo);
        setTimeout(() => setshowSuccessful(false), 3000)
    }

    return (
        <div>
            <div className='commonFormStyle'>
                {showSuccessful && <div className='submitSucess'>
                    <div><p><span><TiTick className='ss-Icon' /></span>submitted successfully</p></div>
                    <div><button className='ss-submitBtn' onClick={() => setshowSuccessful(false)}><GrClose className='closess-Icon' /></button></div>
                </div>}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h1>home Template</h1>
                    <div>
                        <label>HRS</label>
                        <input type='number' value={hrs} onChange={(e) => sethrs(e.target.value)} required />
                    </div>
                    <div>
                        <label>interesting</label>
                        <select value={placeType} onChange={(e) => setplaceType(e.target.value)} required>
                            <option value={"shopping"}>shopping</option>
                            <option value={"cinema"}>cinema</option>
                            <option value={"Dinner"}>Dinner</option>
                        </select>
                    </div>
                    <div>
                        <label>name</label>
                        <input type='text' placeholder=' prozone mall' value={placeName} onChange={(e) => setplaceName(e.target.value)} required />
                    </div>
                    <div>
                        <label>location</label>
                        <input type='text' value={location} onChange={(e) => setlocation(e.target.value)} required />
                    </div>
                    <div>
                        <label> area</label>
                        <input type='text' value={area} onChange={(e) => setarea(e.target.value)} required />
                    </div>
                    <div>
                        <label>img</label>
                        <input type='text' value={img} onChange={(e) => setimg(e.target.value)} required />
                    </div>
                    <div>
                        <label>place highlights</label>
                        <textarea placeholder='only give simple 3 key points' value={highlights} onChange={(e) => sethighlights(e.target.value.split(','))} required />
                    </div>
                    <div>
                        <label>heading</label>
                        <input type='text' value={heading} onChange={(e) => setheading(e.target.value)} required />
                    </div>
                    <div>
                        <label>what u do</label>
                        <textarea placeholder='only give simple 3 key points' value={wedo} onChange={(e) => setwedo(e.target.value)} required />
                    </div>
                    <button type='submit'>make home Template</button>
                </form>
            </div>
        </div>
    )
}

export default Hometemplate
