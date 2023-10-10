import React from 'react';
import { Link } from 'react-router-dom';

const SecretCard = (props) => {
    const secret = props.secret;

    return (
        <div>
            <h2>
                {secret.secret}
            </h2>
        </div>
    );
};

export default SecretCard;