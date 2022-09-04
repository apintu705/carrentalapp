import React from 'react'

export const Layout = (props) => {
  return (
    <>
        <div className="header">
            <div className="col">
                <a href="/" className="logo">Rent-A-Car</a>
            </div>
            <div className="col">
                <span className='name'>Ricpe</span>
                <a href="/login" className="login">Login</a>
            </div>
            
            
        </div>
        <div className="main">
            {props.children}
        </div>
        <div className="footer">
            <p>&#169; 2022. All rights reserved. Powered by Abhishek kumar.</p>
        </div>
    </>
  )
}
