import React from "react";
import { MouseOverPopover } from "../sub-gameStatus/mouseOverPopOver";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

/**
 * Elemento que contiene el título de la actual situación de juego
 */
function TitleGameStatus(props)
{

    let content = <div id='topElementTitle'>{props.titleName}</div>;

    const info = (<MouseOverPopover content={<InfoOutlinedIcon />} shown={RuletaDescription} />);

    if(props.titleName === 'Ruleta') {
        content = (<div id='topElementTitle'>{props.titleName} {info}</div>);
    }

    return (
        <>
            {content}
        </>
    );
}

const RuletaDescription = (<span>
    ¡Con la ruleta, podrás conseguir todos los Pokémon que TÚ quieras!<br/>
    Dependiendo del TIER que elijas para la tirada, te saldrán Pokémon<br/>
    con una rareza acorde a ese TIER. En el menú de Ayuda (?), podrás<br/>
    encontrar información sobre cada una de las tiradas.

</span>);



export default TitleGameStatus;
