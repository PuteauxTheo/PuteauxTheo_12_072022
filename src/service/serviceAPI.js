const urlBase = "http://localhost:3000/user";

/**
 * Get data of user from API according to the categorie 
 * @param {string} id user Id
 * @param {string} categorie categorie selected
 * @returns json data from fetch
 */
const getData = async (id, categorie) => {
    let urlComplet = categorie ? urlBase + `/${id}/${categorie}` : urlBase + `/${id}`
    console.log("url "+urlComplet)
    const data = await fetch(urlComplet)
    const dataFetch = await data.json()
    return dataFetch;
}

export default getData