import React from 'react';

const StreamCreate = () => {
    
    return (         
        <div className="ui menu">
            <a className="item">
                Home
            </a>
            <div className="ui simple pointing dropdown link item">
                <span className="text">Shopping</span>
                <i className="dropdown icon"></i>
                <div className="menu">
                <div className="header">Categories</div>
                <div className="item">
                    <i className="dropdown icon"></i>
                    <span className="text">Clothing</span>
                        <div className="menu">
                        <div className="header">Mens</div>                    
                    </div>
                </div>
                    <div className="item">Home Goods</div>
                    <div className="item">Bedroom</div>                    
                </div>
            </div>
            <a className="item">
                Forums
            </a>
            <a className="item">
                Contact Us
            </a>
        </div>
     );
}
 
export default StreamCreate;