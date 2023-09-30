import React, {useState} from "react"
// import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const CreateSecret = (props) => {
    
    const navigate = useNavigate()
    const [data, setData] = useState({
        secret: '',
        remainingViews: '',
    });

    const onChange = (e) => {
        //const {name, value} = e.target;
        setData({...data, [e.target.name]: e.target.value});
        /*
        setData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        */
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8001/api/secrets', data)
            .then((res) => {
                setData({
                    secret: '',
                    remainingViews: '',
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

             <form noValidate onSubmit={onSubmit}>
                <input type="text" name="secret" value={data.secret} onChange={onChange} />
                <input type="text" name="remainingviews" defaultValue={data.remainingViews} onChange={onChange} />
                <input type="submit" onChange={onChange} />
            </form>
        </div>
    )
}

/*
const CreateSecret = (props) => {
    const [data, setData] = useState({
        secret: '',
        remainingViews: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8001/api/secrets', data)
            .then((res) => {
                //const {name, value} = e.target;
                setData({
                    secret: '',
                    remainingViews: '',
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

             <form noValidate onSubmit={handleSubmit}>
                <input type="text" name="secret" value={data.secret} onChange={handleInputChange} />
                <input type="text" name="remainingviews" defaultValue={data.remainingViews} onChange={handleInputChange} />
                <input type="submit" onChange={handleInputChange} />
            </form>
        </div>
    )
}
*/
export default CreateSecret;