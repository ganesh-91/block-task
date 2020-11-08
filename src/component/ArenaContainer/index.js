
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { getRandomColor } from '../../helper/utils'
import ActionsWrapper from '../ActionsWrapper'
import BoxFence from '../BoxFence'
import './style.css'

const ArenaContainer = () => {
    const [boxArray, setBoxArray] = useState([])
    const [selectedBox, setSelectedBox] = useState('')
    const [eventListenerBool, setEventListenerBool] = useState(true)
    const [fenceElmPosition, setFenceElmPosition] = useState({})
    const [dimension, setDimension] = useState({})

    const selectBox = (id) => {
        if (selectedBox === id) {
            setSelectedBox('')
        } else {
            setSelectedBox(id)
        }
    }

    const addBox = () => {
        setBoxArray(prev => {
            let top = '';
            let left = '';
            return [...prev, {
                id: prev.length > 0 ? prev[prev.length - 1].id + 1 : prev.length,
                top,
                left,
                color: getRandomColor()
            }]
        })
    }
    const fireEvent = (evn, val) => {
        setDimension({ [evn.which]: val })
    }

    const computeVal = (v, minLimit, maxLimit, a, b) => {
        let n = parseInt(v, 10) - (dimension[a] ? 100 : 0) + (dimension[b] ? 100 : 0);
        let val = n <= 0 ? 0 : (n <= minLimit ? v : (n >= maxLimit ? v : n));
        return val;
    }

    useEffect(() => {
        if (boxArray.length <= 0) { return }
        if (selectedBox === '') { return }

        let newBoxArray = JSON.parse(JSON.stringify(boxArray))

        if (dimension[46]) {
            newBoxArray = newBoxArray.filter((box, inx) => box.id !== selectedBox)
        } else {
            let index = '';
            newBoxArray.forEach((box, inx) => {
                if (box.id === selectedBox) index = inx
            })
            let boxPos = document.getElementById(`box_${selectedBox}`).getBoundingClientRect();
            let top = computeVal(boxPos.top, 0, ((Math.ceil(boxArray.length / 8) * 100)), 87, 83);
            let left = computeVal((boxPos.left), 0, 800, 65, 68);
            newBoxArray[index].top = top;
            newBoxArray[index].left = left;
        }
        setBoxArray(newBoxArray);

    }, [dimension])

    const onKeyDown = useCallback((evn) => fireEvent(evn, true), [])

    useEffect(() => {
        if (eventListenerBool) window.addEventListener('keydown', onKeyDown)
        else window.removeEventListener('keydown', onKeyDown)
    }, [eventListenerBool])


    return (
        <div
            className="arena-container">
            <BoxFence
                selectedBox={selectedBox}
                selectBox={selectBox}
                boxArray={boxArray} />
            <ActionsWrapper
                disableKeyboardActions={() => setEventListenerBool(prev => !prev)}
                addBox={addBox} />
        </div>
    )
}

export default ArenaContainer
