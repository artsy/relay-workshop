/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist2Bio_artist = {
    readonly bio: string | null;
    readonly " $refType": "Artist2Bio_artist";
};
export type Artist2Bio_artist$data = Artist2Bio_artist;
export type Artist2Bio_artist$key = {
    readonly " $data"?: Artist2Bio_artist$data;
    readonly " $fragmentRefs": FragmentRefs<"Artist2Bio_artist">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artist2Bio_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};
(node as any).hash = 'd47e623c37dcb913c1f5a446acf93900';
export default node;
