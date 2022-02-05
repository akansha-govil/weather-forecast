

import {useSelector} from "react-redux";
import "./styles/today.css";


const Temp = () => {
   
    const weather = useSelector((state)=>state.weather.list);
        // console.log("-------------")
        // console.log(weather)
    return(
        <>
        {
            weather.map((item)=>{
               
                return(
                    <>
                    <div>
                    <p className="temp"> Temp : {item.main.temp}</p>
                    <p> Temp-min : {item.main.temp_min} <b>C</b></p>
                    <p> Temp-max : {item.main.temp_max}</p>
                    </div>
                    
                    </>
                )
            })
        }
        
      
        </>
    )
}

export default Temp;