import React, {useMemo, useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
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
            }
        } else {
            return {
                "goLeft":0,
                "goRight":2,
                "current":1,
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
    const menuRef = useRef(null);
    const btnRef = useRef(null);
    const handleMenuOutsideClick = useRef(null)

    const handleMenuToogle = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    }
    
    useEffect(()=>{ 
        handleMenuOutsideClick.current = (e) => {
            if(menuRef.current){
                if(!btnRef.current.contains(e.target)){
                    setIsActive(false);
                }
            }
        }
        const handleClickOutside = (e) => {
            handleMenuOutsideClick.current(e)
        }
        if(isActive){
            window.addEventListener('click',handleClickOutside
            );
        }
            return () => {
                window.removeEventListener('click',handleClickOutside
                )
        }
    },[isActive]);

    const ProvidersMenu = () => {
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
        <div className="nav-panel" >
            <div className="nav-arrows">

            <ArrowLeftCircle clickHandler={handleGoLeft} hasHovered={hasHoveredLeft} onMouseEnter={()=>{setHasHoveredLeft(true)}} onMouseLeave={()=>{setHasHoveredLeft(false)}}/>
        
            <ArrowRightCircle clickHandler={handleGoRight} hasHovered={hasHoveredRight} onMouseEnter={()=>{setHasHoveredRight(true)}} onMouseLeave={()=>{setHasHoveredRight(false)}}/>
        
            </div>
            <div className="current-provider">
            <span>
                <button className={`provider_btn ${isActive ? "clicked" : "released"}`} 
                ref={btnRef}
                onClick={handleMenuToogle}
                >
                <span className="current_provider_name">
                    {
                        `${providers[provider_data?.current].name}`
                    }
                </span>
                    
                    </button> 
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