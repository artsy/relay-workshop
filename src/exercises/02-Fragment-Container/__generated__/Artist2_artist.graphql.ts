/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist2_artist = {
    readonly auctionRecord: string | null;
    readonly auctionLotsSoldAnnually: string | null;
    readonly " $fragmentRefs": FragmentRefs<"Artist2Heading_artist" | "Artist2Bio_artist">;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "Artist2Heading_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Artist2Bio_artist"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};
(node as any).hash = '2e617b30ed614b9c2c77d00116e0fb77';
export default node;