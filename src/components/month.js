import "./styles/today.css";
import {useState,useEffect} from "react";
import axios from 'axios';
import {useSelector, useDispatch} from "react-redux";
import {MonthWeather} from "./Redux/counterSlice";
import { set } from "jsonpointer";

const Month = ()=> {
    const dispatch = useDispatch();

    const [today,setToday] = useState();

    useEffect(()=>{
        fetchTodayData();
    },[])

    async function fetchTodayData(){
        try{
            const todayapi = await axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=16&appid=048c43a2f7e00f37c3b4044df2ec3128")
           console.log(todayapi.data)
           setToday(todayapi.data);
           dispatch(MonthWeather(todayapi.data));
          // setToday(null);

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

export default Month;