export default class localStore {

  static test() {
    if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      console.log('### localStorage', localStorage.length);
    } else {
      console.log('### Sorry! No Web Storage support..');
    }
  }

  static init() {
    if(!localStorage.channels) {
      console.log('### localStore:', 'load starterPack');
      this.update(starterPack);
      return starterPack;
    } else {
      console.log('### localStore:', 'load stored channels');
      return JSON.parse(localStorage.channels);
    }
  }

  static update(obj) {
    const objson = JSON.stringify(obj);
    localStorage.setItem('channels', objson);
    console.log('### localStorage', localStorage);
  }

}

const starterPack = [
  { "id": "UCsP7Bpw36J666Fct5M8u-ZA", "userName": "How To Cook That", "category": "Cooking", "weight": 0 },
  { "id": "UCYjk_zY-iYR8YNfJmuzd70A", "userName": "Epic Meal Time", "category": "Cooking", "weight": 0 },
  { "id": "UCJFp8uSYCjXOMnkUyb3CQ3Q", "userName": "Tasty", "category": "Cooking", "weight": 0 },
  { "id": "UCsXVk37bltHxD1rDPwtNM8Q", "userName": "Kurzgesagt – In a Nutshell", "category": "Education", "weight": 0 },
  { "id": "UC1zZE_kJ8rQHgLTVfobLi_g", "userName": "The King of Random", "category": "Education", "weight": 0 },
  { "id": "UCsooa4yRKGN_zEE8iknghZA", "userName": "TED-Ed", "category": "Education", "weight": 0 },
  { "id": "UC3sznuotAs2ohg_U__Jzj_Q", "userName": "The Film Theorists", "category": "Film", "weight": 0 },
  { "id": "UCaWd5_7JhbQBe4dknZhsHJg", "userName": "WatchMojo.com", "category": "Film", "weight": 0 },
  { "id": "UC3gNmTGu-TTbFPpfSs5kNkg", "userName": "Movieclips", "category": "Film", "weight": 0 },
  { "id": "UCYUQQgogVeQY8cMQamhHJcg", "userName": "CinemaSins", "category": "Film", "weight": 0 },
  { "id": "UC6-ymYjG0SU0jUWnWh9ZzEQ", "userName": "Wisecrack", "category": "Film", "weight": 0 },
  { "id": "UCZIIRX8rkNjVpP-oLMHpeDw", "userName": "Calisthenicmovedment", "category": "Fitness", "weight": 0 },
  { "id": "UC6ghlxmJNMd8BE_u1HR-bTg", "userName": "The 80's Guy", "category": "Music", "weight": 0 },
  { "id": "UCa10nxShhzNrCE1o2ZOPztg", "userName": "Trap Nation", "category": "Music", "weight": 0 },
  { "id": "UCNZYpcqym8gHcNg2GWcC6nQ", "userName": "S!X - Music", "category": "Music", "weight": 0 },
  { "id": "UCD-4g5w1h8xQpLaNS_ghU4g", "userName": "New Retro Wave", "category": "New", "weight": 0 },
  { "id": "UCNye-wNBqNL5ZzHSJj3l8Bg", "userName": "Al Jazeera English", "category": "News", "weight": 0 },
  { "id": "UCIRYBXDze5krPDzAEOxFGVA", "userName": "Guardian News", "category": "News", "weight": 0 },
  { "id": "UCczrL-2b-gYK3l4yDld4XlQ", "userName": "RT America", "category": "News", "weight": 0 },
  { "id": "UCXIJgqnII2ZOINSWNOGFThA", "userName": "Fox News", "category": "News", "weight": -1 },
  { "id": "UCupvZG-5ko_eiXAupbDfxWw", "userName": "CNN", "category": "News", "weight": -1 },
  { "id": "UCF0pVplsI8R5kcAqgtoRqoA", "userName": "Popular on YouTube", "category": "Top", "weight": -5 },
  { "id": "UCBR8-60-B28hp2BmDPdntcQ", "userName": "YouTube Spotlight", "category": "Top", "weight": 0 },
  { "id": "UC295-Dw_tDNtZXFeAPAW6Aw", "userName": "5-Minute Crafts", "category": "Top", "weight": 0 },
  { "id": "UC-lHJZR3Gqxm24_Vd_AJ5Yw", "userName": "PewDiePie", "category": "Top", "weight": -5 },
]
