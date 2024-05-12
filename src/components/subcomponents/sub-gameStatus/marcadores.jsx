import React, { useState, useEffect } from "react";
import './styles/marcadores.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { PlayerList } from './userdata/rankingList';
import { GetDataByName, GetImage } from "./PokeAPI/PokemonData";


function Marcadores() {
    const [selectedValue, setSelectedValue] = useState(localStorage.getItem('selectedValue') || '1');
    
    return(
        <>
            <div id="marcadoresBigBox">
                <div id="filtroMarcador">
                    <FiltroMarcador selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                </div>
                <div id="ranking-cards-container">
                    <CompleteRankingList selectedValue={selectedValue} />
                </div>
            </div>
        </>
    );
}

function FiltroMarcador({selectedValue, setSelectedValue}) {
    
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        localStorage.setItem('selectedValue', event.target.value);
    };
    
    return(
        <>
            <FilterAltIcon />
            <select className="inputElemRanking" name="generalFilter" value={selectedValue} onChange={handleSelectChange}>
                <option value="1">Pokémon más raro</option>
                <option value="2">Más puntos gastados</option>
                <option value="3">Mayor número de tiradas</option>
                <option value="4">Más cantidad de registros</option>
                <option value="5">Mejor Pokémon</option>
            </select>
        </>
    );
}


function CompleteRankingList({selectedValue}) 
{

    let sortedList = [...PlayerList];
    
    switch (selectedValue) {
        case '1':
            sortedList.sort((a, b) => b.rarestpokemon.rareza - a.rarestpokemon.rareza);
            break;
        case '2':
            sortedList.sort((a, b) => b.pointsspent - a.pointsspent);
            break;
        case '3':
            sortedList.sort((a, b) => b.rolls - a.rolls);
            break;
        case '4':
            sortedList.sort((a, b) => b.registers - a.registers);
            break;
        case '5':
            sortedList.sort((a, b) => {
                const sumA = a.bestpokemon.iv.hp + a.bestpokemon.iv.atq + a.bestpokemon.iv.def + a.bestpokemon.iv.spatq + a.bestpokemon.iv.spdef + a.bestpokemon.iv.spe;
                const sumB = b.bestpokemon.iv.hp + b.bestpokemon.iv.atq + b.bestpokemon.iv.def + b.bestpokemon.iv.spatq + b.bestpokemon.iv.spdef + b.bestpokemon.iv.spe;
                return sumB - sumA;
            });
            break;
    }


    const list = sortedList.map((datos, index) => (
        <RankingCard  data={datos} keyNum={index} selectedValue={selectedValue}/>
    ));

    return (
        <>
           {list}
        </>
    );

}


function RankingCard({data, keyNum, selectedValue})
{
    const position = <span className={keyNum + 1 === 1 ? "firstPosition" : keyNum + 1 === 2 ? "secondPosition" : keyNum + 1 === 3 ? "thirdPosition" : ""}>{keyNum + 1} </span>;
    let title = "";
    let points = "";
    let image = (<></>);
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () =>
        {
            let pokemon;
            switch (selectedValue) {
                case '1':
                    pokemon = await GetDataByName(data.rarestpokemon.name);
                    break;
                case '5':
                    pokemon = await GetDataByName(data.bestpokemon.name);
                    break;
            }
            setPokemonData(pokemon);
        }

        fetchData();
    }, [data.rarestpokemon]);


    switch (selectedValue) {
        case '1':
            title = data.rarestpokemon.nametag + " (" + data.playername + ")";
            points = data.rarestpokemon.rareza + " puntos";
            image = GetImage(pokemonData, data.rarestpokemon.shiny === "shiny");
            break;
        case '2':
            title = data.playername;
            points = data.pointsspent + " puntos";
            break;
        case '3':
            title = data.playername;
            points = data.rolls + " tiradas";
            break;
        case '4':
            title = data.playername;
            points = data.registers + " registros";
            break;
        case '5':
            title = data.bestpokemon.nametag + " (" + data.playername + ")";
            points = ((data.bestpokemon.iv.hp + data.bestpokemon.iv.atq + data.bestpokemon.iv.def + data.bestpokemon.iv.spatq + data.bestpokemon.iv.spdef + data.bestpokemon.iv.spe)/186*100).toFixed(2) + "% IVs";
            image = GetImage(pokemonData, data.bestpokemon.shiny === "shiny");
            break;
    }

    return (
        <>
            <div className="rankBox" key={keyNum} >
                <div className="rankContent">
                    <div className="rankTitle">
                            <p>
                                {position}
                                    · {title}
                            </p>
                    </div>
                    <div className="rankData">
                        <p>
                            {points}
                        </p>
                        {image}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Marcadores;