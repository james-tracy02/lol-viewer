const path = 'https://cdn.communitydragon.org/9.22.1';

function getChampionData(id) {
  return fetch(`${path}/champion/${id}/data`)
  .then((res) => res.json());
}

function getChampionIcon(id) {
  return `${path}/champion/${id}/square`;
}

function getProfileIconSrc(id) {
  return `${path}/profile-icon/${id}`;
}

function queueInfo(qid) {
  switch (qid) {
    case 400:
      return { mode: "Draft Pick", map: "Summoner's Rift" };
    case 420:
      return { mode: "Ranked Solo", map: "Summoner's Rift" };
    case 430:
      return { mode: "Blind Pick", map: "Summoner's Rift" };
    case 440:
      return { mode: "Ranked Flex", map: "Summoner's Rift" };
    case 450:
      return { mode: "ARAM", map: "Howling Abyss" };
    case 900:
      return { mode: "Ultra-Rapid-Fire", map: "Summoner's Rift" };
    default:
      return { mode: "Other", map: "Other"};
  }
}

export const dataDragonService = {
  getChampionIcon,
  getProfileIconSrc,
  getChampionData,
  queueInfo,
};
