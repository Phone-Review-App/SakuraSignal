import React from 'react';
import {ArrowRightCircleIcon as ArrowRightCircleOutline} from "@heroicons/react/24/outline";
import {ArrowRightCircleIcon as ArrowRightCircleSolid} from "@heroicons/react/24/solid";
import "../../styles/icons/ArrowRightCircle.css";

function ArrowRightCircle({hasHovered, clickHandler}){
    return (
        <>
        <div role="switch" aria-checked={hasHovered} className={"arrow-right"} onClick={clickHandler}>
            {
                hasHovered ? 
                <ArrowRightCircleOutline role="img" className="arrow_right_icon solid"/> :
                <ArrowRightCircleSolid role="img" className={"arrow_right_icon outline"} />
            }
        </div>
        </>
    )
}
export default ArrowRightCircle;