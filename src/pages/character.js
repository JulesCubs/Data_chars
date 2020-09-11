import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
    const id = getHash();
    const character = await getData(id);
    const view = `
        <div class="Character-inner">
            <article class="Character-card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="Character-card">
                <h3>(Episodes): <span>${character.episode.length}</span></h3>
                <h3>(Status): <span>${character.status}</span></h3>
                <h3>(Species): <span>${character.species}</span></h3>
                <h3>(Gender): <span>${character.gender}</span></h3>
                <h3>(Origin): <span>${character.origin.name}</span></h3>
                <h3>(Last Loaction): <span>${character.location.name}</span></h3>
            </article>
        </div>
    `;
    return view;
}

//Generando un arreglo para llamar las propiedades del "character"
/*export const Character = async () => {

    const id = getHash();
    const character = await getData(id);
  
    const { image, name,  episode, status, species, gender, origin, location} = character;
    
    const view = `
    <div class="Characters-inner">
    <article class="Characters-card">
          <img src="${image}" alt="${name}">
          <h2>${name}</h2>
          </article>
        <article class="Character-card">
        <h3>Episodes: ${episode.length}</h3>
        <h3>Status: ${status}</h3>
        <h3>Species: ${species}</h3>
          <h3>Gender: ${gender}</h3>
          <h3>Origin: ${origin.name}</h3>
          <h3>Last Location: ${location.name}</h3>
        </article
        </div>
        `;
    return view;
};*/

export default Character;
