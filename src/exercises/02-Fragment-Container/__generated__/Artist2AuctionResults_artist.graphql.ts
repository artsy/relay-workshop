/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist2AuctionResults_artist = {
    readonly auctionRecord: string | null;
    readonly auctionLotsSoldAnnually: string | null;
    readonly " $refType": "Artist2AuctionResults_artist";
};
export type Artist2AuctionResults_artist$data = Artist2AuctionResults_artist;
export type Artist2AuctionResults_artist$key = {
    readonly " $data"?: Artist2AuctionResults_artist$data;
    readonly " $fragmentRefs": FragmentRefs<"Artist2AuctionResults_artist">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artist2AuctionResults_artist",
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
(node as any).hash = 'e01351d58e06a614b333a329acff5738';
export default node;
