import { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { GetRarezaPoints } from "./lib/pokemonRarity";
import { GetSpeciesDataByName, GetSpanishName } from "./lib/PokemonSpeciesData";
import { CircularProgress, Modal } from "@mui/material";
import {
  GetDataByName,
  GetPrettyTypeNameSpanish,
  GetImage,
  GetDexNum,
  GetVariantImage,
} from "./lib/PokemonData";
import { Box } from "@mui/material";
import { all } from "axios";

export default function ModalSelectPokemon({
  selectPokemon,
  setSelectPokemon,
}) {
  const [selectedValue, setSelectedValue] = useState("0");
  const [selectedFrequency, setSelectedFrequency] = useState("0");
  const [selectedType, setSelectedType] = useState("0");
  const [Name, setName] = useState("");

  useEffect(() => {
    setSelectedValue(sessionStorage.getItem("selectedValue") || "0");
    setSelectedFrequency(sessionStorage.getItem("selectedFrequency") || "0");
    setSelectedType(sessionStorage.getItem("selectedType") || "0");
    setName(sessionStorage.getItem("Name") || "");
  }, []);

  useEffect(() => {
    if (selectPokemon) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectPokemon]);

  const handleClose = (event) => {
    event.stopPropagation();
    setSelectPokemon(false);
  };

  const style = {
    width: "75%",
    height: "75%",
    marginTop: "2%",
    marginBottom: "2%",
    display: "grid",
    gridTemplateColumns: "1% 98% 1%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#283a6c",
    border: "0.4vw solid #5eccfc",
    boxShadow: 24,
    p: 4,
    borderRadius: "2vw",
  };

  return (
    <>
      <Modal
        open={selectPokemon}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        id="selectButtonContainer"
      >
        <Box sx={style}>
          <div id="almacenBigBox">
            <div id="filtros" style={{ pointerEvents: all }}>
              <FiltrosAlmacen
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                selectedFrequency={selectedFrequency}
                setSelectedFrequency={setSelectedFrequency}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                Name={Name}
                setName={setName}
              />
            </div>

            <div id="pokemon-cards-container" style={{ pointerEvents: all }}>
              <CompletePokemonList
                selectedValue={selectedValue}
                selectedFrequency={selectedFrequency}
                selectedType={selectedType}
                Name={Name}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

function FiltrosAlmacen({
  selectedValue,
  setSelectedValue,
  selectedFrequency,
  setSelectedFrequency,
  selectedType,
  setSelectedType,
  Name,
  setName,
}) {
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    sessionStorage.setItem("selectedValue", event.target.value);
  };
  const handleSelectTier = (event) => {
    setSelectedFrequency(event.target.value);
    sessionStorage.setItem("selectedFrequency", event.target.value);
  };
  const handleSelectType = (event) => {
    setSelectedType(event.target.value);
    sessionStorage.setItem("selectedType", event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
    sessionStorage.setItem("Name", event.target.value);
  };
  return (
    <>
      <div>
        <FilterAltIcon />
      </div>
      <div className="filterAlmacen">
        <label className="filterLabel" htmlFor="ordenacion">
          Ordenación
        </label>
        <select
          className="inputElem"
          name="generalFilter"
          id="ordenacion"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="0">Ordenar por más reciente</option>
          <option value="5">Ordenar por más antiguos</option>
          <option value="1">Ordenar por Pokémon con más valor</option>
          <option value="6">Ordenar por mejores estadísticas</option>
          <option value="2">Ordenar por número de Pokédex</option>
          <option value="3">Ordenar por Rareza más alta</option>
          <option value="4">Variocolores primero</option>
          <option value="7">Megaevoluciones primero</option>
          <option value="8">Especies raras primero</option>
        </select>
      </div>

      <div className="filterAlmacen">
        <label className="filterLabel" htmlFor="tier">
          Filtrar rareza
        </label>
        <select
          className="inputElemSmall"
          name="tier"
          id="tier"
          value={selectedFrequency}
          onChange={handleSelectTier}
        >
          <option value="0">No filtrar</option>
          <option value="1">Común</option>
          <option value="2">Infrecuente</option>
          <option value="3">Peculiar</option>
          <option value="4">Épico</option>
          <option value="5">Legendario</option>
          <option value="6">Singular</option>
        </select>
      </div>
      <div className="filterAlmacen">
        <label className="filterLabel" htmlFor="filtroTipo">
          Filtrar tipo
        </label>
        <select
          className="inputElemSmall"
          name="type"
          id="filtroTipo"
          value={selectedType}
          onChange={handleSelectType}
        >
          <option value="0">No filtrar</option>
          <option value="steel">Acero</option>
          <option value="water">Agua</option>
          <option value="bug">Bicho</option>
          <option value="dragon">Dragón</option>
          <option value="electric">Eléctrico</option>
          <option value="ghost">Fantasma</option>
          <option value="fire">Fuego</option>
          <option value="fairy">Hada</option>
          <option value="ice">Hielo</option>
          <option value="fighting">Lucha</option>
          <option value="normal">Normal</option>
          <option value="grass">Planta</option>
          <option value="psychic">Psíquico</option>
          <option value="rock">Roca</option>
          <option value="dark">Siniestro</option>
          <option value="ground">Tierra</option>
          <option value="poison">Veneno</option>
          <option value="flying">Volador</option>
        </select>
      </div>

      <div className="filterAlmacen">
        <label htmlFor="filtroNombre">Filtrar por nombre</label>
        <input
          className="inputElem"
          id="filtroNombre"
          placeholder="Escriba un nombre aquí..."
          value={Name}
          onChange={handleName}
        ></input>
      </div>
    </>
  );
}

const sumIVs = (ivs) => {
  return ivs.hp + ivs.atq + ivs.def + ivs.spatq + ivs.spdef + ivs.spe;
};

function CompletePokemonList({
  selectedValue,
  selectedFrequency,
  selectedType,
  selectedSpecial,
  selectedShiny,
  Name,
}) {
  const rawList = [...JSON.parse(localStorage.getItem("pokemonList"))];
  let sortedList = [];

  // Vuelve JSON la lista
  rawList.forEach((pokemon, index) => {
    sortedList[index] = JSON.parse(pokemon);
  });

  sortedList.shift(); // Quita el {} inicial

  // Select de ordenacion
  switch (selectedValue) {
    case "0":
      sortedList.sort((a, b) => b.id - a.id);
      break;
    case "1":
      sortedList.sort((a, b) => {
        let rarezaA = GetRarezaPoints(
          a.iv,
          a.shiny,
          parseInt(a.frequency),
          a?.megaevolution !== undefined ? a.megaevolution : false,
          a?.rarespecies !== undefined ? a.rarespecies : false
        );
        let rarezaB = GetRarezaPoints(
          b.iv,
          b.shiny,
          parseInt(b.frequency),
          b?.megaevolution !== undefined ? b.megaevolution : false,
          b?.rarespecies !== undefined ? b.rarespecies : false
        );

        return rarezaB - rarezaA;
      });
      break;
    case "2":
      sortedList.sort((a, b) => {
        let rarezaA = GetRarezaPoints(
          a.iv,
          a.shiny,
          parseInt(a.frequency),
          a?.megaevolution !== undefined ? a.megaevolution : false,
          a?.rarespecies !== undefined ? a.rarespecies : false
        );
        let rarezaB = GetRarezaPoints(
          b.iv,
          b.shiny,
          parseInt(b.frequency),
          b?.megaevolution !== undefined ? b.megaevolution : false,
          b?.rarespecies !== undefined ? b.rarespecies : false
        );
        if (a.name === b.name) {
          return rarezaB - rarezaA;
        } else {
          return parseInt(a.name) - parseInt(b.name);
        }
      });
      break;
    case "3":
      sortedList.sort((a, b) => {
        return parseInt(b.frequency) - parseInt(a.frequency);
      });
      break;
    case "4":
      sortedList.sort((a, b) => {
        let rarezaA = GetRarezaPoints(
          a.iv,
          a.shiny,
          parseInt(a.frequency),
          a?.megaevolution !== undefined ? a.megaevolution : false,
          a?.rarespecies !== undefined ? a.rarespecies : false
        );
        let rarezaB = GetRarezaPoints(
          b.iv,
          b.shiny,
          parseInt(b.frequency),
          b?.megaevolution !== undefined ? b.megaevolution : false,
          b?.rarespecies !== undefined ? b.rarespecies : false
        );

        if (a.shiny === "shiny" && b.shiny !== "shiny") {
          return -1; // a viene antes que b
        } else if (a.shiny !== "shiny" && b.shiny === "shiny") {
          return 1; // b viene antes que a
        } else {
          return rarezaB - rarezaA; // ordena por rareza
        }
      });
      break;
    case "5":
      sortedList.sort((a, b) => a.id - b.id);
      break;
    case "6":
      sortedList.sort((a, b) => sumIVs(b.iv) - sumIVs(a.iv));
      break;
    case "7":
      sortedList.sort((a, b) => {
        let rarezaA = GetRarezaPoints(
          a.iv,
          a.shiny,
          parseInt(a.frequency),
          a?.megaevolution !== undefined ? a.megaevolution : false,
          a?.rarespecies !== undefined ? a.rarespecies : false
        );
        let rarezaB = GetRarezaPoints(
          b.iv,
          b.shiny,
          parseInt(b.frequency),
          b?.megaevolution !== undefined ? b.megaevolution : false,
          b?.rarespecies !== undefined ? b.rarespecies : false
        );

        if (a?.megaevolution !== undefined && b?.megaevolution !== undefined) {
          if (a.megaevolution === true && b.megaevolution === false) {
            return -1;
          } else if (b.megaevolution === true && a.megaevolution === false) {
            return 1;
          } else {
            return rarezaB - rarezaA;
          }
        } else if (
          a?.megaevolution !== undefined &&
          b?.megaevolution === undefined
        ) {
          return -1;
        } else if (
          a?.megaevolution === undefined &&
          b?.megaevolution !== undefined
        ) {
          return 1;
        } else {
          return rarezaB - rarezaA;
        }
      });
      break;
    case "8":
      sortedList.sort((a, b) => {
        let rarezaA = GetRarezaPoints(
          a.iv,
          a.shiny,
          parseInt(a.frequency),
          a?.megaevolution !== undefined ? a.megaevolution : false,
          a?.rarespecies !== undefined ? a.rarespecies : false
        );
        let rarezaB = GetRarezaPoints(
          b.iv,
          b.shiny,
          parseInt(b.frequency),
          b?.megaevolution !== undefined ? b.megaevolution : false,
          b?.rarespecies !== undefined ? b.rarespecies : false
        );

        if (a?.rarespecies !== undefined && b?.rarespecies !== undefined) {
          if (a.rarespecies === true && b.rarespecies === false) {
            return -1;
          } else if (b.rarespecies === true && a.rarespecies === false) {
            return 1;
          } else {
            return rarezaB - rarezaA;
          }
        } else if (
          a?.rarespecies !== undefined &&
          b?.rarespecies === undefined
        ) {
          return -1;
        } else if (
          a?.rarespecies === undefined &&
          b?.rarespecies !== undefined
        ) {
          return 1;
        } else {
          return rarezaB - rarezaA;
        }
      });
      break;
    default:
      break;
  }

  // Select de Tier
  sortedList = sortedList.filter((poke) =>
    selectedFrequency === "0"
      ? true
      : parseInt(poke.frequency) === parseInt(selectedFrequency)
  );

  // Select de Tipo
  sortedList = sortedList.filter((poke) =>
    selectedType === "0"
      ? true
      : poke.type1 === selectedType || poke.type2 === selectedType
  );

  sortedList = sortedList.filter((poke) =>
    Name === ""
      ? true
      : poke.nametag.toLowerCase().startsWith(Name.toLowerCase()) ||
        poke.speciesname.toLowerCase().startsWith(Name.toLowerCase())
  );

  const list = sortedList.map((datos) => {
    return <PokemonCard data={datos} key={`${datos.id}`} />;
  });
  return <>{list}</>;
}

function PokemonCard({ data }) {
  /* Esto habria que hacerlo con un array de pokemon? */
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);

  //const [isSelectedBorrado, setIsSelectedBorrado] = useState(false);

  // useEffect(() => {
  //   setIsSelectedBorrado(isAlreadySelected);
  // }, [isAlreadySelected]);

  // const handleSelectedBorrado = () => {
  //   const pokemon = GetPokemonByID(data.id, UserData.pokemonList);

  //   if (isAlreadySelected) {
  //     setSelectedBorrado(
  //       selectedBorrado.filter((pokemon) => pokemon.id !== data.id)
  //     );
  //     setIsSelectedBorrado(false);
  //   } else {
  //     setSelectedBorrado([...selectedBorrado, pokemon]);
  //     setIsSelectedBorrado(true);
  //   }
  // };

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      const dataNormal = await GetDataByName(data.name);
      const dataSpecies = await GetSpeciesDataByName(data.name);
      setPokemonData(dataNormal);
      setPokemonSpeciesData(dataSpecies);
    };

    fetchDataAndUpdateState();
  }, [data.name]);

  let pokemon,
    firstType = "";

  const name =
    data.nametag === null ? GetSpanishName(pokemonSpeciesData) : data.nametag;
  firstType = data.type1;
  const secondType = data.type2;
  const dexNum = GetDexNum(pokemonData);

  let secondTypeContainer = <></>;
  if (secondType !== null) {
    secondTypeContainer = (
      <div className="pokemonType">{GetPrettyTypeNameSpanish(secondType)}</div>
    );
  }

  pokemon = (
    <>
      {data?.variant === undefined
        ? GetImage(pokemonData, data.shiny === "shiny")
        : GetVariantImage(data.variant.name, data.shiny === "shiny")}
      <div className="types">
        <div className="pokemonType">{GetPrettyTypeNameSpanish(firstType)}</div>
        {secondTypeContainer}
      </div>
      <p className="pokemonName">{name}</p>
    </>
  );

  let megaData = "";
  if (data?.megaevolution !== undefined) {
    if (data.megaevolution === true) {
      megaData = "mega";
    }
  }

  let rareData = "";
  if (data?.rarespecies !== undefined) {
    if (data.rarespecies === true) {
      rareData = "rare";
    }
  }

  // Si los datos aún se están cargando, muestra CircularProgress dentro de la tarjeta
  const content =
    pokemonData === null || pokemonSpeciesData === null ? (
      <div className="loadingPokemon">
        <CircularProgress />
      </div>
    ) : (
      pokemon
    );

  return (
    // borradoMultiple ? (
    //   <Link onClick={handleSelectedBorrado}>
    //     <div
    //       className={
    //         "entryBox " +
    //         firstType +
    //         " " +
    //         megaData +
    //         " " +
    //         rareData +
    //         " " +
    //         data.shiny +
    //         (isSelectedBorrado ? " liberado" : " notLiberado")
    //       }
    //       key={`${data.id}-${isAlreadySelected}`}
    //       onClick={handleSelectedBorrado}
    //     >
    //       <p className="dexNumber">Nº {dexNum}</p>
    //       {content}
    //     </div>
    //   </Link>
    //
    <div
      className={
        "entryBox " +
        firstType +
        " " +
        megaData +
        " " +
        rareData +
        " " +
        data.shiny
      }
      key={data.id}
    >
      <p className="dexNumber">Nº {dexNum}</p>
      {content}
    </div>
  );
}