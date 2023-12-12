import React, {useMemo, useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import providers from "../data/providers.json";
import '../styles/NavPanel.css'

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
    let menuRef = useRef(null);

    const handleMenuToogle = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    }

    const toogleOffMenu = () => {
        if(isActive){
            setIsActive(false)
        }
    }

    const ProvidersMenu = () => {
        useEffect(()=>{ 
            console.log(menuRef.current);
            try {
                const closeDown = (e) => {
                    if(menuRef.current.contains(e.target)){
                        console.log(e.target)
                    }
                }
            } catch (err){
                console.error(err);
            }
            /*
            const closeDown = (e) =>{
                if(menuRef.current && !menuRef.current.contains(e.target)){
                    setIsActive(false)
                }
            }
            document.addEventListener('click', closeDown)
            return () => {
                document.removeEventListener('click', closeDown)
            }
            */
        },[isActive])
        return (
            
            <>
            <div className={"providers-menu-container"}>
                <div>
                    <nav className={`container ${isActive ? 'active' : 'deactive' }`} ref={menuRef}>
                        <ul className={"providers-menu"} >
                            {
                                providers.map((provider, idx) =>{if(provider.provider_id !== provider_id)return (

                                    <li className={"provider-cell"} 
                                    value={`${provider.value}`}
                                    key={`provider_${idx < 10 ? ("0" + String(idx)) : idx}`} 
                                    
                                    >
                                        <a href={`${provider_id !== idx + 1 ? provider.path : "#"}`}>{provider.name}</a>
                                    </li>
    
                                        )
                                        })
    
                            }
                        </ul>
                    </nav>
                </div>
    
            </div>
            </>
        )
    }    
    return (
        <>
        <div className="nav-panel">
            <div className="nav-arrows">
            <span>
            <Button className="arrow" text={"<"} onClick={handleGoLeft} />

            </span>
            <span>
            <Button className="arrow" text={">"} onClick={handleGoRight} />
            </span>

            </div>
            <div className="current-provider">
            <span >
                <Button className={`provider_btn ${isActive ? "clicked" : ""}`} 
                onClick={handleMenuToogle}
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