import React from 'react';
import {ArrowLeftCircleIcon as ArrowLeftCircleOutline} from "@heroicons/react/24/outline";
import {ArrowLeftCircleIcon as ArrowLeftCircleSolid} from "@heroicons/react/24/solid";
import "../../styles/icons/ArrowLeftCircle.css";

function ArrowLeftCircle({hasHovered, clickHandler}){
    return (
        <>
        <div role="switch" aria-checked={hasHovered} className={"arrow-left"} onClick={clickHandler}>
            {
            hasHovered ? 
                <ArrowLeftCircleSolid role="img" className={"arrow_icon solid"}/> :
                <ArrowLeftCircleOutline role="img" className={"arrow_icon outline"}/>
        }
        </div>
        </>
    )
}
ArrowLeftCircle.defaultProps = {
    hasHovered: false,
    clickHandler : () => {},
}
export default ArrowLeftCircle;