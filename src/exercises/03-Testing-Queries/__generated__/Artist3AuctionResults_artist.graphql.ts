/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist3AuctionResults_artist = {
    readonly auctionRecord: string | null;
    readonly auctionLotsSoldAnnually: string | null;
    readonly " $refType": "Artist3AuctionResults_artist";
};
export type Artist3AuctionResults_artist$data = Artist3AuctionResults_artist;
export type Artist3AuctionResults_artist$key = {
    readonly " $data"?: Artist3AuctionResults_artist$data;
    readonly " $fragmentRefs": FragmentRefs<"Artist3AuctionResults_artist">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artist3AuctionResults_artist",
  "selections": [
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
(node as any).hash = 'db7bf5be734301d923f7a2b31c26ef1d';
export default node;
