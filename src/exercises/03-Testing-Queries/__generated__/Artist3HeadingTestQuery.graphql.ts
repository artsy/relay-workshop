/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist3HeadingTestQueryVariables = {
    artistID: string;
};
export type Artist3HeadingTestQueryResponse = {
    readonly artist: {
        readonly " $fragmentRefs": FragmentRefs<"Artist3Heading_artist">;
    } | null;
};
export type Artist3HeadingTestQuery = {
    readonly response: Artist3HeadingTestQueryResponse;
    readonly variables: Artist3HeadingTestQueryVariables;
};



/*
query Artist3HeadingTestQuery(
  $artistID: ID!
) {
  artist(id: $artistID) {
    ...Artist3Heading_artist
    id
  }
}

fragment Artist3Heading_artist on Artist {
  name
  birthYear
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Artist3HeadingTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "kind": "LinkedField",
        "name": "artist",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Artist3Heading_artist"
          }
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
    "name": "Artist3HeadingTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f41fbdcc1d45ff6943c852e4db5d95ca",
    "id": null,
    "metadata": {},
    "name": "Artist3HeadingTestQuery",
    "operationKind": "query",
    "text": "query Artist3HeadingTestQuery(\n  $artistID: ID!\n) {\n  artist(id: $artistID) {\n    ...Artist3Heading_artist\n    id\n  }\n}\n\nfragment Artist3Heading_artist on Artist {\n  name\n  birthYear\n}\n"
  }
};
})();
(node as any).hash = '317cb738d1b6f5f8a55a1b339844c5dc';
export default node;
