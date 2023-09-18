"use strict";

import { getAllAlbums, getAllTracks } from "./CRUD/get.js";
import { SubmitButtonInitialized, addArtistButtonInitialized, albumSelectInitialized, artistSelectInitialized, cancelButtonInitialized, createAlbumButtonInitialized, createArtistButtonInitialized, createButtonInitialized, createTrackButtonInitialized, deleteTrackButtonInitialized, searchButtonInitialized, trackSelectInitialized } from "./modules/eventlisteners.js";

window.addEventListener('load', start);

export const endpoint = 'http://localhost:3000'

export async function start() {
    createButtonInitialized();
    cancelButtonInitialized();
    artistSelectInitialized();
    albumSelectInitialized();
    trackSelectInitialized();
    createArtistButtonInitialized();
    createTrackButtonInitialized();
    createAlbumButtonInitialized();
    getAllTracks();
    getAllAlbums();
    deleteTrackButtonInitialized();
    SubmitButtonInitialized();
    searchButtonInitialized();
    addArtistButtonInitialized();
}

