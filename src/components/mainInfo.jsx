import React from "react";
import { useState, useRef, useEffect } from "react";
import "./styles/mainInfo.css";
import HelpIcon from "@mui/icons-material/Help";
import CloseIcon from '@mui/icons-material/Close';
import Button from 'react-bootstrap/Button';


function MainInfoButton() {

  const [enabled, setEnabled] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  const handleClick = () => 
  {
    setEnabled((prevEnabled) => !prevEnabled);  
  };

  const mainInfoRef = useRef("mainInfo");
  const mainInfoButtonRef = useRef("mainInfoButton");

  const setEnabledKeyDownHandler = (event) =>
  {
    if(event.key === "Enter")
    {
      handleClick();
    }
  }

  useEffect(() => {
    if(enabled)
    {
      mainInfoRef.current?.focus();
    }
    else if (!firstTime)
    {
      mainInfoButtonRef.current?.focus();
    }
    else
    {
      setFirstTime(false);
    }
  
  // eslint-disable-next-line
  }, [enabled]);

  // Handler del documento para regresarte a la ayuda si te sales de ella tabulando
  useEffect(() => {
    const handleTabKey = (event) => {
      if (enabled && event.key === "Tab") 
      {
        const focusableElements = document.querySelectorAll('.infoBox [tabIndex="0"], #exitMainInfoButton');
        //console.log(focusableElements)
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Handle backward tab
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Handle forward tab
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [enabled]);


  return (
    <>
      <div ref={mainInfoButtonRef} id="mainInfoButtonContainer" className={enabled ? 'disabled' : ''} onClick={handleClick} tabIndex="0" aria-label="Información y ayuda de PokéRoll" onKeyDown={setEnabledKeyDownHandler}>
        <HelpIcon id="mainInfoButton" />
      </div>
      <MainInfoBox active={enabled} exitHandler={handleClick} mainInfoRef={mainInfoRef} />
    </>
  );
}

const MainInfoBox = (props) => {

  if (!props.active) return null;


  return (
    <div id="mainInfoBG">
      <div id="mainInfoContainer" tabIndex="-1">
        <ExitMainInfoButton exitHandler={props.exitHandler} />
        <Instrucciones mainInfoRef={props.mainInfoRef} />
      </div>
    </div>
  );
};

function ExitMainInfoButton(props)
{
  const keyDownExitHandler = (event) =>
  {
    if(event.key === "Enter")
    {
      props.exitHandler();
    }
  }

  return (
    <>
      <Button variant="outline-light" id="exitMainInfoButton" onClick={props.exitHandler} tabIndex="0" aria-label="Salir de información y ayuda" onKeyDown={keyDownExitHandler}>{<CloseIcon />}</Button>{' '}
    </>
  );
}

function Instrucciones({mainInfoRef}) {
  return (
    <>
      <div className="infoBox">

        <h1 tabIndex="0" ref={mainInfoRef}>Instrucciones de uso de PokéRoll</h1>
        <h2 tabIndex="0">¡Bienvenido a PokéRoll!</h2>

        <p tabIndex="0">PokéRoll es un juego en línea de máquinas tragaperras <b>sin ningún gasto de dinero real</b> de Pokémon, en el que podrás competir contra
          otros jugadores para encontrar al Pokémon más raro posible
        </p>

        <p tabIndex="0">En PokéRoll, ofrecemos los siguientes servicios para todos los jugadores:</p>

        <ul>
          <li tabIndex="0"><b>RULETA</b>: Con la ruleta, ¡podrás conseguir TODOS los Pokémon que tú quieras! Además, tienes distintas ruletas para elegir,
            cada una de ellas tiene una mayor probabilidad para obtener mejores Pokémon.
            <ul><br/>
              <li><b>TIER 1</b>: En esta ruleta, encontrarás mayormente Pokémon comunes, como Pidgey o Rattata.</li>
              <li><b>TIER 2</b>: En esta ruleta, encontrarás Pokémon infrecuentes, como Chespin o Eevee.</li>
              <li><b>TIER 3</b>: En esta ruleta, predominan Pokémon peculiares, como Quilava o Croconaw.</li>
              <li><b>TIER 4</b>: En esta ruleta, aparecerán Pokémon épicos, como Charizard o Garchomp.</li>
              <li><b>TIER 5</b>: En esta ruleta, encontrarás a los Pokémon legendarios, como Mewtwo o Giratina.
                <ul>
                  <li>...Y con un poco de suerte, ¡Podrás conseguir Pokémon singulares, como Darkrai o Genesect!</li>
                </ul>
              </li>
            </ul><br/>
            A lo largo del tiempo, se han encontrado en las tiradas especies de Pokémon muy raras... Se han encontrado Pokémon variocolores, los cuales tienen 
            un color muy diferente al Pokémon original; especies raras de Pokémon que no se suelen ver, ¡e incluso Pokémon bajo el poder de la Megaevolución! <br/>

            Cuando hagas alguna tirada, tendrás cierta posibilidad de encontrarte con alguno de estos Pokémon... ¡Y habrá confeti para celebrarlo! ¡Coleccionalos a todos!<br/><br/>

            Pese a que por cada Tier de ruleta se obtienen Pokémon más raros, ¡ten en cuenta que cada uno cuesta más que el anterior!<br/><br/>

            (Para cambiar el Tier de la ruleta, pulsa sobre los botones ubicados a la izquierda del botón TIRAR, donde adicionalmente podrás ver qué TIER de ruleta has seleccionado)
          </li><br/>

          <li tabIndex="0" ><b>POKÉDEX</b>: Con la Pokédex integrada en PokéRoll, podrás consultar todos los Pokémon que has obtenido a través de todas las tiradas
            que hayas realizado. Ten en cuenta que, incluso liberando a tus Pokémon, ¡el registro no se perderá!<br/><br/>

            Por cierto, puede que si encuentras a todos los Pokémon de la Pokédex, encuentres con mayor facilidad a los anteriormente mencionados Pokémon variocolor...
          </li><br/>

          <li tabIndex="0"><b>ALMACÉN</b>: En el almacén, se guardarán todos los Pokémon que hayas obtenido. Adicionalmente, podrás consultar los datos de estos Pokémon,
            como pueden ser sus estadísticas, tipos, fecha de obtención, rareza y más.<br/><br/>
            
            También tienes una opción de liberar a tus Pokémon a cambio de
            puntos, con los cuales podrás realizar más tiradas en la Ruleta para conseguir más Pokémon.<br/><br/>

            En el almacén, adicionalmente dispondrás de una lista de ordenaciones y de filtros que podrás usar a tu antojo, y los cuales se aplicarán cuando se cambie alguno de los valores.
          </li><br/>

          <li tabIndex="0"><b>MARCADORES</b>: En esta ventana, podrás ver distintas clasificaciones dentro de la aplicación PokéRoll entre todos los usuarios, en el que podrás
            consultar quiénes son los jugadores que tienen mejores Pokémon, o los más raros, entre otras más opciones.
          </li><br/>

          <li tabIndex="0"><b>INTERCAMBIO</b>: Con esta función, podrás conectar con otro jugador para poder intercambiar vuestros Pokémon.</li>
        </ul>
      </div>
    </>
  );
}


export default MainInfoButton;
