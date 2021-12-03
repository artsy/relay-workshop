/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist3HeadingTestQueryVariables = {};
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
query Artist3HeadingTestQuery {
  artist(id: "pablo-picasso") {
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
    "kind": "Literal",
    "name": "id",
    "value": "pablo-picasso"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Artist3HeadingTestQuery",
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
            "name": "Artist3Heading_artist"
          }
        ],
        "storageKey": "artist(id:\"pablo-picasso\")"
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Artist3HeadingTestQuery",
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
        "storageKey": "artist(id:\"pablo-picasso\")"
      }
    ]
  },
  "params": {
    "cacheID": "9097d8f32b0e5105fd0af6a1266cced5",
    "id": null,
    "metadata": {},
    "name": "Artist3HeadingTestQuery",
    "operationKind": "query",
    "text": "query Artist3HeadingTestQuery {\n  artist(id: \"pablo-picasso\") {\n    ...Artist3Heading_artist\n    id\n  }\n}\n\nfragment Artist3Heading_artist on Artist {\n  name\n  birthYear\n}\n"
  }
};
})();
(node as any).hash = '2e8aa6d6eb9b05909a0c361a4203fe95';
export default node;
