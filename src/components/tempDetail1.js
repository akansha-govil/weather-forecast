
import {useSelector} from "react-redux";
import "./styles/today.css";


const Temp1 = () => {
   
    const weather = useSelector((state)=>state.weather.list);
        
    return(
        <>
        {
            weather.map((item)=>{
               
                return(
                    <>
                    <div>
                    <p className="temp"> Temp : {item.main.temp}</p>
                    <p> Country : {item.name}</p>
                    
                    </div>
                    
                    </>
                )
            })
        }
        
      
        </>
    )
}

export default Temp1;