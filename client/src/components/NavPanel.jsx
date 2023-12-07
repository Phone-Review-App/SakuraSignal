import React, {useMemo} from 'react';
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

    return (
        <>
        <div className="nav-panel">
            <div className="nav-arrows">
            <span>
            <Button className="button arrow" text={"<"} onClick={handleGoLeft} />

            </span>
            <span>
            <Button className="button arrow" text={">"} onClick={handleGoRight} />
            </span>

            </div>
            <div className="current-provider">
            <span >
                <Button className="button" text={
                <span className="provider_name">
                    {
                        `${providers[provider_data?.current].name}`
                    }
                </span>
                    } 
                    ></Button> 
                
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