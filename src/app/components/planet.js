import React from 'react'

const Planet = ({children, size}) => (
    <div className="planet" style={{
        fontSize: size
    }}>
        {children}
    </div>
);

export default Planet
