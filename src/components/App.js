import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import JsonVisualizer from './jsonVisualizer';

const mixed = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "index": 0,
      "isActive": false,
      "age": 21,
      "eyeColor": "blue",
      "name": "Bentley Clayton",
      "gender": "male",
      "registered": "2018-05-02T05:35:41 +04:00"
    },
    {
      "index": 1,
      "isActive": false,
      "age": 23,
      "eyeColor": "blue",
      "name": "Lela Ramos",
      "gender": "female",
      "registered": "2014-02-24T03:13:50 +05:00"
    },
    {
      "index": 2,
      "isActive": true,
      "age": 38,
      "eyeColor": "green",
      "name": "Milagros Becker",
      "gender": "female",
      "registered": "2016-10-22T12:18:50 +04:00"
    },
    {
      "index": 3,
      "isActive": false,
      "age": 30,
      "eyeColor": "brown",
      "name": "Mccoy Barrera",
      "gender": "male",
      "registered": "2016-12-03T03:44:57 +05:00"
    },
    {
      "index": 4,
      "isActive": false,
      "age": 35,
      "eyeColor": "brown",
      "name": "Morton Bennett",
      "gender": "male",
      "registered": "2015-10-06T09:48:03 +04:00"
    },
    {
      "index": 5,
      "isActive": true,
      "age": 20,
      "eyeColor": "blue",
      "name": "Acosta Bird",
      "gender": "male",
      "registered": "2019-02-11T09:59:58 +05:00"
    },
    {
      "index": 6,
      "isActive": false,
      "age": 35,
      "eyeColor": "blue",
      "name": "Mcleod Keith",
      "gender": "male",
      "registered": "2014-04-24T07:50:11 +04:00"
    },
    {
      "index": 7,
      "isActive": false,
      "age": 27,
      "eyeColor": "brown",
      "name": "Magdalena Burgess",
      "gender": "female",
      "registered": "2015-03-19T09:28:55 +04:00"
    },
    {
      "index": 8,
      "isActive": false,
      "age": 37,
      "eyeColor": "blue",
      "name": "Cline Castaneda",
      "gender": "male",
      "registered": "2016-02-29T09:49:37 +05:00"
    },
    {
      "index": 9,
      "isActive": false,
      "age": 39,
      "eyeColor": "green",
      "name": "Garcia Baker",
      "gender": "male",
      "registered": "2018-05-26T02:54:22 +04:00"
    },
    {
      "index": 10,
      "isActive": true,
      "age": 40,
      "eyeColor": "blue",
      "name": "Lenora Keller",
      "gender": "female",
      "registered": "2017-12-19T05:12:17 +05:00"
    },
    {
      "index": 11,
      "isActive": false,
      "age": 33,
      "eyeColor": "green",
      "name": "Kathryn Donovan",
      "gender": "female",
      "registered": "2014-03-21T12:33:36 +04:00"
    },
    {
      "index": 12,
      "isActive": true,
      "age": 40,
      "eyeColor": "blue",
      "name": "Opal Hinton",
      "gender": "female",
      "registered": "2014-05-03T02:14:25 +04:00"
    },
    {
      "index": 13,
      "isActive": false,
      "age": 25,
      "eyeColor": "green",
      "name": "Mayer Gray",
      "gender": "male",
      "registered": "2016-04-01T05:52:21 +04:00"
    },
    {
      "index": 14,
      "isActive": true,
      "age": 22,
      "eyeColor": "green",
      "name": "Josefina Quinn",
      "gender": "female",
      "registered": "2015-02-07T12:04:14 +05:00"
    }
  ]
};
const array = [
    {
      "index": 0,
      "isActive": false,
      "age": 21,
      "eyeColor": "blue",
      "name": "Bentley Clayton",
      "gender": "male",
      "registered": "2018-05-02T05:35:41 +04:00"
    },
    {
      "index": 1,
      "isActive": false,
      "age": 23,
      "eyeColor": "blue",
      "name": "Lela Ramos",
      "gender": "female",
      "registered": "2014-02-24T03:13:50 +05:00"
    },
    {
      "index": 2,
      "isActive": true,
      "age": 38,
      "eyeColor": "green",
      "name": "Milagros Becker",
      "gender": "female",
      "registered": "2016-10-22T12:18:50 +04:00"
    },
    {
      "index": 3,
      "isActive": false,
      "age": 30,
      "eyeColor": "brown",
      "name": "Mccoy Barrera",
      "gender": "male",
      "registered": "2016-12-03T03:44:57 +05:00"
    },
    {
      "index": 4,
      "isActive": false,
      "age": 35,
      "eyeColor": "brown",
      "name": "Morton Bennett",
      "gender": "male",
      "registered": "2015-10-06T09:48:03 +04:00"
    },
    {
      "index": 5,
      "isActive": true,
      "age": 20,
      "eyeColor": "blue",
      "name": "Acosta Bird",
      "gender": "male",
      "registered": "2019-02-11T09:59:58 +05:00"
    },
    {
      "index": 6,
      "isActive": false,
      "age": 35,
      "eyeColor": "blue",
      "name": "Mcleod Keith",
      "gender": "male",
      "registered": "2014-04-24T07:50:11 +04:00"
    },
    {
      "index": 7,
      "isActive": false,
      "age": 27,
      "eyeColor": "brown",
      "name": "Magdalena Burgess",
      "gender": "female",
      "registered": "2015-03-19T09:28:55 +04:00"
    },
    {
      "index": 8,
      "isActive": false,
      "age": 37,
      "eyeColor": "blue",
      "name": "Cline Castaneda",
      "gender": "male",
      "registered": "2016-02-29T09:49:37 +05:00"
    },
    {
      "index": 9,
      "isActive": false,
      "age": 39,
      "eyeColor": "green",
      "name": "Garcia Baker",
      "gender": "male",
      "registered": "2018-05-26T02:54:22 +04:00"
    },
    {
      "index": 10,
      "isActive": true,
      "age": 40,
      "eyeColor": "blue",
      "name": "Lenora Keller",
      "gender": "female",
      "registered": "2017-12-19T05:12:17 +05:00"
    },
    {
      "index": 11,
      "isActive": false,
      "age": 33,
      "eyeColor": "green",
      "name": "Kathryn Donovan",
      "gender": "female",
      "registered": "2014-03-21T12:33:36 +04:00"
    },
    {
      "index": 12,
      "isActive": true,
      "age": 40,
      "eyeColor": "blue",
      "name": "Opal Hinton",
      "gender": "female",
      "registered": "2014-05-03T02:14:25 +04:00"
    },
    {
      "index": 13,
      "isActive": false,
      "age": 25,
      "eyeColor": "green",
      "name": "Mayer Gray",
      "gender": "male",
      "registered": "2016-04-01T05:52:21 +04:00"
    },
    {
      "index": 14,
      "isActive": true,
      "age": 22,
      "eyeColor": "green",
      "name": "Josefina Quinn",
      "gender": "female",
      "registered": "2015-02-07T12:04:14 +05:00"
    }
  ];
