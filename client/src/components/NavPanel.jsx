import React, {useMemo, useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import providers from "../data/providers.json";
import '../styles/NavPanel.css';
import ArrowLeftCircle from "./icons/ArrowLeftCircle";
import ArrowRightCircle from "./icons/ArrowRightCircle";

const NavPanel = ({provider_id}) => {
    const navigate = useNavigate();
    const provider_data = useMemo(()=>{
        if(provider_id){
            return {
                "goLeft": provider_id - 2 < 0 ? providers.length - 1 : provider_id - 2,
                "goRight": provider_id % providers.length,
                "current": provider_id - 1,
                // "providers_arr": providers.filter((ele) =>{ ele.provider_id !== provider_id})
            }
        } else {
            return {
                "goLeft":0,
                "goRight":2,
                "current":1,
                // "providers_arr": providers
            }
        }
    },[provider_id]);
    
    const handleGoLeft = (e) =>{
        e.preventDefault();
        navigate(`${providers[provider_data?.goLeft].path}`)
    }
    const handleGoRight = (e) => {
        e.preventDefault();
        navigate(`${providers[provider_data?.goRight].path}`)
    }

    // the menu
    const [isActive, setIsActive] = useState(false);
    const [hasHoveredLeft, setHasHoveredLeft] = useState(false);
    const [hasHoveredRight, setHasHoveredRight] = useState(false);
    let menuRef = useRef(null);
    let arrowLeft = useRef(null);
    let arrowRight = useRef(null);
    let btnRef = useRef(null);

    const handleMenuToogle = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    }
    const closeActiveMenuWhenClick = () => {
        btnRef.current.click();
        console.log("closeActiveMenuWhenClick")
        setIsActive(false);
    }
    const outsideClickHandle = (e) => {
        if(
            menuRef.current  
            // && menuRef.current.contains(e.target)
            ){
            //setIsActive(false); 
            if(menuRef.current !== "<nav class=container active>"){
                console.log("outsideClickHandle")
            console.log("e.target=",e.target);
            console.log("btnRef:",btnRef, " btnRef.current: ", btnRef.current)
            }
            
        }
    }
    
    const ProvidersMenu = () => {
        useEffect(()=>{ 
            console.log("menuRef:",menuRef);
            console.log("menuRef.current:",menuRef.current);
            console.log("btnRef:", btnRef)
            if(isActive){
                window.addEventListener('click', outsideClickHandle)
            }
                return () => {
                    window.removeEventListener('click', outsideClickHandle)

            
            }
        },[menuRef]);
        
       
        return (
            
            <>
            
                
            
            <div className={"providers-menu-container"}>
                <div>{
                    (<nav className={`container ${isActive ? 'active' : 'deactive' }`} ref={menuRef}>
                        <ul className={"providers-menu"} >
                            {
                                providers.filter(provider_ => provider_.provider_id !== provider_id).map((provider, idx) =>{ return (
                                    
                                    <li className={"provider-cell"} 
                                    value={`${provider.value}`}
                                    key={`provider_${idx < 10 ? ("0" + String(idx)) : String(idx)}`} 
                                    
                                    >
                                        <a href={`${provider_id !== idx + 1 ? provider.path : "#"}`}>{provider.name}</a>
                                    
                                    </li>
                                    
                                        )
                                        })
    
                            }
                        </ul>
                    </nav>) }
                </div>
    
            </div>
            </>
        )
    }    
    return (
        <>
        <button ref={btnRef} onClick={closeActiveMenuWhenClick} className={"hidden-btn"}>{"Hidden button"}</button>
        <div className="nav-panel" >
            <div className="nav-arrows">
                { /*
            <span>
            <Button className="arrow" text={"<"} onClick={handleGoLeft} />

            </span>
            <span>
            <Button className="arrow" text={">"} onClick={handleGoRight} />
            </span>
        */
                }
        
            <ArrowLeftCircle clickHandler={handleGoLeft} hasHovered={hasHoveredLeft} ref={arrowLeft} />
        
            <ArrowRightCircle clickHandler={handleGoRight} hasHovered={hasHoveredRight} ref={arrowRight} />
        
        
            </div>
            <div className="current-provider">
            <span >
                <Button className={`provider_btn ${isActive ? "clicked" : "released"}`} 
                
                onClick={
                    handleMenuToogle}
                text={
                <span className="current_provider_name">
                    {
                        `${providers[provider_data?.current].name}`
                    }
                </span>
                    } 
                    ></Button> 
                <ProvidersMenu />
            </span>
            
            </div>
            
        </div>
        
        </>
    )

}
NavPanel.defaultProps ={
    provider_id:""
}
export default NavPanel