/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist3QueryRendererQueryVariables = {
    artistID: string;
};
export type Artist3QueryRendererQueryResponse = {
    readonly artist: {
        readonly " $fragmentRefs": FragmentRefs<"Artist3_artist">;
    } | null;
};
export type Artist3QueryRendererQuery = {
    readonly response: Artist3QueryRendererQueryResponse;
    readonly variables: Artist3QueryRendererQueryVariables;
};



/*
query Artist3QueryRendererQuery(
  $artistID: ID!
) {
  artist(id: $artistID) {
    ...Artist3_artist
    id
  }
}

fragment Artist3AuctionResults_artist on Artist {
  auctionRecord
  auctionLotsSoldAnnually
}

fragment Artist3Bio_artist on Artist {
  bio
}

fragment Artist3Heading_artist on Artist {
  name
  birthYear
}

fragment Artist3_artist on Artist {
  ...Artist3Heading_artist
  ...Artist3Bio_artist
  ...Artist3AuctionResults_artist
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
    "name": "Artist3QueryRendererQuery",
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
            "name": "Artist3_artist"
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
    "name": "Artist3QueryRendererQuery",
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
    "cacheID": "eda3873440906facae7ce1ddb32a6e10",
    "id": null,
    "metadata": {},
    "name": "Artist3QueryRendererQuery",
    "operationKind": "query",
    "text": "query Artist3QueryRendererQuery(\n  $artistID: ID!\n) {\n  artist(id: $artistID) {\n    ...Artist3_artist\n    id\n  }\n}\n\nfragment Artist3AuctionResults_artist on Artist {\n  auctionRecord\n  auctionLotsSoldAnnually\n}\n\nfragment Artist3Bio_artist on Artist {\n  bio\n}\n\nfragment Artist3Heading_artist on Artist {\n  name\n  birthYear\n}\n\nfragment Artist3_artist on Artist {\n  ...Artist3Heading_artist\n  ...Artist3Bio_artist\n  ...Artist3AuctionResults_artist\n}\n"
  }
};
})();
(node as any).hash = '983747d6f5d7cd08cd404d294682e279';
export default node;
