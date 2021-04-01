import React from 'react';

const Deals = () => {
    document.title = "Deals";
    return (
        <div className='container'>
            <h3 style={{fontWeight: "700", color:"gray"}}>Deals</h3><br/>
            <h4 className="text-center text-success">Deals Coming soon!</h4>
        </div>
    );
};

export default Deals;