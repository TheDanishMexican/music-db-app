"use strict";

import { getAllAlbums, getAllArtists, getAllTracks } from "./CRUD/get.js";
import { SubmitButtonInitialized, addArtistButtonInitialized, albumSelectInitialized, artistSelectInitialized, cancelButtonInitialized, createAlbumButtonInitialized, createArtistButtonInitialized, createButtonInitialized, createTrackButtonInitialized, deleteTrackButtonInitialized, searchButtonInitialized, trackSelectInitialized } from "./modules/eventlisteners.js";

window.addEventListener('load', start);

export const endpoint = 'http://localhost:3000'

// https://test-for-database-project.azurewebsites.net

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
    getAllArtists();
    deleteTrackButtonInitialized();
    SubmitButtonInitialized();
    searchButtonInitialized();
    addArtistButtonInitialized();
}

