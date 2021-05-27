/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist3Bio_artist = {
    readonly bio: string | null;
    readonly " $refType": "Artist3Bio_artist";
};
export type Artist3Bio_artist$data = Artist3Bio_artist;
export type Artist3Bio_artist$key = {
    readonly " $data"?: Artist3Bio_artist$data;
    readonly " $fragmentRefs": FragmentRefs<"Artist3Bio_artist">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artist3Bio_artist",
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
(node as any).hash = 'bd94fe66528447da56472765ada71513';
export default node;
