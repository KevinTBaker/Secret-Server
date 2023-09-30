import React from 'react';
import { Link } from 'react-router-dom';

const SecretCard = (props) => {
    const secret = props.secret;

    return (
        <div>
            <h3>{secret.secret}</h3>
        </div>
    );
};

export default SecretCard;