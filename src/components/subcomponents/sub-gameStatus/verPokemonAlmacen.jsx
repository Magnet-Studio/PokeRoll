import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { GetPokemonByID } from "./lib/pokemonList";
import './styles/verPokemonAlmacen.css'
import { GetFrequencyByName } from "./lib/pokemonFrequency";
import { GetDataByDexNum, GetImage, GetPrettyTypeNameSpanish, GetVariantImage } from "./lib/PokemonData";
import { GetSpeciesDataByDexNum, GetSpanishName } from "./lib/PokemonSpeciesData";
import { GetRarezaPoints, rarezaExtraPoints } from "./lib/pokemonRarity";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { MouseOverPopover } from "./mouseOverPopOver";
import ForwardIcon from '@mui/icons-material/Forward';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ReactComponent as SpaIcon } from '../../../images/megaIcon.svg';
import { useSpring, animated  } from 'react-spring';
import CountUp from 'react-countup';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import VerifiedIcon from '@mui/icons-material/Verified';

function VerPokemonAlmacen({UserData, setUserData}) 
{

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const pokemon = GetPokemonByID(id, UserData.pokemonList);

    const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);
    const [pokemonData, setPokemonData] = useState(null);
    
    useEffect(() => {
      document.title = "PokéROLL (Datos de " + pokemon.nametag + ")"
    }, [])

    useEffect(() => {
        const fetchDataAndUpdateState = async () => 
            {
                const dataSpecies = await GetSpeciesDataByDexNum(pokemon.name);
                const dataPoke = await GetDataByDexNum(pokemon.name);
                setPokemonSpeciesData(dataSpecies);
                setPokemonData(dataPoke);
            };
            
            if(pokemon.name !== undefined)
            {
              fetchDataAndUpdateState();
            }
    }, [pokemon.name]);

    const name = GetSpanishName(pokemonSpeciesData);
    const frequency = GetFrequencyByName(name);
    const nombreRareza = nombresRarezas[frequency-1];

    const firstType = pokemon.type1;
    const secondType = pokemon.type2;
    
    let firstTypeContainer = (<div className={"pokemonType " + firstType} aria-description="Del tipo">{GetPrettyTypeNameSpanish(firstType)}</div>)

    let secondTypeContainer = (<></>); 
    if(secondType !== null)
    {
        secondTypeContainer = (<div className={"pokemonType " + secondType}aria-description=" y ">{GetPrettyTypeNameSpanish(secondType)}</div>);
    }

    let megaWord = "una Megaevolución";
    if (pokemon.name === 382 || pokemon.name === 383) {
      megaWord = "una Regresión Primigenia"
    } else if (pokemon.name === 800) {
      megaWord = "a Ultra Necrozma"
    }
    const shinyEffect = (pokemon.shiny === "shiny") ? "shinyEffect" : "";
    const megaEffect = (pokemon?.megaevolution === true) ? "megaEffect" : "";
    const rareEffect = (pokemon?.rarespecies === true) ? "rareEffect" : ""
    
    const rarezas = rarezaExtraPoints;
    const nombrePKM = pokemon.nametag === null ? name : pokemon.nametag;
    const shinyCond = (pokemon.shiny === "shiny") ? <MouseOverPopover content={<AutoAwesomeIcon className="shinyIcon"/>} 
                                                                      shown={<span > ¡Felicidades! ¡Has conseguido un Pokémon Variocolor!<br/>
                                                                      Obtendrás una bonificación de 5000 puntos en el cálculo final
                                                                      de Rareza por ello.
                                                                      </span>}/> : <></>;
                                                                      
    const megaCond = (pokemon?.megaevolution === true) ? <MouseOverPopover content={<SpaIcon className="megaIcon" />} 
                                                                      shown={<span> ¡Felicidades! ¡Has conseguido {megaWord}!<br/>
                                                                      Obtendrás una bonificación de 1500 puntos en el cálculo final
                                                                      de Rareza por ello.
                                                                      </span>}/> : <></>;
    
    const rareCond = (pokemon?.rarespecies === true) ? <MouseOverPopover content={<MilitaryTechIcon className="rareIcon" />} 
                                                                      shown={<span> ¡Felicidades! ¡Has conseguido una especie rara!<br/>
                                                                      Obtendrás una bonificación de 1000 puntos en el cálculo final
                                                                      de Rareza por ello.
                                                                      </span>}/> : <></>; 

    const eventCond = (pokemon?.event === true) ? <MouseOverPopover content={<VerifiedIcon className="eventIcon" />} 
                                                                      shown={<span> ¡Felicidades! ¡Has conseguido un Pokémon de evento!<br/>
                                                                      {pokemon.event_desc}
                                                                      </span>}/> : <></>; 

    const rarityMessage = <MouseOverPopover content={<InfoOutlinedIcon />} 
                                            shown={<span>
                                              La rareza de un Pokémon contribuye a su valor final. 
                                              Este Pokémon posee la rareza "{nombreRareza}", por lo 
                                              cual obtendrá un bonus de {rarezas[frequency-1]} puntos en el 
                                              cálculo final de Rareza.
                                              </span>} />
    
    const statMessage = <MouseOverPopover content={<InfoOutlinedIcon />} 
                                          shown={<span>
                                            La gráfica de Estadísticas representa los valores individuales (IVs)
                                            para cada una de sus estadísticas, definiendo genéticamente a un Pokémon
                                            para que este sea único. 
                                            Cuanto mayores sean estos valores para cada característica, mejor será 
                                            este Pokémon y, en consecuencia, poseerá mayor puntuación en el cálculo.
                                            final de Rareza.
                                            </span>} />;
    const totalSum = pokemon.iv ? (pokemon.iv.atq + pokemon.iv.def + pokemon.iv.spatq + pokemon.iv.spdef + pokemon.iv.spe + pokemon.iv.hp) : 0;
    const calc = ((totalSum / 186) * 100).toFixed(2);
     
    let hexagonData = (<></>);
    if(pokemon.iv)
    {
      hexagonData = (<HexagonData size={100} fillColor="rgba(255,255,0,0.3)" strokeColor="rgba(255,255,0,1)" data={pokemon.iv}/>);
    }

    return (
        <>
        <div className="backButton">
          <Link to="/almacen" aria-label="Volver al almacén"  tabIndex='6'><span className="backArrow"><ForwardIcon fontSize="large"/></span></Link>
        </div>
        <div id="verPokemonAlmacenBigBox" tabIndex='7'>
            <div id="infoGeneral">
                
                {pokemon?.variant === undefined ? GetImage(pokemonData, (pokemon.shiny === "shiny")) : GetVariantImage(pokemon.variant.name, (pokemon.shiny === "shiny"))}
                <div className="inlineContainer">
                    <p className={rareEffect + " " + megaEffect + " " + shinyEffect} >{nombrePKM}</p>
                    <text aria-label={pokemon.shiny === "shiny" ? " Variocolor:" : ":"}></text>
                    <text aria-label={pokemon.megaevolution === true ? " Megaevolución:" : ":"}></text>
                    <text aria-label={pokemon.rarespecies === true ? " Especie rara:" : ":"}></text>
                    <text aria-label={pokemon.event === true ? " De evento:" : ":"}></text>
                    {shinyCond}
                    {megaCond}
                    {rareCond}
                    {eventCond}
                </div>
                <div id="tiposPokemon">
                  {firstTypeContainer}
                  {secondTypeContainer}
                </div>
            </div>

            <div id="infoAdicional">
                <p className="fechaEncontrado">{"Encontrado el " + pokemon.datefound}</p>
                <p className="entrenadorOriginal" aria-description=":">Entrenador original:</p>
                <p className={"nombreEO " + (pokemon?.event === true ? "event" : "")}>{pokemon.originaltrainer}</p>
                <div className="inlineContainer" aria-description=":">
                  <p className="rareza">Rareza: </p>
                  <p className={"rareza" + frequency}>{(nombreRareza === undefined ?  " Cargando..." : " " + nombreRareza + " " )}</p>
                  {rarityMessage}
                </div>
                <GetRarezaValue ivs={pokemon.iv} shiny={pokemon.shiny} frequency={frequency} mega={(pokemon?.megaevolution !== undefined ? pokemon.megaevolution : false)} rare={(pokemon?.rarespecies !== undefined ? pokemon.rarespecies : false)}/>
            </div>

            <div id="statsDiv">
              <div className="inlineContainer" aria-description=":">
                <p>Estadísticas </p>
                {statMessage}
              </div>
                
                                              
                <div id="statsFullStructure">
                  <Hexagon size={100} fillColor="rgba(0,0,0,0.1)" strokeColor="rgba(255,255,255,0.2)" data={pokemon.iv}/>
                  {hexagonData}
                  <p aria-description=": Porcentaje total:"className={"ivPercentage " + (totalSum === 186 ? "fullivs" : "")}>{calc}%</p>
                </div>
                
                
            </div>

      
        </div>
        
        </>
    );
}

