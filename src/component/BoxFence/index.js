import React, { useMemo, useState } from 'react'
import './style.css'

const BoxFence = (props) => {
    return (
        <div className="fence-wrapper">
            <div id='fence-element' className="fence">
                {props.boxArray.map((el, inx) => {
                    let rowNo = Math.floor(inx / 8)
                    let top = rowNo * 100;
                    let left = (inx % 8) * 100;

                    let style = {
                        zIndex: el.id,
                        // color: el.color,
                        top: el.top === "" ? top : el.top,
                        left: el.left === "" ? left : el.left,
                    }
                    return (<div
                        data-id={JSON.stringify(style)}
                        key={`${el.id}_key_box`}
                        id={`box_${el.id}`}
                        onClick={() => props.selectBox(el.id)}
                        style={style}
                        className={`box ${props.selectedBox === el.id ? "selected" : ""}`}
                    >{el.id}</div>)
                })}
            </div>
        </div >
    )
}

export default BoxFence
