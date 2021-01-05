import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getLast<T>( nb:number ) {
    return this.getAll().slice(0,nb);
  }

  find<T> (id:string) {
    
   let resultat = this.getAll().find( (item) =>{ 
      return item._id === id
    } );
    return resultat;
  }

  getAll<T>(){
    return [
      {
        "_id": "5fd22bcf41543a44d7009cb8",
        "index": 0,
        "guid": "743370fe-1266-46a5-8a9a-766fce877c7a",
        "isActive": true,
        "balance": "$2,816.09",
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "eyeColor": "brown",
        "name": "Claudia Thornton",
        "gender": "female",
        "company": "AQUASURE",
        "email": "claudiathornton@aquasure.com",
        "phone": "+1 (913) 551-3130",
        "address": "437 Hampton Place, Elrama, Iowa, 1638",
        "about": "Tempor esse amet dolore laboris excepteur occaecat ex ea aute cupidatat exercitation occaecat est. Mollit magna non dolore aute laboris nulla id nisi adipisicing cupidatat. Magna commodo fugiat et laboris irure duis. Amet excepteur officia pariatur consequat fugiat ad ullamco sint.\r\n",
        "registered": "2014-03-09T02:40:52 -01:00",
        "latitude": -10.352286,
        "longitude": -141.831129,
        "tags": [
          "deserunt",
          "ea",
          "irure",
          "tempor",
          "commodo",
          "tempor",
          "aute"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Mercado Austin"
          },
          {
            "id": 1,
            "name": "Elvira Stevenson"
          },
          {
            "id": 2,
            "name": "Hart Meyers"
          }
        ],
        "greeting": "Hello, Claudia Thornton! You have 10 unread messages.",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5fd22bcf8c530f44fb5c5b34",
        "index": 1,
        "guid": "fa4d047f-d44a-4dc8-93e5-b984b0da5113",
        "isActive": false,
        "balance": "$1,018.02",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "eyeColor": "green",
        "name": "Ferguson Francis",
        "gender": "male",
        "company": "LIMOZEN",
        "email": "fergusonfrancis@limozen.com",
        "phone": "+1 (943) 468-3318",
        "address": "713 Murdock Court, Harrison, Hawaii, 5336",
        "about": "Fugiat aute anim in dolore do. Sunt ea fugiat irure veniam incididunt adipisicing ad. Quis sint exercitation amet ut ex elit elit excepteur laboris mollit deserunt in laborum. Et non sit irure velit elit esse.\r\n",
        "registered": "2017-07-22T03:46:28 -02:00",
        "latitude": -61.371388,
        "longitude": 147.969685,
        "tags": [
          "elit",
          "ut",
          "occaecat",
          "mollit",
          "elit",
          "sunt",
          "tempor"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Hays Marshall"
          },
          {
            "id": 1,
            "name": "Patterson Montgomery"
          },
          {
            "id": 2,
            "name": "Graves Hernandez"
          }
        ],
        "greeting": "Hello, Ferguson Francis! You have 4 unread messages.",
        "favoriteFruit": "banana"
      },
      {
        "_id": "5fd22bcf06d382baf33c449e",
        "index": 2,
        "guid": "55d56203-540e-4fcb-acfb-0d7cb9d6f0df",
        "isActive": false,
        "balance": "$1,417.64",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "green",
        "name": "Opal Lowery",
        "gender": "female",
        "company": "FUTURIS",
        "email": "opallowery@futuris.com",
        "phone": "+1 (801) 406-3424",
        "address": "425 Bowne Street, Siglerville, Utah, 4426",
        "about": "Deserunt amet elit dolor voluptate deserunt labore adipisicing. Eiusmod sit ut enim quis ipsum in labore veniam non. Reprehenderit pariatur duis ad cillum exercitation adipisicing ipsum. Et quis non occaecat deserunt do adipisicing labore eu amet cupidatat sunt ut aliquip. Ipsum qui id incididunt do culpa reprehenderit. Nulla nostrud id culpa magna nisi culpa in est duis.\r\n",
        "registered": "2018-12-25T10:14:03 -01:00",
        "latitude": -33.955097,
        "longitude": -93.867938,
        "tags": [
          "laborum",
          "tempor",
          "dolore",
          "do",
          "ea",
          "enim",
          "est"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Holloway Tyler"
          },
          {
            "id": 1,
            "name": "Murphy Chase"
          },
          {
            "id": 2,
            "name": "Perkins Gilliam"
          }
        ],
        "greeting": "Hello, Opal Lowery! You have 3 unread messages.",
        "favoriteFruit": "banana"
      },
      {
        "_id": "5fd22bcff18e1e0a48c53a3f",
        "index": 3,
        "guid": "8a20a2f6-f685-46de-93eb-076f006d642c",
        "isActive": true,
        "balance": "$2,534.43",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "eyeColor": "blue",
        "name": "Mcgee Mcdaniel",
        "gender": "male",
        "company": "MATRIXITY",
        "email": "mcgeemcdaniel@matrixity.com",
        "phone": "+1 (994) 490-2467",
        "address": "693 Crosby Avenue, Smock, California, 5780",
        "about": "Nulla sit eiusmod sint deserunt aliquip veniam occaecat dolor ex. Ea velit nulla ut in officia velit magna reprehenderit deserunt dolore irure. Sit Lorem qui adipisicing consequat aliquip anim mollit eiusmod. Consectetur elit proident laborum non officia aliquip laborum ullamco adipisicing aliqua Lorem elit. Enim pariatur pariatur irure proident voluptate deserunt est magna dolore. Veniam aliqua exercitation dolore tempor. Amet labore magna Lorem in qui nisi.\r\n",
        "registered": "2020-02-24T06:23:30 -01:00",
        "latitude": -56.513276,
        "longitude": 113.760907,
        "tags": [
          "dolore",
          "non",
          "proident",
          "mollit",
          "laboris",
          "aliquip",
          "incididunt"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Liliana Hutchinson"
          },
          {
            "id": 1,
            "name": "Minnie Lopez"
          },
          {
            "id": 2,
            "name": "Erica Hester"
          }
        ],
        "greeting": "Hello, Mcgee Mcdaniel! You have 1 unread messages.",
        "favoriteFruit": "banana"
      },
      {
        "_id": "5fd22bcfaa36abe31aa6611c",
        "index": 4,
        "guid": "f3fc0025-199c-44d2-a6d9-c18716f0c83a",
        "isActive": false,
        "balance": "$2,627.50",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "eyeColor": "green",
        "name": "Aline Walls",
        "gender": "female",
        "company": "QUARMONY",
        "email": "alinewalls@quarmony.com",
        "phone": "+1 (814) 493-2396",
        "address": "857 Denton Place, Leming, Missouri, 3345",
        "about": "In elit ea sit irure fugiat. Laboris cillum aliqua enim dolor fugiat exercitation incididunt id laborum elit officia ut. Nostrud adipisicing amet incididunt minim ad aliqua officia mollit aute. Commodo commodo labore elit nisi. Exercitation commodo deserunt exercitation qui id.\r\n",
        "registered": "2016-10-26T07:23:39 -02:00",
        "latitude": -47.219562,
        "longitude": 151.948454,
        "tags": [
          "sit",
          "est",
          "laboris",
          "dolor",
          "adipisicing",
          "irure",
          "ex"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Corine Lawson"
          },
          {
            "id": 1,
            "name": "Snyder Roberts"
          },
          {
            "id": 2,
            "name": "Noble Daniel"
          }
        ],
        "greeting": "Hello, Aline Walls! You have 2 unread messages.",
        "favoriteFruit": "apple"
      }
    ]
  }
  constructor() { }
}
