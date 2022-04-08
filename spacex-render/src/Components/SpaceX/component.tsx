import React, { FC, useEffect,useState,ChangeEvent } from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { getLaunches, getRockets } from "../../Services/Spacex/service";

export const Launches: FC = ({}) => {

    const[actualLaunchesList, setactualLaunchesList] = useState<any> ([]);
    const[actualRocketsList, setactualRocketsList] = useState<any> ([]);
    
    useEffect(()=>{

        const getLaunchesList = async () => {
            const LaunchesList = await getLaunches();
            setactualLaunchesList(LaunchesList);
        }
        getLaunchesList();

        const getRocketsList = async () => {
            const RocketsList = await getRockets();
            setactualRocketsList(RocketsList);
        }
        getRocketsList();

    },[]);


   // console.log(actualLaunchesList);
   //Bootstrap y estilos
   //Hacer que sean FC en lugar de directo en el return;
   //Launches: name, links-patch-large, date, detail.
   //Rocket: name, height, mass, flicklr-images-0, description, first flight, wikipedia,cost per launch

    return (
      <div>

        {actualLaunchesList!==undefined?( 
        <div>
            
            {actualLaunchesList.map((launch:any,index:any)=>(
                <p key = {index}>Nombre:{launch.name}</p>
            ))}

        </div>):null}
          
        {actualRocketsList!==undefined?( 
        <div>
            
            {actualRocketsList.map((rocket:any,index:any)=>(
                <p key = {index}>Nombre:{rocket.name}</p>
            ))}

        </div>):null}

      </div>
    );
  };