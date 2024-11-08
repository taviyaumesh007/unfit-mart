import React, {  useEffect } from 'react';

const Loader = () => {
  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '6px solid #e0e0e0', 
    borderTop: '6px solid #EC4E1E', 
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  const addSpinAnimation = () => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  };

  useEffect(() => {
    addSpinAnimation();
  }, []);

  return <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:"center",alignItems:'center'}} >
    <div style={spinnerStyle}>

    </div>
  </div>;
};


export default Loader;
