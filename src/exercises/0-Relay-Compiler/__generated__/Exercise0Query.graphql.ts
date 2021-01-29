/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Exercise0QueryVariables = {};
export type Exercise0QueryResponse = {
    readonly artist: {
        readonly name: string;
    } | null;
};
export type Exercise0Query = {
    readonly response: Exercise0QueryResponse;
    readonly variables: Exercise0QueryVariables;
};



/*
query Exercise0Query {
  artist(id: 1) {
    name
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": 1
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Exercise0Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "artist(id:1)"
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Exercise0Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "artist(id:1)"
      }
    ]
  },
  "params": {
    "cacheID": "0be1c46bb7bddbca9d1199bc2a425fca",
    "id": null,
    "metadata": {},
    "name": "Exercise0Query",
    "operationKind": "query",
    "text": "query Exercise0Query {\n  artist(id: 1) {\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bd79698b9b33fd98b6fdd219a1085e09';
export default node;
