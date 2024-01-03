import React from 'react';
import {ArrowLeftCircleIcon as ArrowLeftCircleSolid} from "@heroicons/react/24/solid";
import "../../styles/icons/ArrowLeftCircle.css";

function ArrowLeftCircle({hasHovered, clickHandler, onMouseEnter, onMouseLeave}){
    return (
        <>
        <div role="switch" aria-checked={hasHovered} className={"arrow-left"} onClick={clickHandler}>
            
                <ArrowLeftCircleSolid role="img" className={`arrow_icon_left ${hasHovered ? 'hover' : 'leave'}`} /> 
        
        </div>
        </>
    )
}
ArrowLeftCircle.defaultProps = {
    hasHovered: false,
    clickHandler : () => {},
}
export default ArrowLeftCircle;