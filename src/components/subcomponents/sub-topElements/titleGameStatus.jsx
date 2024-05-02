import React from "react";

/**
 * Elemento que contiene el título de la actual situación de juego
 */
function TitleGameStatus(props)
{

    return (
        <p id='topElementTitle'>{props.titleName}</p>
    );
}

export default TitleGameStatus;
