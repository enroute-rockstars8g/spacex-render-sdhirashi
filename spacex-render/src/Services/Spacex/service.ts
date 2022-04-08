
//GET requests
//Launches, missions, rockets -optional company

export const getLaunches = async () => {

    try {
        const response= await fetch(`https://api.spacex.land/rest/launches`);
        if (response.status!==200) return;

        //Agarra lo del servidor y retorna el json, retorna una promesa
        const launch = await response.json();
        return launch;
    }catch(e){
        console.error(e);
    }

};