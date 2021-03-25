/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Artist2AuctionResultsQueryRendererQueryVariables = {};
export type Artist2AuctionResultsQueryRendererQueryResponse = {
    readonly artist: {
        readonly name: string;
        readonly birthYear: number;
        readonly auctionRecord: string | null;
        readonly auctionLotsSoldAnnually: string | null;
    } | null;
};
export type Artist2AuctionResultsQueryRendererQuery = {
    readonly response: Artist2AuctionResultsQueryRendererQueryResponse;
    readonly variables: Artist2AuctionResultsQueryRendererQueryVariables;
};



/*
query Artist2AuctionResultsQueryRendererQuery {
  artist(id: 1) {
    name
    birthYear
    auctionRecord
    auctionLotsSoldAnnually
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
  "name": "auctionRecord",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "auctionLotsSoldAnnually",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Artist2AuctionResultsQueryRendererQuery",
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
          (v4/*: any*/)
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
    "name": "Artist2AuctionResultsQueryRendererQuery",
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
          (v4/*: any*/),
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
    "cacheID": "6796b83ed7134c934561fb99a7005a87",
    "id": null,
    "metadata": {},
    "name": "Artist2AuctionResultsQueryRendererQuery",
    "operationKind": "query",
    "text": "query Artist2AuctionResultsQueryRendererQuery {\n  artist(id: 1) {\n    name\n    birthYear\n    auctionRecord\n    auctionLotsSoldAnnually\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '8ea2838ad1fd5a0ce1f17c8ddab82653';
export default node;
