import React from 'react';
// import {ArrowRightCircleIcon as ArrowRightCircleOutline} from "@heroicons/react/24/outline";
import {ArrowRightCircleIcon as ArrowRightCircleSolid} from "@heroicons/react/24/solid";
import "../../styles/icons/ArrowRightCircle.css";

function ArrowRightCircle({hasHovered, clickHandler, ref}){
    return (
        <>
        <div className={"arrow-right"} onClick={clickHandler} >
            
                <ArrowRightCircleSolid role="img" className={`arrow_icon_right ${hasHovered ? 'hover' : 'leave'}`} ref={ref} />
            
        </div>
        </>
    )
}
export default ArrowRightCircle;