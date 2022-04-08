import React from 'react';
import {useNavigate} from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate(-1)} className="back-btn">Back</button>
            card repo
        </div>
    );
};

export default Card;