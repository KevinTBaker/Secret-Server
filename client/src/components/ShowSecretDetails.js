import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ShowSecretDetails(props) {
    const [data, setData] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8001/api/secrets/$id')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log('Error from secretdetails')
            })
    })
}