/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Artist1QueryRendererQueryVariables = {
    artistID: string;
};
export type Artist1QueryRendererQueryResponse = {
    readonly artist: {
        readonly name: string;
        readonly birthYear: number;
    } | null;
};
export type Artist1QueryRendererQuery = {
    readonly response: Artist1QueryRendererQueryResponse;
    readonly variables: Artist1QueryRendererQueryVariables;
};



/*
query Artist1QueryRendererQuery(
  $artistID: ID!
) {
  artist(id: $artistID) {
    name
    birthYear
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artistID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "birthYear",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Artist1QueryRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Artist1QueryRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d8f027294c79e7bb276c924588443801",
    "id": null,
    "metadata": {},
    "name": "Artist1QueryRendererQuery",
    "operationKind": "query",
    "text": "query Artist1QueryRendererQuery(\n  $artistID: ID!\n) {\n  artist(id: $artistID) {\n    name\n    birthYear\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '7eee7f5de96e74ae2fefb1b41ecb3af2';
export default node;
