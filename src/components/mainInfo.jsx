import React from "react";
import { useState } from "react";
import "./styles/mainInfo.css";
import HelpIcon from "@mui/icons-material/Help";
import CloseIcon from '@mui/icons-material/Close';


function MainInfoButton() {

  const [enabled, setEnabled] = useState(false);

  const handleClick = () => {
    setEnabled(!enabled);
  };

  return (
    <>
      <div id="mainInfoButtonContainer" className={enabled ? 'disabled' : ''} onClick={handleClick}>
        <HelpIcon id="mainInfoButton" />
      </div>
      <MainInfoBox active={enabled} exitHandler={handleClick} />
    </>
  );
}

const MainInfoBox = (props) => {

  if (!props.active) return null;


  return (
    <div id="mainInfoBG">
      <div id="mainInfoContainer">
        <ExitMainInfoButton exitHandler={props.exitHandler} />
        <Instrucciones />
      </div>
    </div>
  );
};

function ExitMainInfoButton(props)
{
  return (
    <div id="exitMainInfoButton" onClick={props.exitHandler}>
      <CloseIcon />
    </div>
  );
}

function Instrucciones() {
  return (
    <>
      <h1>Instrucciones de uso de PokéRoll</h1>
      <p>El objetivo del nuevo jugador será realizar ruletas de nivel 1, donde se obtendrán Pokémon muy básicos. Para añadir un poco de variación a la mecánica. por cada tirada, podremos conseguir un Pokémon de los obtenidos y una cierta cantidad de puntos (pokedólares) equivalente a media tirada del mismo nivel, pensado para que el jugador tenga que deshacerse de sus propios Pokémon para poder realizar más tiradas y obtener Pokémon diferentes. Para hacer una tirada de Nivel 1 hay que usar una moneda de Nivel 1, que cuesta 100 pokedólares. Además, un Pokémon que tengas de los que has ido eligiendo y coleccionando se puede canjear por 100 pokedólares. A veces, una tirada de Nivel 1 puede ofrecerte además una moneda de Nivel 1 gratis o incluso una de Nivel 2. Una moneda de Nivel 2 se puede comprar por 500 pokedólares también. Una moneda de Nivel 2 te dará, además de elegir entre 3 Pokémon de mayor poder y 250 pokedólares por tirada. Una moneda de Nivel 3 se puede comprar por 1500. Una moneda de Nivel 4 se puede comprar por 4000. Una moneda de Nivel 5 se puede comprar por 10000. Las tiradas de Nivel 3, 4 o 5 cumplen con lo mismo que los anteriores niveles: Se podrá elegir uno de los tres Pokémon obtenidos, y se obtendrá pokedólares por el valor de media tirada del nivel elegido. Por otro lado, el jugador irá acumulando Pokémon, el jugador tiene que llegar a tener un cierto número de veces un Pokémon conseguido en las tiradas para tenerlo realmente registrado en su Pokédex. Además, una vez de registrado un Pokémon, se debe seguir consiguiendo a este más veces para poder “subirlo de Nivel” para que así no pierda sentido seguir consiguiendo ese Pokémon en las tiradas posteriores al desbloqueo. Las cadenas evolutivas en un principio no tienen importancia aquí, como mucho se toman de referencia en el sentido de que Squirtle (primero en su cadena evolutiva) estará en las tiradas de Nivel 1 y Blastoise (El último de su cadena evolutiva) estará en las tiradas de Nivel 3 o más alto (Por determinar). Una tirada en la que te salgan un Pokémon repetido dos veces te proporcionará más que la mitad del coste de la tirada (es decir, en Nivel 1, en vez de obtener 50 pokedólares, te dan 75 por ejemplo). Además, si se elige al pokémon repetido, se te darán dos de este (si sale repetido tres veces es análogo).</p>
    </>
  );
}


export default MainInfoButton;
