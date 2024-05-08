import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GetPokemonByID } from "./userdata/pokemonList";
import './styles/verPokemonAlmacen.css'
import { GetRarityOfPokemon } from "./userdata/pokemonTiers";
import { GetDataByName } from "./PokeAPI/PokemonData";
import { GetSpeciesDataByName, GetSpanishName } from "./PokeAPI/PokemonSpeciesData";


function VerPokemonAlmacen() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const pokemon = GetPokemonByID(id);

    const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);

    useEffect(() => {
        const fetchDataAndUpdateState = async () => 
            {
                const dataSpecies = await GetSpeciesDataByName(pokemon.name);
                setPokemonSpeciesData(dataSpecies);
            };

            fetchDataAndUpdateState();
    });
    const name = GetSpanishName(pokemonSpeciesData);
    console.log(name);
    const rareza = GetRarityOfPokemon(name);

    const nombrePKM = pokemon.nametag === null ? name : pokemon.nametag;

    return (
        <div id="verPokemonAlmacenBigBox">
            <div id="infoGeneral">
                <p>{nombrePKM}</p>
            </div>
            <div id="infoAdicional">
                <p>{"Encontrado el " + pokemon.datefound}</p>
                <p>Entrenador original:</p>
                <p>{pokemon.originaltrainer}</p>
                <p>{"Rareza: " + rareza}</p>
                <GetRareza ivs={pokemon.iv} shiny={pokemon.shiny} rareza={rareza}/>
            </div>
            
            <div id="statsDiv">
                <p>Estadisticas</p>
                <Hexagon size={100} fillColor="rgba(0,0,0,0.1)" strokeColor="rgba(255,255,255,0.2)"/>
                <HexagonData size={100} fillColor="rgba(255,255,0,0.3)" strokeColor="rgba(255,255,0,1)" data={pokemon.iv}/>
            </div>
            
        </div>
    );
}

const SetRareza = (rareza) => {
    switch (rareza) {
        case 1:
            return 0.2;
        case 2:
            return 0.4;
        case 3:
            return 0.6;
        case 4:
            return 1;
        case 5:
            return 2;
        case 6:
            return 2.5;
    }
}

const GetRareza = ({ ivs , shiny, rareza}) => {
    const rarity = SetRareza(rareza);
    return (
        <>
            <p>{Math.trunc(rarity * (shiny === "shiny" ? 1.01642 : 0.101645) * (Math.pow(ivs.hp + ivs.atq + ivs.def + ivs.spatq + ivs.spdef + ivs.spe , 2.2)))}</p>
        </>
    )
}

const HexagonData = ({ size, fillColor, strokeColor, data}) => {
    // Coordenadas de los vértices del hexágono

    
    const points = [
        [(size* Math.sqrt(3) / 2) - (data.def / 31)*(size* Math.sqrt(3) / 2), size + (data.def / 31)*size/2],
        [(size* Math.sqrt(3) / 2) - (data.atq / 31)*(size* Math.sqrt(3) / 2), size - (data.atq / 31)*size/2], 
        [size* Math.sqrt(3) / 2, size - (data.hp / 31)*size],
        [(size* Math.sqrt(3) / 2) + (data.spatq / 31)*(size* Math.sqrt(3) / 2), size - (data.spatq / 31)*size/2],
        [(size* Math.sqrt(3) / 2) + (data.spdef / 31)*(size* Math.sqrt(3) / 2), size + (data.spdef / 31)*size/2],
        [size* Math.sqrt(3) / 2, size + (data.spe / 31)*size]
    ];
  
    // Convertimos las coordenadas a un string
    const pointsString = points.map(point => point.join(',')).join(' ');
  
    return (
      <svg className="stats" height="20vw" width="20vw"
        viewBox={`0 0 ${size * 2} ${size * Math.sqrt(3) * 2}`}
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

const Hexagon = ({ size, fillColor, strokeColor }) => {
    // Coordenadas de los vértices del hexágono
    const points = [
        [0, size * 1.5],
        [0, size / 2], 
        [size* Math.sqrt(3) / 2, 0],
        [size * Math.sqrt(3), size / 2],
        [size * Math.sqrt(3), size * 1.5],
        [size* Math.sqrt(3) / 2, size * 2]
    ];
  
    // Convertimos las coordenadas a un string
    const pointsString = points.map(point => point.join(',')).join(' ');
  
    const labels = ['Def.', 'Atq.', 'HP', 'Sp.Atq.', 'Sp.Def.', 'Vel.'];

    return (
      <svg className="statsTemplate" height="20vw" width="20vw"
        viewBox={`0 0 ${size * 2} ${size * Math.sqrt(3) * 2}`}
      >
        <polygon
          points={pointsString}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="2"
        />
        {points.map((point, index) => (
        <text
          key={index}
          x={point[0]}
          y={point[1]}
          dominantBaseline="hanging"
          textAnchor="middle"
          fill="white"
          fontSize="12"
          className="elemTexts"
        >
          {labels[index]}
        </text>
      ))}
      </svg>
    );
  };

export default VerPokemonAlmacen;