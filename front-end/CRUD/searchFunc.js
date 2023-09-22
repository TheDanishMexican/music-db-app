"use strict";

import { endpoint } from "../main.js";
import { getAllAlbums, getAllTracks } from "./get.js";

export async function search() {
    const searchInput = document.querySelector("#searchInput").value.trim();
    const trackList = document.querySelector("#trackList");

    try {
        if (searchInput === '') {
            await getAllTracks();
            return;
        }

        const response = await fetch(`${endpoint}/search?q=${searchInput}`);

        if (response.ok) {
            const data = await response.json();
            trackList.innerHTML = '';

            if (data.length === 0) {

                trackList.innerHTML = '<p>No results found.</p>';
            } else {
                data.forEach((track) => {
                    if (track.result_type === 'track') {
                    const html = /*html*/ `
                        <li value=${track.track_id}>
                            <strong>Track</strong>: ${track.name},<br>
                            <strong>Artists</strong>: ${track.artist_names },<br>
                            <strong>Album</strong>: ${track.track_names}.<br><br>
                        </li>
                    `;

                    trackList.insertAdjacentHTML('beforeend', html);
                    } 
                });
            }
        } else {
            console.log({message: error});
        }
    } catch (error) {
        console.log({message: error});
    }
}

export async function searchAlbums() {
    const searchInput = document.querySelector("#searchInput").value.trim();
    const albumList = document.querySelector("#albumList");

    try {
        if (searchInput === '') {
            await getAllAlbums();
            return;
        }

        const response = await fetch(`${endpoint}/search?q=${searchInput}`);

        if (response.ok) {
            const data = await response.json();
            albumList.innerHTML = '';

            if (data.length === 0) {
                albumList.innerHTML = '<p>No results found.</p>';
            } else {
                data.forEach((album) => {
                    if (album.result_type === 'album') {
                    const html = /*html*/ `
                        <li value=${album.album_id}>
                            <strong>Album</strong>: ${album.name},<br>
                            <strong>Artists</strong>: ${album.artist_names},<br>
                            <strong>Tracks</strong>: ${album.track_names},<br>
                        </li><br>
                    `;

                    albumList.insertAdjacentHTML('beforeend', html);
                    }
                });
            }
        } else {
            console.log({message: error});
        }
    } catch (error) {
        console.log({message: error});
    }
}