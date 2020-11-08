import React, { useState } from 'react'
import './style.css'

const BoxFence = ({ boxArray }) => {
    // const [boxArray, setBoxArray] = useState([])
    return (
        <div className="fence-wrapper">
            <div className="fence">
                {boxArray.map((el) => (
                    <div
                        style={{ zIndex: el.id }}
                        className="box"
                    >{el.id}</div>
                ))}
            </div>
        </div>
    )
}

export default BoxFence
