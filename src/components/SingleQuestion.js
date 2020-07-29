import React from 'react';
export const SingleQuestion = ({onClick, children}) => (

<button className="collapsible" onClick={onClick}>{children}</button>
)