export const nombresRarezas = ['Común', 'Infrecuente', 'Peculiar', 'Épico', 'Legendario', 'Singular'];

function GetRarezaValue({ ivs , shiny, frequency, mega, rare}) 
{
    
    const finalValue = GetRarezaPoints(ivs, shiny, frequency, mega, rare);


    return (
        <>
            <p className="ValorRareza" aria-description=": Puntuación final: ">{<CountUp start={0} end={finalValue} duration={0.5} separator=""></CountUp>}<span className="pts"> pts.</span></p>
        </>
    )
}

const HexagonData = ({ size, fillColor, strokeColor, data}) => {
  // Coordenadas de los vértices del hexágono
  const midX = 25 + (size* Math.sqrt(3) / 2);
  const midY = size;

  let points = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
  if(data)
  {
    points = [
      [midX - (data.spdef / 31)*(size* Math.sqrt(3) / 2), midY + (data.spdef / 31)*size/2],
      [midX - (data.spatq / 31)*(size* Math.sqrt(3) / 2), midY - (data.spatq / 31)*size/2], 
      [midX, midY - (data.hp / 31)*size],
      [midX + (data.atq / 31)*(size* Math.sqrt(3) / 2), midY - (data.atq / 31)*size/2],
      [midX + (data.def / 31)*(size* Math.sqrt(3) / 2), midY + (data.def / 31)*size/2],
      [midX, midY + (data.spe / 31)*size]
    ];
  }

  

  // Convertimos las coordenadas a un string
  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    points: points.map((point) => point.join(',')).join(' '),
    from: { points: points.map(() => 25 + size* Math.sqrt(3) / 2 + ',' + size).join(' ') }, // Comienza desde el centro
    config: { tension: 170, friction: 26 }, // Duración de la animación en milisegundos
  }));

  useEffect(() => {
    setAnimatedProps({ points: points.map((point) => point.join(',')).join(' ') });
  });


  return (
    <animated.svg
      className="stats"
      height="40vh"
      width="50vw"
      viewBox={`15 -15 ${size * 2} ${size * Math.sqrt(3) * 2}`}
      style={animatedProps}
      aria-hidden="true" tabIndex="-1"
    >
      <animated.polygon
        points={animatedProps.points}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
      />
    </animated.svg>
  );
};

