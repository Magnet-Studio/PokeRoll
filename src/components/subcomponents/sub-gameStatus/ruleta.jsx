import React from 'react';
import './styles/ruleta.css';

function Ruleta()
{
    return (
        <>
            <div className='externalArrowContainer'>
                <ExternalArrow />
            </div>
        
            <div className="boxes">
                <RuletaBox/>
                <RuletaBox/>
                <RuletaBox/>
            </div>

            <div className='externalArrowContainer'>
                <ExternalArrow reversed/>
            </div>
            
        </>
       
    );
}

function ExternalArrow(props)
{
    let direction = ''
    if (props.reversed === true)
    {
        direction = 'reversed';
    }

    return (
        <div className={'externalArrow ' + direction}>
            <div></div>
        </div>
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