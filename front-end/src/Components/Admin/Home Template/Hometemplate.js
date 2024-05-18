import React from 'react'
import '../../Commonformstyle.css'

const Hometemplate = () => {
    return (
        <div>
            <div className='commonFormStyle'>
                <form>
                    <h1>home Template</h1>
                    <div>
                        <label>HRS</label>
                        <input type='number' />
                    </div>
                    <div>
                        <label>place name</label>
                        <select>
                            <option>select u want</option>
                            <option>mall</option>
                            <option>cinema</option>
                            <option>lake</option>
                        </select>
                    </div>
                    <div>
                        <label>name</label>
                        <input type='text' placeholder=' prozone mall' />
                    </div>
                    <div>
                        <label>location</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>start area</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>img</label>
                        <input type='file'/>
                    </div>
                    <div>
                        <label>place highlights</label>
                        <textarea placeholder='only give simple 3 key points' />
                    </div>
                    <button>make home Template</button>
                </form>
            </div>
        </div>
    )
}

export default Hometemplate
