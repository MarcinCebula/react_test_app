const tableData = JSON.parse(
  `[{
    "id": 0,
    "key": 0,
    "avatar": "https://robohash.org/iureexplicabonon.png?size=300x300&set=set1",
    "petName": "Daisy",
    "petID": "P955716",
    "name": "Waldo D'Amore IV",
    "address": "411 Graham Rapid, Elenaland Oregon 90808-2459",
    "receivedAt": "2017-11-03",
    "email": "gabe_christiansen@walshzboncak.name",
    "phoneNumber": "199-397-8593"
  }, {
    "id": 1,
    "key": 1,
    "avatar": "https://robohash.org/voluptasvoluptatemdebitis.png?size=300x300&set=set1",
    "petName": "Sooty",
    "petID": "P536125",
    "name": "Odessa Kovacek",
    "address": "21062 Rempel Mill, Terryhaven Kentucky 84922",
    "receivedAt": "2017-10-30",
    "email": "damien_heathcote@abernathykreiger.io",
    "phoneNumber": "341.184.4874"
  }, {
    "id": 2,
    "key": 2,
    "avatar": "https://robohash.org/nisiautconsequatur.png?size=300x300&set=set1",
    "petName": "Lucky",
    "petID": "P755196",
    "name": "Mr. Marlee Pouros",
    "address": "376 Heaven Roads, Port Sarinamouth Georgia 19247",
    "receivedAt": "2017-10-30",
    "email": "euna_oconnell@wisoky.net",
    "phoneNumber": "539-690-2266"
  }, {
    "id": 3,
    "key": 3,
    "avatar": "https://robohash.org/quoaccusantiumdolore.png?size=300x300&set=set1",
    "petName": "Angel",
    "petID": "P248289",
    "name": "Shayna Becker II",
    "address": "24232 Sofia Roads, Mayerberg Delaware 20591",
    "receivedAt": "2017-11-01",
    "email": "delmer@hermannortiz.biz",
    "phoneNumber": "265-833-2385"
  }, {
    "id": 4,
    "key": 4,
    "avatar": "https://robohash.org/estveritatissoluta.png?size=300x300&set=set1",
    "petName": "Missy",
    "petID": "P380227",
    "name": "Cordia Bartoletti",
    "address": "9860 Jammie Route, Mariahland Washington 66331-3302",
    "receivedAt": "2017-11-08",
    "email": "reese.johnson@torplindgren.net",
    "phoneNumber": "232.713.5662"
  }, {
    "id": 5,
    "key": 5,
    "avatar": "https://robohash.org/minusbeataeest.png?size=300x300&set=set1",
    "petName": "Lucky",
    "petID": "P257101",
    "name": "Miracle Sipes",
    "address": "9387 Okuneva Lakes, Javontebury Alabama 48113",
    "receivedAt": "2017-10-29",
    "email": "shanny@renner.net",
    "phoneNumber": "282.140.8452"
  }, {
    "id": 6,
    "key": 6,
    "avatar": "https://robohash.org/autundealiquam.png?size=300x300&set=set1",
    "petName": "Smudge",
    "petID": "P823919",
    "name": "Randi Hickle",
    "address": "65645 Rebeca Stravenue, Lake Damien Connecticut 93783-2006",
    "receivedAt": "2017-11-08",
    "email": "annabelle_kris@gleichner.io",
    "phoneNumber": "(244) 851-1984"
  }, {
    "id": 7,
    "key": 7,
    "avatar": "https://robohash.org/modivoluptatumsint.png?size=300x300&set=set1",
    "petName": "Shadow",
    "petID": "P651601",
    "name": "Mose Wisoky",
    "address": "566 Littel Highway, Barbarafort New Hampshire 51393-7449",
    "receivedAt": "2017-11-01",
    "email": "josiah@okon.co",
    "phoneNumber": "243-936-6612"
  }, {
    "id": 8,
    "key": 8,
    "avatar": "https://robohash.org/sedquiaaut.png?size=300x300&set=set1",
    "petName": "Missy",
    "petID": "P941901",
    "name": "Nils Heller",
    "address": "3584 Ova Landing, Lake Kenyonfort Tennessee 42858",
    "receivedAt": "2017-11-05",
    "email": "jacquelyn@macejkovic.io",
    "phoneNumber": "723-028-9969"
  }, {
    "id": 9,
    "key": 9,
    "avatar": "https://robohash.org/etmagniexercitationem.png?size=300x300&set=set1",
    "petName": "Smudge",
    "petID": "P628258",
    "name": "Mrs. Alfreda Kulas",
    "address": "271 Auer Stravenue, Schmittland Kansas 16580",
    "receivedAt": "2017-11-05",
    "email": "jarrod.hills@sawaynlangosh.info",
    "phoneNumber": "769.391.8125"
  }, {
    "id": 10,
    "key": 10,
    "avatar": "https://robohash.org/adipisciexplicabout.png?size=300x300&set=set1",
    "petName": "Angel",
    "petID": "P375982",
    "name": "Emily Crooks",
    "address": "128 Harvey Cove, Huelsbury Utah 16757",
    "receivedAt": "2017-11-01",
    "email": "sabina@lindmccullough.io",
    "phoneNumber": "766-228-7370"
  }, {
    "id": 11,
    "key": 11,
    "avatar": "https://robohash.org/quiofficiissimilique.png?size=300x300&set=set1",
    "petName": "Tiger",
    "petID": "P504530",
    "name": "Roosevelt Olson",
    "address": "2500 Brook Views, South Nataliaton North Dakota 80783-4583",
    "receivedAt": "2017-11-01",
    "email": "paul_jacobson@carrollleuschke.com",
    "phoneNumber": "942-664-1037"
  }, {
    "id": 12,
    "key": 12,
    "avatar": "https://robohash.org/excepturinonimpedit.png?size=300x300&set=set1",
    "petName": "Lucky",
    "petID": "P167488",
    "name": "Mr. Danika Runte",
    "address": "107 Sylvan Harbor, Cronintown Georgia 57854",
    "receivedAt": "2017-10-30",
    "email": "kian@ullrichokuneva.com",
    "phoneNumber": "900.410.0308"
  }, {
    "id": 13,
    "key": 13,
    "avatar": "https://robohash.org/voluptasnequenecessitatibus.png?size=300x300&set=set1",
    "petName": "Oscar",
    "petID": "P202857",
    "name": "Dion Gerlach",
    "address": "8009 Cormier Lakes, Candaceton Maine 33275",
    "receivedAt": "2017-11-01",
    "email": "garnett_grady@wiegand.io",
    "phoneNumber": "219-442-8380"
  }, {
    "id": 14,
    "key": 14,
    "avatar": "https://robohash.org/quiserroripsa.png?size=300x300&set=set1",
    "petName": "Lucy",
    "petID": "P739427",
    "name": "Kamryn Hilpert",
    "address": "2394 Bridie Park, Emeraldburgh Arizona 98979-1877",
    "receivedAt": "2017-11-03",
    "email": "fredrick_beer@aufderharhermann.info",
    "phoneNumber": "1-818-753-9082"
  }, {
    "id": 15,
    "key": 15,
    "avatar": "https://robohash.org/sintdelenitiet.png?size=300x300&set=set1",
    "petName": "Chloe",
    "petID": "P197313",
    "name": "Brycen Stehr",
    "address": "2618 Rollin Light, New Eldridgefurt Florida 68014-3944",
    "receivedAt": "2017-10-30",
    "email": "clark.buckridge@anderson.org",
    "phoneNumber": "779.254.3307"
  }, {
    "id": 16,
    "key": 16,
    "avatar": "https://robohash.org/illumsitodio.png?size=300x300&set=set1",
    "petName": "Simba",
    "petID": "P485945",
    "name": "Bobby Hackett",
    "address": "412 Shyanne Track, North Hyman Arkansas 89765",
    "receivedAt": "2017-11-06",
    "email": "daryl_hand@walker.name",
    "phoneNumber": "639.366.1996"
  }, {
    "id": 17,
    "key": 17,
    "avatar": "https://robohash.org/possimusvoluptasconsectetur.png?size=300x300&set=set1",
    "petName": "Oliver",
    "petID": "P271372",
    "name": "Miss Harold Kemmer",
    "address": "86202 Amie Walk, South Donnell Nevada 36750-7899",
    "receivedAt": "2017-11-03",
    "email": "margarita_waelchi@bernier.net",
    "phoneNumber": "1-324-052-0491"
  }, {
    "id": 18,
    "key": 18,
    "avatar": "https://robohash.org/nequeautsaepe.png?size=300x300&set=set1",
    "petName": "Missy",
    "petID": "P520797",
    "name": "Mr. Kaleb Champlin",
    "address": "20825 Adan Parks, Braxtonville Virginia 73960-1851",
    "receivedAt": "2017-10-29",
    "email": "dell@jacobs.name",
    "phoneNumber": "526-773-3288"
  }, {
    "id": 19,
    "key": 19,
    "avatar": "https://robohash.org/autquiaquidem.png?size=300x300&set=set1",
    "petName": "Misty",
    "petID": "P515255",
    "name": "Marlene Greenholt",
    "address": "6007 Romaine Via, West Tessborough New Mexico 94690",
    "receivedAt": "2017-11-05",
    "email": "pamela.padberg@konopelski.com",
    "phoneNumber": "1-105-877-6499"
  }, {
    "id": 20,
    "key": 20,
    "avatar": "https://robohash.org/sitquidemipsum.png?size=300x300&set=set1",
    "petName": "Charlie",
    "petID": "P555181",
    "name": "Braden Auer",
    "address": "46874 Retta Village, Lelaside Illinois 11497-9442",
    "receivedAt": "2017-11-04",
    "email": "ellie@schmeler.biz",
    "phoneNumber": "1-918-009-3715"
  }]`
);
const sortOption = {};
class fakeData {
  constructor(size) {
    this.size = size || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }
  dataModel(index) {
    return tableData[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }
  getSortAsc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'ASC';
    return this.datas.sort(this.sort);
  }
  getSortDesc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'DESC';
    return this.datas.sort(this.sort);
  }
  sort(optionA, optionB) {
    const valueA = optionA[sortOption.sortKey].toUpperCase();
    const valueB = optionB[sortOption.sortKey].toUpperCase();
    let sortVal = 0;
    if (valueA > valueB) {
      sortVal = 1;
    }
    if (valueA < valueB) {
      sortVal = -1;
    }
    if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
      return sortVal * (-1);
    }
    return sortVal;
  }
}
export default fakeData;
