import "./styles/forecast.css";
import Today from "./today";
import Week from "./week";
import {useState} from "react"
import Month from "./month";
import Carousel from "react-elastic-carousel";
import Temp from "./tempDetail";
import Temp1 from "./tempDetail1";

const Forecast = () => {
   
        const [active, setActive] = useState("Today")
        const [search,setSearch] = useState("London");

        console.log(search);
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    return(
        <>
        <div className="container-flex">
            <div className="first-block">
                <div>
                    <h3 className="date-heading">{date}</h3>
                    <div className="temp-block">
                    <Carousel>
                       
                        <Temp />
                        <Temp1 />
                        <Temp />
                        <Temp1 />
                        <Temp1 />
                    </Carousel>
                        
                    </div>
                   
                </div>
            </div>
            <div className="second-block">
                <div>
                    
                    <div className="search"> <input type="serach" className="inputField" placeholder = "ForeCast"onChange={(event)=>{setSearch(event.target.value)}}></input></div>
                   
                    
                    <div className="icon-container">
                    <div className="icon"> <i class="fas fa-sun"  style = {{"fontSize" : "50px"}} ></i>
                    <p>Monday</p>
                    </div>
                    <div className="icon"> <i class="fas fa-cloud-sun-rain"  style = {{"fontSize" : "50px"}}></i>
                    <p>Tuesday</p>
                    </div>
                    <div className="icon"> <i class="fas fa-cloud-rain" style = {{"fontSize" : "50px"}} ></i>
                    <p>Wednesday</p>
                    </div>
                    <div className="icon"><i class="fal fa-cloud-snow"  style = {{"fontSize" : "50px"}}></i>
                    <p>Thursday</p>
                    </div>
                    </div>   
                      
                    
                </div>
              
                <div className="bottom">
                   <nav>
                    <button className="button1" onClick={()=> setActive("Today")}>Today</button>
                    <button className="button1" onClick={()=> setActive("Week")}>Week</button>
                    <button className="button1" onClick={()=> setActive("Month")}>Month</button>
                    </nav>
                </div>
                <hr></hr>
                <div>

                    {active === "Today" && <Today searchItem={search}/>}
                    {active === "Week" && <Week />}
                    {active === "Month" && <Month />}
                </div>
              

                

                
            </div>
        </div>
        </>
    )
}

export default Forecast;