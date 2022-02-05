import "./styles/today.css";
import {useState,useEffect} from "react";
import axios from 'axios';
import { useDispatch} from "react-redux";
import {updateWeather} from "./Redux/counterSlice";

const Today = (props)=> {
   
    const dispatch = useDispatch();

     const [today,setToday] = useState();

    useEffect(()=>{
       
    fetchTodayData();
    },[props.searchItem])
    
    const fetchTodayData = async() =>{
        try{
            const todayapi = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${props.searchItem}&appid=048c43a2f7e00f37c3b4044df2ec3128`)
            console.log(props.searchItem);
           console.log(todayapi.data.main)
           setToday(todayapi.data);
           console.log(today);
           dispatch(updateWeather(todayapi.data));
           

        } catch(error)
            {
                console.log("something is wrong");
            }
    }


    
    return (
        <>
        <div className="today-container">
            <div>
            <table className="table">
  
                    <tr >
                        <td>1:00pm</td>
                        <td className="tdi"></td>
                        <td>index</td>
                        <td className="td2"></td>
                        <td>118</td>
                    </tr>
                    
                    <tr>
                        <td>2:00pm</td>
                        <td className="tdi"></td>
                        <td>index</td>
                        <td className="td2"></td>
                        <td>136</td>
                    </tr>
                    <tr>
                        <td>3:00pm</td>
                        <td className="tdi"></td>
                        <td>index</td>
                        <td className="td2"></td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>4:00pm</td>
                        <td className="tdi"></td>
                        <td>index</td>
                        <td className="td2"></td>
                        <td>150</td>
                    </tr>
                    </table>
            </div>
        </div>
        </>
    )
}

export default Today;