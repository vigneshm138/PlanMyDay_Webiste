import React from 'react'
import '../Commonformstyle.css'

const Userplanform = () => {
    return (
        <div >

            <div className='commonFormStyle'>
                <form>
                    <h1>plan your day</h1>
                    <div>
                        <label>Availability</label>
                        <input placeholder='How much free time do you have?' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Userplanform
