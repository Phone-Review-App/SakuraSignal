import React, {useMemo} from 'react';
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import providers from "../data/providers.json"

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
            <Button className="button arrow" text={"<"} onClick={handleGoLeft} />
            <Button className="button arrow" text={">"} onClick={handleGoRight} />
            <div className="current-provider">
                <Button className="button provider_name" text={`${providers[provider_data?.current].name}`}/>
            </div>
        </div>
        </>
    )

}
NavPanel.defaultProps ={
    provider_id:""
}
export default NavPanel