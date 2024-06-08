import React, { useState, useEffect } from "react";
import './styles/marcadores.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { PlayerList } from './userdata/rankingList';
import { GetDataByName, GetImage, GetVariantImage } from "./lib/PokemonData";
import { sumIVs } from "./almacen";
import { GetRarezaPoints, GetRarezaPointsSimplified } from "./lib/pokemonRarity";


function Marcadores({UserData}) {
    useEffect(() => {
        document.title = "Clasificación · PokéRoll"
      }, [])
    const [selectedValueRank, setselectedValueRank] = useState(sessionStorage.getItem('selectedValueRank') || '1');
    
    return(
        <>
            <div id="marcadoresBigBox" >
                <div id="filtroMarcador" >
                    <FiltroMarcador selectedValueRank={selectedValueRank} setselectedValueRank={setselectedValueRank} />
                </div>
                <div id="ranking-cards-container" >
                    <CompleteRankingList selectedValueRank={selectedValueRank} UserData={UserData}/>
                </div>
            </div>
        </>
    );
}

function FiltroMarcador({selectedValueRank, setselectedValueRank}) {
    
    const handleSelectChange = (event) => {
        setselectedValueRank(event.target.value);
        sessionStorage.setItem('selectedValueRank', event.target.value);
    };
    
    return(
        <>
            <FilterAltIcon aria-label="Icono de filtro" />
            <div className="filterAlmacen">
                <label className="filterLabel" htmlFor="ordenacion">Elegir clasificación</label>
                <select className="inputElemRanking" name="generalFilter" id="ordenacion" value={selectedValueRank} onChange={handleSelectChange} tabIndex="0" aria-label="Filtro de clasificación">
                    <option value="1" tabIndex="0">Pokémon más raro</option>
                    <option value="2" tabIndex="0">Más puntos gastados</option>
                    <option value="3" tabIndex="0">Mayor número de tiradas</option>
                    <option value="4" tabIndex="0">Más cantidad de registros</option>
                    <option value="5" tabIndex="0">Mejor Pokémon</option>
                </select>
            </div>
        </>
    );
}

const GetBestPokemon = (pokemonList) => {
    pokemonList.sort((a, b) => {
        return sumIVs(b.iv) - sumIVs(a.iv)
    })
    return pokemonList[0];
}

const GetRarestPokemon = (pokemonList) => {
    pokemonList.sort((a, b) => {
        let rarezaA = GetRarezaPoints(a.iv, a.shiny, parseInt(a.frequency), (a?.megaevolution !== undefined ? a.megaevolution : false), (a?.rarespecies !== undefined ? a.rarespecies : false));
        let rarezaB = GetRarezaPoints(b.iv, b.shiny, parseInt(b.frequency), (b?.megaevolution !== undefined ? b.megaevolution : false), (b?.rarespecies !== undefined ? b.rarespecies : false));
        
        return rarezaB - rarezaA;
    })
    return pokemonList[0];
}


function CompleteRankingList({selectedValueRank, UserData}) 
{

    let sortedList = [...PlayerList];

    const rawList = [...UserData.pokemonList];
    let myPokelist = [];
    
    let user = sortedList[0];

    // Vuelve JSON la lista
    rawList.forEach((pokemon, index) => {
        myPokelist[index] = JSON.parse(pokemon);
    });

    myPokelist.shift();
    if (myPokelist.length !== 0 ) {
        user.playername = UserData.name;
        user.pointsspent = (localStorage.getItem("nextId"));
        user.rolls = localStorage.getItem("nextId");
        user.registers = (UserData.registers.length - 1);


        user.bestpokemon = GetBestPokemon(myPokelist);
        user.rarestpokemon = GetRarestPokemon(myPokelist);
    }

    
    switch (selectedValueRank) {
        case '1':
            sortedList.sort((a, b) => {
                return GetRarezaPointsSimplified(b.rarestpokemon) - GetRarezaPointsSimplified(a.rarestpokemon);
            })
                
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
        default:
            // No debe pasar por aquí
    }


    const list = sortedList.map((datos, index) => (
        <RankingCard  data={datos} key={index} keyNum={index} selectedValueRank={selectedValueRank} UserData={UserData}/>
    ));

    return (
        <>
           {list}
        </>
    );

}


function RankingCard({data, keyNum, selectedValueRank, UserData})
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
            switch (selectedValueRank) {
                case '1':
                    pokemon = await GetDataByName(data.rarestpokemon.name);
                    break;
                case '5':
                    pokemon = await GetDataByName(data.bestpokemon.name);
                    break;
                default:
                    // No debe pasar por aquí
            }
            setPokemonData(pokemon);
        }

        fetchData();
    }, [data.rarestpokemon, data.bestpokemon, selectedValueRank]);


    switch (selectedValueRank) {
        case '1':
            title = data.rarestpokemon.nametag + " (" + data.playername + ")";
            points = GetRarezaPointsSimplified(data.rarestpokemon) + " puntos";
            image = data.rarestpokemon?.variant !== undefined ? GetVariantImage(data.rarestpokemon.variant.name, data.rarestpokemon.shiny === "shiny") : GetImage(pokemonData, data.rarestpokemon.shiny === "shiny");
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
            image = data.bestpokemon?.variant !== undefined ? GetVariantImage(data.bestpokemon.variant.name, data.bestpokemon.shiny === "shiny") : GetImage(pokemonData, data.bestpokemon.shiny === "shiny");
            break;
        default:
            // No debe pasar por aquí
    }
    let cosa = "";
    if (data.playername === UserData.name) {
        cosa = "yourself";
    }
    return (
        <>
            <div className={"rankBox " + cosa} key={keyNum} tabIndex="0" >
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