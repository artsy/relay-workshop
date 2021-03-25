/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist2_artist = {
    readonly name: string;
    readonly birthYear: number;
    readonly bio: string | null;
    readonly auctionRecord: string | null;
    readonly auctionLotsSoldAnnually: string | null;
    readonly " $refType": "Artist2_artist";
};
export type Artist2_artist$data = Artist2_artist;
export type Artist2_artist$key = {
    readonly " $data"?: Artist2_artist$data;
    readonly " $fragmentRefs": FragmentRefs<"Artist2_artist">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artist2_artist",
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
    }
  ],
  "type": "Artist",
  "abstractKey": null
};
(node as any).hash = 'eedc4048db7c41cd38b4500cd5ff9e1c';
export default node;
