import React from 'react';
import {ArrowRightCircleIcon as ArrowRightCircleSolid} from "@heroicons/react/24/solid";
import "../../styles/icons/ArrowRightCircle.css";

function ArrowRightCircle({hasHovered, clickHandler, onMouseEnter, onMouseLeave}){
    return (
        <>
        <div className={"arrow-right"} onClick={clickHandler} >
            
                <ArrowRightCircleSolid role="img" className={`arrow_icon_right ${hasHovered ? 'hover' : 'leave'}`} />
            
        </div>
        </>
    )
}
export default ArrowRightCircle;