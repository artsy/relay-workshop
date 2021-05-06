/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist3Heading_artist = {
    readonly name: string;
    readonly birthYear: number;
    readonly " $refType": "Artist3Heading_artist";
};
export type Artist3Heading_artist$data = Artist3Heading_artist;
export type Artist3Heading_artist$key = {
    readonly " $data"?: Artist3Heading_artist$data;
    readonly " $fragmentRefs": FragmentRefs<"Artist3Heading_artist">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artist3Heading_artist",
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
    }
  ],
  "type": "Artist",
  "abstractKey": null
};
(node as any).hash = '7e9bb9dc253e3ad33146faf11def7a02';
export default node;
