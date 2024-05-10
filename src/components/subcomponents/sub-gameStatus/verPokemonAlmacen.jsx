import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GetPokemonByID } from "./userdata/pokemonList";
import './styles/verPokemonAlmacen.css'
import { GetFrequency } from "./userdata/pokemonFrequency";
import { GetDataByName, GetImage, GetFirstType, GetSecondType, GetPrettyTypeNameSpanish } from "./PokeAPI/PokemonData";
import { GetSpeciesDataByName, GetSpanishName } from "./PokeAPI/PokemonSpeciesData";
import { GetRareza } from "./userdata/rareza";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


function VerPokemonAlmacen() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const pokemon = GetPokemonByID(id);

    const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);
    const [pokemonData, setPokemonData] = useState(null);
    

    useEffect(() => {
        const fetchDataAndUpdateState = async () => 
            {
                const dataSpecies = await GetSpeciesDataByName(pokemon.name);
                const dataPoke = await GetDataByName(pokemon.name);
                setPokemonSpeciesData(dataSpecies);
                setPokemonData(dataPoke);
            };

            fetchDataAndUpdateState();
    }, [pokemon.name]);

    const name = GetSpanishName(pokemonSpeciesData);
    const rareza = GetFrequency(name);
    const nombreRareza = nombresRarezas[rareza-1];

    const firstType = GetFirstType(pokemonData);
    const secondType = GetSecondType(pokemonData);
    
    let firstTypeContainer = (<div className={"pokemonType " + firstType}>{GetPrettyTypeNameSpanish(firstType)}</div>)

    let secondTypeContainer = (<></>); 
    if(secondType !== null)
    {
        secondTypeContainer = (<div className={"pokemonType " + secondType}>{GetPrettyTypeNameSpanish(secondType)}</div>);
    } 
    

    const nombrePKM = pokemon.nametag === null ? name : pokemon.nametag;
    const shinyCond = (pokemon.shiny === "shiny") ? <MouseOverPopover content={<AutoAwesomeIcon />} shown={<>¡Felicidades! ¡Has conseguido un Pokémon Variocolor!<br/>Obtendrás una bonificación de puntos de rareza por ello :)</>}/> : <></>;

    return (
        <>
        <div id="verPokemonAlmacenBigBox">
            <div id="infoGeneral">
                {GetImage(pokemonData, (pokemon.shiny === "shiny" ? true : false))}
                <div className="inlineContainer">
                    <p>{nombrePKM}</p>
                    {shinyCond}
                </div>
                <div id="tiposPokemon">
                  {firstTypeContainer}
                  {secondTypeContainer}
                </div>
            </div>

            <div id="infoAdicional">
                <p className="fechaEncontrado">{"Encontrado el " + pokemon.datefound}</p>
                <p className="entrenadorOriginal">Entrenador original:</p>
                <p className="nombreEO">{pokemon.originaltrainer}</p>
                <p className="rareza">Rareza: <span className={"rareza" + rareza}>{(nombreRareza === undefined ? "Cargando..." : nombreRareza)}</span></p>
                <GetRarezaValue ivs={pokemon.iv} shiny={pokemon.shiny} rareza={rareza}/>
                <div className="botonLiberar">
                  <CurrencyExchangeIcon />
                </div>
            </div>

            <div id="statsDiv">
                <p>Estadísticas</p>
                <div id="statsFullStructure">
                  <Hexagon size={100} fillColor="rgba(0,0,0,0.1)" strokeColor="rgba(255,255,255,0.2)" data={pokemon.iv}/>
                  <HexagonData size={100} fillColor="rgba(255,255,0,0.3)" strokeColor="rgba(255,255,0,1)" data={pokemon.iv}/>
                </div>
            </div>

      
        </div>
        
        </>
    );
}

function MouseOverPopover({ content, shown }) {

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={{ display: 'inline-block'}}>
      <Typography
        className="Typography-hoverContent"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {content}
      </Typography>
      <Popover
        id="mouse-over-popover"
        className="TypographyText"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        disableRestoreFocus
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 1 } } >{shown}</Typography>
      </Popover>
    </div>
  );
}

const nombresRarezas = ['Común', 'Infrecuente', 'Raro', 'Épico', 'Legendario', 'Singular'];

function GetRarezaValue({ ivs , shiny, rareza}) 
{
    
    const finalValue = GetRareza(ivs, shiny, rareza);


    return (
        <>
            <p className="ValorRareza">{finalValue < 10 ? 10 : finalValue}</p>
        </>
    )
}

const HexagonData = ({ size, fillColor, strokeColor, data}) => {
  // Coordenadas de los vértices del hexágono

  const points = [
      [25 + (size* Math.sqrt(3) / 2) - (data.def / 31)*(size* Math.sqrt(3) / 2), size + (data.def / 31)*size/2],
      [25 + (size* Math.sqrt(3) / 2) - (data.atq / 31)*(size* Math.sqrt(3) / 2), size - (data.atq / 31)*size/2], 
      [25 + size* Math.sqrt(3) / 2, size - (data.hp / 31)*size],
      [25 + (size* Math.sqrt(3) / 2) + (data.spatq / 31)*(size* Math.sqrt(3) / 2), size - (data.spatq / 31)*size/2],
      [25 + (size* Math.sqrt(3) / 2) + (data.spdef / 31)*(size* Math.sqrt(3) / 2), size + (data.spdef / 31)*size/2],
      [25 + size* Math.sqrt(3) / 2, size + (data.spe / 31)*size]
  ];

  // Convertimos las coordenadas a un string
  const pointsString = points.map(point => point.join(',')).join(' ');

  return (
    <svg className="stats" height="40vh" width="50vw"
      viewBox={`15 -15 ${size * 2} ${size * Math.sqrt(3) * 2}`}
    >
      <polygon
        points={pointsString}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
      />
    </svg>
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

  const labels = ['Def.', 'Atq.', 'HP', 'Sp.Atq.', 'Sp.Def.', 'Vel.'];
  const values = [data.def, data.atq, data.hp, data.spatq, data.spdef, data.spe];

  return (
    <svg className="statsTemplate" height="40vh" width="50vw" viewBox={`15 -15 ${size * 2} ${size * Math.sqrt(3) * 2}`}>

      {points.map((point, index) => (
        
        <text
        key={index}
        x={(point[0] + parseInt(positionOffset[index][0]))}
        y={(point[1] + parseInt(positionOffset[index][1]))}
        dominantBaseline="hanging"
        textAnchor="middle"
        fill={(values[index] == "31" ? "rgb(255, 241, 50)" : "white")}
        fontSize="12"
        className={"elemTexts"}>
        {labels[index]}
      </text>
      ))};

      <polygon points={pointsString} fill={fillColor} stroke={strokeColor} strokeWidth="2"/>

    </svg>
  );
};

export default VerPokemonAlmacen;