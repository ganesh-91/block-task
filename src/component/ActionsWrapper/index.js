import React, { useState } from 'react'
import './style.css'

const ActionsWrapper = ({ addBox }) => {
    const [boxArray, setBoxArray] = useState([])
    return (
        <div className="action-wrapper">
            <button
                onClick={addBox}
            >
                addBox
            </button>
        </div>
    )
}

export default ActionsWrapper
