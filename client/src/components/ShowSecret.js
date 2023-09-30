import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SecretCard from './SecretCard';

function ShowSecret() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8001/api/secrets')
            .then((res) => {
                setDatas(res.data);
            })
            .catch((err) => {
                console.log('Error from secret list');
            });
    }, []);

    const secretList = 
        datas.length === 0
            ? 'there arent any secrets!'
            : datas.map((secret, k) => <SecretCard secret={secret} key={k} />);

    return (
        <div>
            <Link to='/create-secret'>+Add New Secret</Link>
        <div className='list'>{secretList}</div>
        </div>
    );
}

export default ShowSecret