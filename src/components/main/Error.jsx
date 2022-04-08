import React from 'react';

const Error = (props) => {
    return (
        <div style={{textAlign:center}}>
            <button omClick={() => props.history.push('/')}>GO TO MAIN PAGE</button>
            ERROR
        </div>
    );
};

export default Error;