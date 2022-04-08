
//GET requests
//Launches, rockets

export const getLaunches = async () => {

    try {
        const response= await fetch(`https://api.spacexdata.com/v4/launches/`);
        if (response.status!==200) return;

        const launch = await response.json();
        return launch;
    }catch(e){
        console.error(e);
    }

};

export const getRockets = async () => {

    try {
        const response= await fetch(`https://api.spacexdata.com/v4/rockets/`);
        if (response.status!==200) return;

        const rocket = await response.json();
        return rocket;
    }catch(e){
        console.error(e);
    }

};


