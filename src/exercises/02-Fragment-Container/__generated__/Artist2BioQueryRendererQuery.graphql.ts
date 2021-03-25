/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Artist2BioQueryRendererQueryVariables = {};
export type Artist2BioQueryRendererQueryResponse = {
    readonly artist: {
        readonly name: string;
        readonly birthYear: number;
        readonly bio: string | null;
    } | null;
};
export type Artist2BioQueryRendererQuery = {
    readonly response: Artist2BioQueryRendererQueryResponse;
    readonly variables: Artist2BioQueryRendererQueryVariables;
};



/*
query Artist2BioQueryRendererQuery {
  artist(id: 1) {
    name
    birthYear
    bio
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "birthYear",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Artist2BioQueryRendererQuery",
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
          (v2/*: any*/),
          (v3/*: any*/)
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
    "name": "Artist2BioQueryRendererQuery",
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
        "storageKey": "artist(id:1)"
      }
    ]
  },
  "params": {
    "cacheID": "b09f7a52c0a597e90f20b0594a312f42",
    "id": null,
    "metadata": {},
    "name": "Artist2BioQueryRendererQuery",
    "operationKind": "query",
    "text": "query Artist2BioQueryRendererQuery {\n  artist(id: 1) {\n    name\n    birthYear\n    bio\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b17babb91f44098f2f6ad825c650413c';
export default node;
