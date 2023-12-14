import React from 'react';
import {ArrowRightCircleIcon as ArrowRightCircleOutline} from "@heroicons/react/24/outline";
import {ArrowRightCircleIcon as ArrowRightCircleSolid} from "@heroicons/react/24/solid";
import "../../styles/icons/ArrowRightCircle.css";

function ArrowRightCircle({handleHover}){
    return (
        <>
        <div>
            <ArrowRightCircleOutline />
            <ArrowRightCircleSolid />
        </div>
        </>
    )
}
export default ArrowRightCircle;