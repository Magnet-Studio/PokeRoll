import React, {useState, useEffect} from 'react';
import './styles/ruleta.css';
import { GetDataByDexNum, GetImage , GetFirstType} from './lib/PokemonData';
import Pokeball from "../../../images/pokeball.png";

function Ruleta({threePokemon})
{   
    const notImages = [(<></>), (<></>), (<></>)];
    const [threePokemonImages, setThreePokemonImages] = useState(notImages);
    
    useEffect(() => 
    {
        const fetchDataAndUpdateState = async () => 
        {
            let images = [];

            for(let i=0; i<3; i++)
            {
                const data = await GetDataByDexNum(threePokemon[i].name);
                images[i] = GetImage(data, threePokemon[i].shiny === 'shiny');
                //threePokemon[i].type1 = GetFirstType(data);
                //threePokemon[i].type2 = GetSecondType(data);
            }
            
            setThreePokemonImages(images);
        };
        
        
        fetchDataAndUpdateState();
    
    }, [threePokemon]);



    return (
        <>
            <div className='externalArrowContainer'>
                
            </div>
        
            <div className="boxes">
                <RuletaBox pokemonImage={threePokemonImages[0]} pokemonData={threePokemon[0]} />
                <RuletaBox pokemonImage={threePokemonImages[1]} pokemonData={threePokemon[1]} />
                <RuletaBox pokemonImage={threePokemonImages[2]} pokemonData={threePokemon[2]} />
            </div>

            <div className='externalArrowContainer'>
                
            </div>
            
        </>
       
    );
}



function RuletaBox({pokemonImage})
{
    const [enabled, setEnabled] = useState("");

    useEffect(() =>
    {
        if(true)
        {
            setEnabled("");
        }
        else
        {
            setEnabled("enabled");
        }
    }, []);

    const selectPokemonHandler = () =>
    {

    };
    
    const pokeballImage = (<img src={Pokeball}/>);
    
    return (
        <div className={"ruletaBox " + enabled} onClick={selectPokemonHandler} >
            {pokemonImage === (<></>) ? pokeballImage : pokemonImage}
        </div>
    );
}

export default Ruleta;