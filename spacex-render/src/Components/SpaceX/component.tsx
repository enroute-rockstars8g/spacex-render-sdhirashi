import React, { FC, useEffect,useState,ChangeEvent } from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { getLaunches } from "../../Services/Spacex/service";

export const Launches: FC = ({}) => {

    const[actualLaunchesList, setactualLaunchesList] = useState<any> ([]);
    
    useEffect(()=>{

        const getLaunchesList = async () => {
            const LaunchesList = await getLaunches();
            setactualLaunchesList(LaunchesList);
        }
        getLaunchesList();

    },[]);


   // console.log(actualLaunchesList);

    return (
      <div>

        {actualLaunchesList!==undefined?( <div>
            
            {actualLaunchesList.map((launch:any,index:any)=>(
                <p key = {index}>Nombre:{launch.details}</p>
            ))}

        </div>):null}
          

      </div>
    );
  };