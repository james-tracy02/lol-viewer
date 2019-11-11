const path = 'https://lol-viewer-backend.herokuapp.com';

function getFeaturedSpectate() {
  return fetch(`${path}/spectator/featured`)
  .then((res) => res.json());
}

function getSummonerByName(name) {
  return fetch(`${path}/summoners/${name}`)
  .then((res) => res.json());
}

function getMatchesBySummonerId(id, queue) {
  if(queue) {
    return fetch(`${path}/matches/by-account/${id}/queue/${queue}`)
    .then((res) => res.json());
  }
  return fetch(`${path}/matches/by-account/${id}`)
  .then((res) => res.json());
}

function getChampionRotations() {
  return fetch(`${path}/champion`)
  .then((res) => res.json());
}

function getMatchById(id) {
  return fetch(`${path}/matches/${id}`)
  .then((res) => res.json());
}

export const riotService = {
  getFeaturedSpectate,
  getSummonerByName,
  getChampionRotations,
  getMatchesBySummonerId,
  getMatchById,
};
