import React from "react";
import { MouseOverPopover } from "../sub-gameStatus/mouseOverPopOver";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

/**
 * Elemento que contiene el título de la actual situación de juego
 */
function TitleGameStatus(props)
{

    let content = (
        <h1 id='topElementTitle' tabIndex="0" role="heading" aria-level="1" aria-label={`Estás en la página: ${props.titleName}`}>
            {props.titleName}
        </h1>
    );

    const info = (
        <MouseOverPopover content={<InfoOutlinedIcon />} shown={RuletaDescription} />
    );

    if(props.titleName === 'Ruleta') {
        content = (
            <h1 id='topElementTitle' tabIndex="0" role="heading" aria-level="1" aria-label={`Estás en la página: ${props.titleName}`}>
                {props.titleName} {info}
            </h1>
        );
    }

    return (
        <>
            {content}
        </>
    );
}

const RuletaDescription = (
    `¡Con la ruleta, podrás conseguir todos los Pokémon que TÚ quieras!
    Dependiendo del TIER que elijas para la tirada, te saldrán Pokémon
    con una rareza acorde a ese TIER. En el menú de Ayuda (?), podrás
    encontrar información sobre cada una de las tiradas.`
);

export default TitleGameStatus;