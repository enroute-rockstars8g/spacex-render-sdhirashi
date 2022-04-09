import React, { FC, useEffect,useState,ChangeEvent } from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { getLaunches, getRockets } from "../../Services/Spacex/service";
import './cards.css'

export const Launches: FC = ({}) => {

    const[actualLaunchesList, setactualLaunchesList] = useState<any> ([]);
    
    
    useEffect(()=>{

        const getLaunchesList = async () => {
            const LaunchesList = await getLaunches();
            setactualLaunchesList(LaunchesList);
        }
        getLaunchesList();

        

    },[]);



    return (
      <div>

        {actualLaunchesList!==undefined?( 
                <div>

                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="row">
                        
                            {actualLaunchesList.slice(0, 20).map((launch:any,index:any)=>(

                                <React.Fragment>
                                    <div className="card-deck">
                                        <div className="card text-center animate__animated animate__fadeInUp flex-row flex-wrap">
                                            <div className="overflow">
                                                <img  key = {index} src={launch.links['patch']['small']} alt="" className="card-img"/>
                                            </div>
                                            <div className="card-body ">
                                                <h4 className="card-title">{launch.name}</h4>
                                                <p className="card-text">Date: {launch.date_local}</p>
                                                <p className="card-text">Rocket No.: {launch.rocket}</p>
                                                <p className="card-text">Launchpad: {launch.launchpad}</p>
                                                <a href={launch.links['webcast']} className="btn btn-outline-secondary rounded-0 bg-dark">Webcast</a>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </React.Fragment>
                            ))}
                            
                        </div>
                    </div>

                </div>):null}
          

      </div>
    );
  };


export const Rockets: FC = ({}) => {

    const[actualRocketsList, setactualRocketsList] = useState<any> ([]);
    
    useEffect(()=>{

        const getRocketsList = async () => {
            const RocketsList = await getRockets();
            setactualRocketsList(RocketsList);
            console.log(actualRocketsList);
        }
        getRocketsList();

    },[]);


    return (
      <div>
 
        {actualRocketsList!==undefined?( 
        <div>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                
                    {actualRocketsList.map((rocket:any,index:any)=>(

                        <React.Fragment>
                            <div className="col-md-3 d-flex align-items-stretch">
                                <div className="card text-center animate__animated animate__fadeInUp">
                                    <div className="overflow">
                                        <img  key = {index} src={rocket.flickr_images[0]} alt="" className="card-img-top"/>
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h4 className="card-title">{rocket.name}</h4>
                                        <p className="card-text">Height: {rocket.height['meters']}m</p>
                                        <p className="card-text">Mass: {rocket.mass['kg']} Kg</p>
                                        <p className="card-text">First Flight: {rocket.first_flight}</p>
                                        <p className="card-text">Cost per Launch: {rocket.cost_per_launch}</p>
                                        <p className="card-text">Description: {rocket.description}</p>
                                        <a href={rocket.wikipedia} className="btn btn-outline-secondary rounded-0 bg-dark mt-auto">Wikipedia</a>
                                    </div>
                                </div>
                            </div>
                        
                        </React.Fragment>
                    ))}

                    

                </div>
            </div>

        </div>):null}
                    
    
      </div>
    );
  };

 