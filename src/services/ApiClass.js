const BASE_URL = 'https://rickandmortyapi.com/api/'

class ApiFetc {

  async getCharacters(count) {
    const query = await fetch(BASE_URL + `character/[${[...Array(count+1).keys()]}]`)
    const data = await query.json()
    return data
  }
  async getOneCharacter(id) {
    const query = await fetch(BASE_URL + `character/${id}`)
    const data = await query.json()
    return data
  }
  async getEpisodes(count) {
    const query = await fetch(BASE_URL + `episode/[${[...Array(count+1).keys()]}]`)
    const data = await query.json()
    return data
  }
  async getOneEpisode(id) {
    const query = await fetch(BASE_URL + `episode/${id}`)
    const data = await query.json()
    return data
  }
  async getSpecificCharacters(array) {
    const query = await fetch(BASE_URL + `character/[${array}]`)
    const data = await query.json()
    return data
  }
}

export default ApiFetc