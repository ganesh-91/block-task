import React, { useState } from 'react'
import './style.css'

const ActionsWrapper = ({ addBox, disableKeyboardActions }) => {
    const [boxArray, setBoxArray] = useState([])
    return (
        <div className="action-wrapper">
            <button
                className="button-primary"
                onClick={addBox}
            >
                Add Box
            </button>
            <button
                className="button-primary"
                onClick={disableKeyboardActions}
            >
                Disable Keyboard Actions
            </button>
        </div>
    )
}

export default ActionsWrapper