const Hexagon = ({ size, fillColor, strokeColor, data }) => {
  // Coordenadas de los vértices del hexágono
  const points = [
      [25, size * 1.5],
      [25, size / 2], 
      [25 + size* Math.sqrt(3) / 2, 0],
      [25 + size * Math.sqrt(3), size / 2],
      [25 + size * Math.sqrt(3), size * 1.5],
      [25 + size* Math.sqrt(3) / 2, size * 2]
  ];

  const positionOffset = [
    [-15, 0],
    [-15, -15],
    [0, -15],
    [20, -15],
    [20, 0],
    [0, 0]
  ];

  // Convertimos las coordenadas a un string
  const pointsString = points.map(point => point.join(',')).join(' ');

  const labels = ['Sp.Def.', 'Sp.Atq.', 'HP', 'Atq.', 'Def.', 'Vel.'];
  const fullNames = ['Defensa especial', 'Ataque Especial', 'Puntos de salud', 'Ataque', 'Defensa', 'Velocidad'];
  let values = [0,0,0,0,0,0];
  if(data) {
    values = [data.spdef, data.spatq, data.hp, data.atq, data.def, data.spe];
  }

  return (
    <svg className="statsTemplate" height="40vh" width="50vw" viewBox={`15 -15 ${size * 2} ${size * Math.sqrt(3) * 2}`}>
      {points.map((point, index) => (
        <text
          key={index}
          x={(point[0] + parseInt(positionOffset[index][0], 10))}
          y={(point[1] + parseInt(positionOffset[index][1], 10))}
          dominantBaseline="hanging"
          textAnchor="middle"
          fill={(values[index] === 31 ? "rgb(255, 241, 50)" : "white")}
          fontSize="12"
          className={"elemTexts"}
          aria-hidden="true">
          {labels[index]}
        </text>
      ))}
      {points.map((point, index) => (
        <text
          key={`label-${index}`}
          x={(point[0] + parseInt(positionOffset[index][0], 10))}
          y={(point[1] + parseInt(positionOffset[index][1], 10))}
          dominantBaseline="hanging"
          textAnchor="middle"
          fill="none"
          stroke="none"
          aria-label={":" + fullNames[index] + ": " + values[index]}>
          {":" + fullNames[index] + ": " + values[index]}
        </text>
      ))}
      <polygon points={pointsString} fill={fillColor} stroke={strokeColor} strokeWidth="2" aria-hidden="true" tabIndex="-1"/>
    </svg>
  );
};

export default VerPokemonAlmacen;