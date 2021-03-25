/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist2Heading_artist = {
    readonly name: string;
    readonly birthYear: number;
    readonly " $refType": "Artist2Heading_artist";
};
export type Artist2Heading_artist$data = Artist2Heading_artist;
export type Artist2Heading_artist$key = {
    readonly " $data"?: Artist2Heading_artist$data;
    readonly " $fragmentRefs": FragmentRefs<"Artist2Heading_artist">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artist2Heading_artist",
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
(node as any).hash = '6e21f238a3b43e0b5e99fcd70e494891';
export default node;
