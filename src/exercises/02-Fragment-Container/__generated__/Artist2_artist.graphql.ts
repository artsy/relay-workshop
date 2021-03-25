/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist2_artist = {
    readonly " $fragmentRefs": FragmentRefs<"Artist2Heading_artist" | "Artist2Bio_artist" | "Artist2AuctionResults_artist">;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "Artist2Heading_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Artist2Bio_artist"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Artist2AuctionResults_artist"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};
(node as any).hash = '4ad02f699ba419d387e45a11a16b2e64';
export default node;
