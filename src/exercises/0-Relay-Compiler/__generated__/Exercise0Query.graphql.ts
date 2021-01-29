/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Exercise0QueryVariables = {};
export type Exercise0QueryResponse = {
    readonly artist: {
        readonly " $fragmentRefs": FragmentRefs<"Artist0_artist">;
    } | null;
};
export type Exercise0Query = {
    readonly response: Exercise0QueryResponse;
    readonly variables: Exercise0QueryVariables;
};



/*
query Exercise0Query {
  artist(id: 1) {
    ...Artist0_artist
    id
  }
}

fragment Artist0_artist on Artist {
  name
  birthYear
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": 1
  }
];
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Artist0_artist"
          }
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "birthYear",
            "storageKey": null
          },
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
    "cacheID": "8512f08098c079e805d684b590d03422",
    "id": null,
    "metadata": {},
    "name": "Exercise0Query",
    "operationKind": "query",
    "text": "query Exercise0Query {\n  artist(id: 1) {\n    ...Artist0_artist\n    id\n  }\n}\n\nfragment Artist0_artist on Artist {\n  name\n  birthYear\n}\n"
  }
};
})();
(node as any).hash = '72437e871096c0cd16a1092ca021b512';
export default node;
