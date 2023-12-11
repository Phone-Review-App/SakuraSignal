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
                "current": provider_id - 1
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

        })
        return (
            
            <>
            <div className={"providers-menu-container"}>
                <div>
                    <nav className={`container ${isActive ? 'active' : '' }`} ref={menuRef}>
                        <ul className={"providers-menu"} >
                            {
                                providers.map((provider, idx) =>(

                                    <li className={"provider-cell"} 
                                    value={`${provider.value}`}
                                    key={`provider_${idx < 10 ? ("0" + String(idx)) : idx}`} 
                                    
                                    >
                                        <a href={`${provider_id !== idx + 1 ? provider.path : "#"}`}>{provider.name}</a><br />
                                        <Button className={"provider-btn"} 
                                        onClick={(e)=>{
                                            e.preventDefault();
                                            if(provider_id !== idx + 1){
                                                navigate(`${provider.path}`)
                                            } else {
                                                console.log(`You are at ${provider.name} page already`)
                                            }
                                        }
                                        } text={
                                            <span className={"provider-btn-text"}>
                                                {provider.name}
                                            </span>
                                            } />
                                    </li>
    
                                )
                                )
    
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