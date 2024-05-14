import React from 'react';
import './styles/ruleta.css';

function Ruleta()
{
    return (
        <>
            <div className='externalArrowContainer'>
                
            </div>
        
            <div className="boxes">
                <RuletaBox/>
                <RuletaBox/>
                <RuletaBox/>
            </div>

            <div className='externalArrowContainer'>
                
            </div>
            
        </>
       
    );
}



function RuletaBox()
{

    return (
        <div className="ruletaBox">

        </div>
    );
}

export default Ruleta;