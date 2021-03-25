/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Artist2QueryRendererQueryVariables = {
    artistID: string;
};
export type Artist2QueryRendererQueryResponse = {
    readonly artist: {
        readonly name: string;
        readonly birthYear: number;
        readonly bio: string | null;
        readonly auctionRecord: string | null;
        readonly auctionLotsSoldAnnually: string | null;
    } | null;
};
export type Artist2QueryRendererQuery = {
    readonly response: Artist2QueryRendererQueryResponse;
    readonly variables: Artist2QueryRendererQueryVariables;
};



/*
query Artist2QueryRendererQuery(
  $artistID: ID!
) {
  artist(id: $artistID) {
    name
    birthYear
    bio
    auctionRecord
    auctionLotsSoldAnnually
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
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "auctionRecord",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "auctionLotsSoldAnnually",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Artist2QueryRendererQuery",
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
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
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
    "name": "Artist2QueryRendererQuery",
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
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
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
    "cacheID": "f4e36768fcb10e7e7714c05624dc3701",
    "id": null,
    "metadata": {},
    "name": "Artist2QueryRendererQuery",
    "operationKind": "query",
    "text": "query Artist2QueryRendererQuery(\n  $artistID: ID!\n) {\n  artist(id: $artistID) {\n    name\n    birthYear\n    bio\n    auctionRecord\n    auctionLotsSoldAnnually\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '8bcaedc542546444d0687c3e840a86d3';
export default node;