const object = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
}
const array2 = [true, false, null, undefined, 1, 2, 3, {a:1}, {a:2}];
const wixDataResult = {
  "items": [{
    "_id": "be827844-5911-4f44-a82b-f826a8000076",
    "_owner": "c569b3d3-4d9b-4196-83ca-bb69f6d5684d",
    "_createdDate": "2018-01-27T14:37:10.514Z",
    "_updatedDate": "2018-01-27T14:40:07.688Z",
    "title": "20 mille lieues sous l'hiver",
    "newField": "image://v1/c569b3_604b8ca2eaa9421aacef8a006ed47814~mv2.png/187_190/turquoise.png",
    "link-test-title": "/test/20-mille-lieues-sous-l'hiver"
  }, {
    "_id": "753ddc84-3705-4ca6-8c5d-b5a6ad0a6732",
    "_owner": "c569b3d3-4d9b-4196-83ca-bb69f6d5684d",
    "_createdDate": "2017-12-30T20:37:12.983Z",
    "_updatedDate": "2017-12-30T20:37:18.450Z",
    "title": "araergae",
    "newField": "image://v1/c569b3_29217c63dcb2410996cdbb17df31aaeb~mv2.png/488_756/coffee-3b.png",
    "link-test-title": "/test/araergae"
  }, {
    "_id": "8789c3fc-97c2-428f-b223-4d2e087c1fe5",
    "_owner": "c569b3d3-4d9b-4196-83ca-bb69f6d5684d",
    "_createdDate": "2017-12-30T20:37:05.529Z",
    "_updatedDate": "2017-12-30T20:37:11.672Z",
    "title": "agfdfadger",
    "newField": "image://v1/c569b3_8d04bd4d38854ebd9a7722c82af80278~mv2.png/488_756/coffee-2b.png",
    "link-test-title": "/test/agfdfadger"
  }, {
    "_id": "8b48bd48-2ca4-42ff-86ad-1e1f5b6dbd96",
    "_owner": "c569b3d3-4d9b-4196-83ca-bb69f6d5684d",
    "_createdDate": "2017-12-04T12:58:27.092Z",
    "_updatedDate": "2017-12-30T20:37:00.476Z",
    "title": "asdd",
    "newField": "image://v1/c569b3_b3458b82a3fa47058b15dda13b8e07b0~mv2_d_1600_1345_s_2.jpg/1600_1345/car-toys-bg.jpg",
    "link-test-title": "/test/asdd"
  }, {
    "_id": "e7bdc539-3400-4519-841e-eadcf74cf839",
    "_owner": "c569b3d3-4d9b-4196-83ca-bb69f6d5684d",
    "_createdDate": "2017-12-04T12:58:24.708Z",
    "_updatedDate": "2017-12-30T20:37:03.307Z",
    "title": "qwdqwd",
    "newField": "image://v1/c569b3_d49a2ff8830f43ddb769f165f54a5cd5~mv2.jpg/718_559/0921-brad-pitt-getty-5.jpg",
    "link-test-title": "/test/qwdqwd"
  }],
  "length": 5,
  "totalCount": 5,
  "query": {
    "invalidArguments": [],
    "filterTree": {},
    "provider": {},
    "collectionName": "test",
    "limitNumber": 50,
    "skipNumber": 0,
    "included": []
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Corvid Console Sandbox</h1>
        </header>
        <div className="wix-code-console-message">
          <div className="message-and-icon">
            <div className="message">
              <div className="message-part">
                <div className="example-label">Mixed object</div>
                <JsonVisualizer value={mixed}></JsonVisualizer>
                <div className="example-label">Array</div>
                <JsonVisualizer value={array}></JsonVisualizer>
                <div className="example-label">Object</div>
                <JsonVisualizer value={object}></JsonVisualizer>
                <div className="example-label">A String</div>
                <JsonVisualizer value={"string"}></JsonVisualizer>
                <div className="example-label">Mixed Array</div>
                <JsonVisualizer value={array2}></JsonVisualizer>
                <div className="example-label">Wix Data Result</div>
                <JsonVisualizer value={wixDataResult}></JsonVisualizer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
