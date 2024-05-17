import React from 'react'
import './Userplanform.css'

const Userplanform = () => {
    return (
        <div className='userPlanFormDiv'>
            <form>
                <h1>plan your day</h1>
                <div>
                    <label>Availability</label>
                    <input placeholder='How much free time do you have?' />
                </div>
            </form>
        </div>
    )
}

export default Userplanform
