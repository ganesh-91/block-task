import React, { useState } from 'react'
import ActionsWrapper from '../ActionsWrapper'
import BoxFence from '../BoxFence'
import './style.css'

const ArenaContainer = () => {
    const [boxArray, setBoxArray] = useState([])

    const deleteBox = () => {
        console.log('deleteBox')
    }

    const addBox = () => {
        setBoxArray(prev => [...prev, {
            id: prev.length,
        }])
        console.log('addBox')
    }

    return (
        <div className="arena-container">
            <BoxFence
                boxArray={boxArray}
                deleteBox={deleteBox} />
            <ActionsWrapper
                addBox={addBox} />
                {JSON.stringify(boxArray)}
        </div>
    )
}

export default ArenaContainer
