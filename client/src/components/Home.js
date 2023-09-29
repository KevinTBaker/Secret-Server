import React, {useEffect, useState} from "react"
//import { useNavigate } from 'react-router-dom'
import axios from "axios"

// const initialValues = {
//     secret: "",
//     numberOfViews: "",
//     expirationTime: "",
// };

/*
const reset = () => {
    setSecret("");
    setViews("");
    setExpiration("");    
};
*/

function Home() {
    //const url = "http://localhost:8001/api/";
    const [data, setData] = useState({
        secret: '',
        numberOfViews: '',
    });
    /*
    const fetchinfo = () => {
        return fetch(url)
            .then((res) => {
                setData({
                    secret: '',
                })
            })
            .then((d) => setData)
    }
    useEffect(() => {
        fetchinfo();
    },[]);
    */
    // const handleInputChange 
    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    let submit=async(e)=>{
        e.preventDefault()
        try{

            alert("Secret submitted")

            await axios.post("http://localhost:8001/api/", data)
            .then((res) => setData({
                secret: '',
                numberOfViews: '',
            }));
        }
        catch(e){
            console.log(e)
        }
    }
    
    return (
        <div>
            <h1>Write a secet</h1>
             <form>
                <input type="text" name="secretInput" value={setData.secret} onChange={onChange} />
                <input type="text" name="viewInput" value={setData.numberOfViews} onChange={onChange} />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Home