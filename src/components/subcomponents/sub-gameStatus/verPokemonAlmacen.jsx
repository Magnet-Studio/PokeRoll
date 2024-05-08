import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GetPokemonByID } from "./userdata/pokemonList";
import './styles/verPokemonAlmacen.css'
import { GetRarityOfPokemon } from "./userdata/pokemonTiers";
import { GetDataByName, GetImage } from "./PokeAPI/PokemonData";
import { GetSpeciesDataByName, GetSpanishName } from "./PokeAPI/PokemonSpeciesData";


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
    });

    const name = GetSpanishName(pokemonSpeciesData);
    console.log(name);
    console.log(pokemonData);
    const rareza = GetRarityOfPokemon(name);

    const nombrePKM = pokemon.nametag === null ? name : pokemon.nametag;

    return (
        <div id="verPokemonAlmacenBigBox">
            <div id="infoGeneral">
                {GetImage(pokemonData, (pokemon.shiny === "shiny" ? true : false))}
                <p className="nombrePokemon">{nombrePKM}</p>
            </div>
            <div id="infoAdicional">
                <p className="fechaEncontrado">{"Encontrado el " + pokemon.datefound}</p>
                <p className="entrenadorOriginal">Entrenador original:</p>
                <p className="nombreEO">{pokemon.originaltrainer}</p>
                <p className="rareza">{"Rareza: " + rareza}</p>
                <GetRareza ivs={pokemon.iv} shiny={pokemon.shiny} rareza={rareza}/>
            </div>
            <div id="statsDiv">
                <p>Estadisticas</p>
                <div className="statsFullStructure">
                  <Hexagon size={100} fillColor="rgba(0,0,0,0.1)" strokeColor="rgba(255,255,255,0.2)" data={pokemon.iv}/>
                  <HexagonData size={100} fillColor="rgba(255,255,0,0.3)" strokeColor="rgba(255,255,0,1)" data={pokemon.iv}/>
                </div>
            </div>
            
        </div>
    );
}

const SetRareza = (rareza) => {
    switch (rareza) {
        case 1:
            return 100;
        case 2:
            return 400;
        case 3:
            return 1000;
        case 4:
            return 2000;
        case 5:
            return 10000;
        case 6:
            return 15000;
    }
}

const GetRareza = ({ ivs , shiny, rareza, data}) => {
    const rarity = SetRareza(rareza);
    const shinyFactor = (shiny === "shiny" ? 5000 : 0);
    const ivFactor = (Math.pow(ivs.hp + ivs.atq + ivs.def + ivs.spatq + ivs.spdef + ivs.spe , 1.2))
    const finalValue = Math.trunc((Math.pow(shinyFactor + rarity, 1.3949613) + ivFactor) / 5);
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
      <svg className="stats" height="25vw" width="25vw"
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
  
    // Convertimos las coordenadas a un string
    const pointsString = points.map(point => point.join(',')).join(' ');
  
    const labels = ['Def.', 'Atq.', 'HP', 'Sp.Atq.', 'Sp.Def.', 'Vel.'];
    const values = [data.def, data.atq, data.hp, data.spatq, data.spdef, data.spe];

    return (
      <svg className="statsTemplate" height="25vw" width="25vw"
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
          fill={(values[index] == "31" ? "rgb(255, 241, 50)" : "white")}
          fontSize="12"
          className={"elemTexts"}
        >
          {labels[index]}
        </text>
      ))}
      </svg>
    );
  };

export default VerPokemonAlmacen;