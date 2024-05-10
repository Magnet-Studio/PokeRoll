import React, { useState, useEffect } from "react";
import './styles/marcadores.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { PlayerList } from './userdata/rankingList';


function Marcadores() {
    const [selectedValue, setSelectedValue] = useState('1');
    
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
    };
    
    return(
        <>
            <FilterAltIcon />
            <select className="inputElem" name="generalFilter" value={selectedValue} onChange={handleSelectChange}>
                <option value="1">Pokémon más raro</option>
                <option value="2">Más puntos gastados</option>
                <option value="3">Mayor número de tiradas</option>
                <option value="4">Más cantidad de registros</option>
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

    switch (selectedValue) {
        case '1':
            title = data.rarestpokemon.nametag + " (" + data.playername + ")";
            points = data.rarestpokemon.rareza + " puntos";
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Marcadores;