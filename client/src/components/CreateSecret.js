import React, {useState} from "react"
// import { Link } from "react-router-dom";
import axios from 'axios'
// import '../App.css';
// import { useNavigate } from "react"
import { useNavigate } from "react-router-dom";

const CreateSecret = (props) => {
    
    const navigate = useNavigate()
    const [data, setData] = useState({
        secret: '',
        numberOfViews: '',
    });

    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8001/api/secrets', data)
            .then((res) => {
                setData({
                    secret: '',
                    numberOfViews: '',
                });
                navigate('/');
            })
            .catch((err) => {
                console.log('Error with secret!');
            });
    };
    return (
        <div>
            <h1>Write a secret</h1>

             <form>
                {/* <Link to="/">
                    Show Secrets
                </Link> */}
                <input type="text" name="secretInput" value={setData.secret} onChange={onChange} />
                <input type="text" name="viewInput" value={setData.numberOfViews} onChange={onChange} />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default CreateSecret;