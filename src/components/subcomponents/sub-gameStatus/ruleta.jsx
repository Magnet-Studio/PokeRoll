import React, {useState, useEffect} from 'react';
import './styles/ruleta.css';
import { GetDataByDexNum, GetImage , GetFirstType} from './lib/PokemonData';
import Pokeball from "../../../images/pokeball.png";

function Ruleta({threePokemon, tirarButtonDisable})
{   
    const pokeballImage = (<img src={Pokeball} className="pokeballRotar" />);
    const notPokemon = [(pokeballImage), (pokeballImage), (pokeballImage)];
    const [threePokemonImages, setThreePokemonImages] = useState(notPokemon);
    
    useEffect(() => 
    {
        const fetchDataAndUpdateState = async () => 
        {
            let images = [];

            for(let i=0; i<3; i++)
            {
                const data = await GetDataByDexNum(threePokemon[i].name);
                images[i] = GetImage(data, threePokemon[i].shiny === 'shiny');
                
                // images[i] === <></>;
                if(images[i].props.children.type !== "img")
                {
                    images[i] = pokeballImage;
                }

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
                <RuletaBox pokemonImage={threePokemonImages[0]} pokemonData={threePokemon[0]} tirarButtonDisable={tirarButtonDisable} />
                <RuletaBox pokemonImage={threePokemonImages[1]} pokemonData={threePokemon[1]} tirarButtonDisable={tirarButtonDisable} />
                <RuletaBox pokemonImage={threePokemonImages[2]} pokemonData={threePokemon[2]} tirarButtonDisable={tirarButtonDisable} />
            </div>

            <div className='externalArrowContainer'>
                
            </div>
            
        </>
       
    );
}



function RuletaBox({pokemonImage, tirarButtonDisable})
{
    const [enabled, setEnabled] = useState("");

    useEffect(() =>
    {
        if(tirarButtonDisable !== "disabled")
        {
            setEnabled("");
        }
        else
        {
            setEnabled("enabled");
        }
    }, [tirarButtonDisable]);

    const selectPokemonHandler = () =>
    {

    };
    
    return (
        <div className={"ruletaBox " + enabled} onClick={selectPokemonHandler} >
            {pokemonImage}
            <ModalConfirmar/>
        </div>
    );
}

function ModalConfirmar()
{
    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Quieres liberar a este Pokémon?
          </Typography>
          <Typography id="modal-modal-description" variant="h6" component="h2">
            Liberar a <i>{data.nametag}</i> supondrá perderlo para siempre, pero recibirás <i>{coinValues[data.frequency-1]} monedas</i> a cambio. (No perderás su registro en la Pokédex)
          </Typography>
          <div className="containerModal">
            <PokemonCard data={data} />
          </div>
          <div className="containerModal moneyCount">
            <img className="coin" src={CoinImage} alt="coin" /> {"+" + coinValues[data.frequency-1]}
          </div>
          <div className="containerModal">
            <Button
              className="cerrarButton"
              onClick={CerrarButton}
              style={{
                backgroundColor: "#fb6c6c" /* color de fondo */,
                color: "white" /* color del texto */,
                padding: "14px 20px" /* padding */,
                border: "0.2vw solid #9f4949" /* sin borde */,
                borderRadius: "1vw" /* bordes redondeados */,
                cursor: "pointer" /* cursor de mano al pasar por encima */,
                fontSize: "calc(0.5vw + 0.9vh)" /* tamaño de la fuente */,
                width: "8vw",
                pointerEvents: "all",
                fontFamily: "vanilla-regular",
              }}
            >
              Cancelar
            </Button>
            
            <Button
              className="confirmarButton"
              onClick={ReclamarButton}
              style={{
                backgroundColor: "#00DF09" /* color de fondo */,
                color: "#ffffff" /* color del texto */,
                padding: "14px 20px" /* padding */,
                border: "0.2vw solid #89ff8e" /* sin borde */,
                borderRadius: "1vw" /* bordes redondeados */,
                cursor: "pointer" /* cursor de mano al pasar por encima */,
                fontSize: "calc(0.5vw + 0.9vh)" /* tamaño de la fuente */,
                width: "8vw",
                marginLeft: "1.5vw",
                pointerEvents: "all",
                fontFamily: "vanilla-regular",
              }}
            >
              Reclamar
            </Button>
            
          </div>
        </Box>
      </Modal>

    );
}




export default Ruleta;