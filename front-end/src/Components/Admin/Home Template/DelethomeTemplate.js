import axios from 'axios'
import './DelethomeTemplate.css'
import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const DelethomeTemplate = () => {
    const [homeTemplate, setHomeTemplate] = useState([])
    const [refresh, setrefresh] = useState(true)

    useEffect(() => {
        axios.get("http://localhost:3080/data").then(res => setHomeTemplate(res.data)).catch(err => console.log(err))
        console.log("use");
    }, [refresh])


    const handleDHTDeleteBtn = (id) => {
        console.log(id);
        axios.delete(`http://localhost:3080/data/${id}`).then(res => setrefresh(!refresh)).catch(err => console.log(err))
    }
    return (
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
                                    <button><CiEdit className='dht-edit' /></button>
                                    <button><MdDeleteOutline className='dht-delete' onClick={() => handleDHTDeleteBtn(item.id)} /></button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default DelethomeTemplate
