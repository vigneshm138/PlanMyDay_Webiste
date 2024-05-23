import axios from 'axios'
import './DelethomeTemplate.css'
import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import '../../Commonformstyle.css'
import { TiTick } from "react-icons/ti";
import { GrClose } from "react-icons/gr";

const DelethomeTemplate = () => {
    const [homeTemplate, setHomeTemplate] = useState([])
    const [refresh, setrefresh] = useState(true)


    // form ------------------
    const [hrs, sethrs] = useState()
    const [placeType, setplaceType] = useState("mall")
    const [placeName, setplaceName] = useState()
    const [location, setlocation] = useState()
    const [area, setarea] = useState()
    const [img, setimg] = useState()
    const [highlights, sethighlights] = useState()
    const [heading, setheading] = useState()
    const [wedo, setwedo] = useState()
    // ---------------------

    //show update form
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    // store the id when click the edit  (paticular object)
    const [saveId, setSaveId] = useState()


    // Show Update Sucessfully
    const [showUpdateSuccessful, setshowUpdateSuccessful] = useState(false)

    // message Content
    const [messageName, setMessageName] = useState('')

    useEffect(() => {
        axios.get("http://localhost:4001/product/get").then(res => setHomeTemplate(res.data)).catch(err => console.log(err))
        console.log("use");
    }, [refresh])


    const handleDHTDeleteBtn = (id) => {
        axios.delete(`http://localhost:4001/product/delete/${id}`).then(res =>
            setrefresh(!refresh),
            setMessageName("Delete"),
            setshowUpdateSuccessful(true)
        ).catch(err => console.log(err))
        setrefresh(!refresh)
        // Message Automatic hide after 3 seconds
        setTimeout(() => setshowUpdateSuccessful(false), 3000)
    }


    const handleDHTeditBtn = (id) => {
        setSaveId(id)
        setShowUpdateForm(true)
        const filterUpdate = homeTemplate.find(item => item._id === id)
        console.log(filterUpdate.id);
        sethrs(filterUpdate.hrs)
        setplaceType(filterUpdate.placeType)
        setplaceName(filterUpdate.placeName)
        setlocation(filterUpdate.location)
        setarea(filterUpdate.area)
        setimg(filterUpdate.img)
        sethighlights(filterUpdate.keyPoints)
        setheading(filterUpdate.heading)
        setwedo(filterUpdate.whatwedo)
    }


    const handleUpdateForm = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:4001/product/update/${saveId}`, { hrs, placeType, placeName, location, area, img, keyPoints: highlights, heading, whatwedo: wedo }).then(res =>
            setShowUpdateForm(false),
            setshowUpdateSuccessful(true),
            setMessageName("Update")
        ).catch(err => console.log(err))
        setrefresh(!refresh)
        // Message Automatic hide after 3 seconds
        setTimeout(() => setshowUpdateSuccessful(false), 3000)
    }




    return (
        <div>
            <div className='deletHomeTemplate'>
                <table className='deleteTemplateTable'>
                    <thead>
                        <tr>
                            <th>HRS</th>
                            <th>PLACE Type</th>
                            <th>place NAME</th>
                            <th>LOCATION</th>
                            <th>AREA</th>
                            <th>IMG</th>
                            <th>PLACE HIGHLIGHTS</th>
                            <th>PLACE HIGHLIGHTS</th>
                            <th>WHAT U DO</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {homeTemplate.map((item) => {
                            return (
                                <tr>
                                    <td>{item.hrs}</td>
                                    <td>{item.placeType}</td>
                                    <td>{item.placeName}</td>
                                    <td>{item.location}</td>
                                    <td>{item.area}</td>
                                    <td>{item.img}</td>
                                    <td>{item.keyPoints}</td>
                                    <td>{item.heading}</td>
                                    <td>{item.whatwedo}</td>
                                    <td className='actionFordht'>
                                        <button onClick={() => handleDHTeditBtn(item._id)}><CiEdit className='dht-edit' /></button>
                                        <button onClick={() => handleDHTDeleteBtn(item._id)}><MdDeleteOutline className='dht-delete' /></button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

            {showUpdateSuccessful && <div className='submitSucess'>
                <div><p><span><TiTick className='ss-Icon' /></span>{messageName} successfully</p></div>
                <div><button className='ss-submitBtn' onClick={() => setshowUpdateSuccessful(false)}><GrClose className='closess-Icon' /></button></div>
            </div>}

            {showUpdateForm && <div className='fixedcommonFormforedit'>

                <div className='commonFormStyle ' >
                    <form onSubmit={(e) => handleUpdateForm(e)}>
                        <h1>home Template</h1>
                        <div>
                            <label>HRS</label>
                            <input type='number' value={hrs} onChange={(e) => sethrs(e.target.value)} required />
                        </div>
                        <div>
                            <label>place name</label>
                            <select value={placeType} onChange={(e) => setplaceType(e.target.value)} required>
                                <option value={"mall"}>mall</option>
                                <option value={"cinema"}>cinema</option>
                                <option value={"lake"}>lake</option>
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
                            <label>start area</label>
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
                            <textarea placeholder='only give simple 3 key points' value={wedo} onChange={(e) => setwedo(e.target.value.split(','))} required />
                        </div>
                        <div className='fommBtns'>
                            <button type='submit'>update home Template</button>
                            <button onClick={() => setShowUpdateForm(false)}>close</button>
                        </div>
                    </form>
                </div>
            </div>}
        </div>

    )
}

export default DelethomeTemplate
