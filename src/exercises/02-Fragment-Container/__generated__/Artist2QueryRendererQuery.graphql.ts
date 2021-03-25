/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist2QueryRendererQueryVariables = {
    artistID: string;
};
export type Artist2QueryRendererQueryResponse = {
    readonly artist: {
        readonly " $fragmentRefs": FragmentRefs<"Artist2_artist">;
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
    ...Artist2_artist
    id
  }
}

fragment Artist2Bio_artist on Artist {
  bio
}

fragment Artist2Heading_artist on Artist {
  name
  birthYear
}

fragment Artist2_artist on Artist {
  ...Artist2Heading_artist
  ...Artist2Bio_artist
  auctionRecord
  auctionLotsSoldAnnually
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Artist2_artist"
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
            "name": "bio",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "auctionRecord",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "auctionLotsSoldAnnually",
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
    "cacheID": "dee597e15a1d146bd988f20dcabab4f8",
    "id": null,
    "metadata": {},
    "name": "Artist2QueryRendererQuery",
    "operationKind": "query",
    "text": "query Artist2QueryRendererQuery(\n  $artistID: ID!\n) {\n  artist(id: $artistID) {\n    ...Artist2_artist\n    id\n  }\n}\n\nfragment Artist2Bio_artist on Artist {\n  bio\n}\n\nfragment Artist2Heading_artist on Artist {\n  name\n  birthYear\n}\n\nfragment Artist2_artist on Artist {\n  ...Artist2Heading_artist\n  ...Artist2Bio_artist\n  auctionRecord\n  auctionLotsSoldAnnually\n}\n"
  }
};
})();
(node as any).hash = '06ee3a84a8f95567a3f67513ee272742';
export default node;
