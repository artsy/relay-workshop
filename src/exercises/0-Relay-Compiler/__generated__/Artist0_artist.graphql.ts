/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist0_artist = {
    readonly name: string;
    readonly " $refType": "Artist0_artist";
};
export type Artist0_artist$data = Artist0_artist;
export type Artist0_artist$key = {
    readonly " $data"?: Artist0_artist$data;
    readonly " $fragmentRefs": FragmentRefs<"Artist0_artist">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artist0_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};
(node as any).hash = 'e94d91f6f3dc4312009d1599da220386';
export default node;
