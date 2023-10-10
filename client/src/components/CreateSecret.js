import React, {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AES } from 'crypto-js'; 
import bcrypt, { hash } from 'bcryptjs';
const saltRounds = 10;

const CreateSecret = (props) => {
    
    const navigate = useNavigate()
    const [data, setData] = useState({
        secret: '',
        remainingViews: '',
        // hash: ''
    });

    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8001/api/secrets/', data)
            .then((res) => {
                setData({
                    secret: '',
                    remainingViews: '',
                    // hash:''
                    // hash: bcrypt.hash(secret, saltRounds, (err, hash)),
                });

                alert("secret created");
                navigate('/');
            })
            .catch((err) => {
                console.log('Error with secret!');
            });
    };
    return (
        <div>
            <h1>Write a secret</h1>

             <form noValidate onSubmit={onSubmit}>
                <input type="text" placeholder="Enter a secret" name="secret" value={data.secret} onChange={onChange} />
                <input type="text" placeholder="Remaining views" name="remainingViews" defaultValue={data.remainingViews} onChange={onChange} />
                <input type="submit" onChange={onChange} />
            </form>
        </div>
    )
}

export default CreateSecret;