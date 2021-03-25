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
    "cacheID": "e68894ed14814673843c4260707845d3",
    "id": null,
    "metadata": {},
    "name": "Artist2QueryRendererQuery",
    "operationKind": "query",
    "text": "query Artist2QueryRendererQuery(\n  $artistID: ID!\n) {\n  artist(id: $artistID) {\n    name\n    birthYear\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9577e3f8b30158c20f1ef3fd50fe7f27';
export default node;
