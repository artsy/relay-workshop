/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist3_artist = {
    readonly " $fragmentRefs": FragmentRefs<"Artist3Heading_artist" | "Artist3Bio_artist" | "Artist3AuctionResults_artist">;
    readonly " $refType": "Artist3_artist";
};
export type Artist3_artist$data = Artist3_artist;
export type Artist3_artist$key = {
    readonly " $data"?: Artist3_artist$data;
    readonly " $fragmentRefs": FragmentRefs<"Artist3_artist">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artist3_artist",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Artist3Heading_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Artist3Bio_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Artist3AuctionResults_artist"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};
(node as any).hash = '1593f22f66ad4cc8f63dd9bb957a2655';
export default node;
