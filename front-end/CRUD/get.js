"use strict";

import { endpoint } from "../main.js";

export async function getArtistsForSelect(selectElement) {
    const select = document.querySelector(`#${selectElement}`);

    try {
        // fetch the existing artists and populate the select
        const response = await fetch(`${endpoint}/artists`);
        const data = await response.json();

        if(response.ok) {
            select.innerHTML = '';

            const placeHolder = /*html*/ `
                <option value=''>Select an artist</option>
            `;

            select.insertAdjacentHTML('beforeend', placeHolder);

            data.forEach((artist) => {
                const option = /*html*/ `
                    <option value='${artist.artist_id}'>${artist.artist_name}</option>
                `;

                select.insertAdjacentHTML('beforeend', option);
            });
        } else {
            console.log({message: error});
        }
    } catch (error) {
        console.log(error);
    }
} 

export async function getTracksForSelect(selectElement) {
    const trackSelect = document.querySelector(`#${selectElement}`);

    try {
        // Fetch the existing tracks and populate the select
        const response = await fetch(`${endpoint}/tracks`);
        const data = await response.json();

        if (response.ok) {
            trackSelect.innerHTML = '';

            const placeHolder = /*html*/ `
                <option value=''>Select a track</option>
            `;

            trackSelect.insertAdjacentHTML('beforeend', placeHolder);

            data.forEach((track) => {
                const option = /*html*/ `
                    <option value='${track.track_id}'>${track.track_name}</option>
                `;

                trackSelect.insertAdjacentHTML('beforeend', option);
            });
        } else {
            console.error({ message: "Failed to fetch tracks" });
        }
    } catch (error) {
        console.error(error);
    }
};

export async function getAlbumsForSelect(selectElement) {
        const select = document.querySelector(`#${selectElement}`);

        try {
            const response = await fetch(`${endpoint}/albums`);
            const data = await response.json();

        if (response.ok) {
            select.innerHTML = '';

            const placeHolder = /*html*/ `
                <option value=''>Select an album</option>
            `;

            select.insertAdjacentHTML('beforeend', placeHolder);

            data.forEach((album) => {
                const option = /*html*/ `
                    <option value='${album.album_id}'>${album.album_name}</option>
                `;

                select.insertAdjacentHTML('beforeend', option);
            });
        } else {
            console.log({message: error});
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getAllTracks() {
    const list = document.querySelector("#trackList");

    try {
        const response = await fetch(`${endpoint}/tracks`);
        const data = await response.json();

        if (response.ok) {
            list.innerHTML = '';

            data.forEach((track) => {
                const html = /*html*/`
                <li value=${track.track_id}>
                    <strong>Track</strong>: ${track.track_name},<br>
                    <strong>Albums</strong>: ${track.album_names},<br>
                    <strong>Artists</strong>: ${track.artist_names}.<br><br>
                </li>
            `;

            list.insertAdjacentHTML('beforeend', html);
            });
        } else {
            console.log({ message: error });
        }
    } catch (error) {
        console.log(error);
    }
};


export async function getAllAlbums() {
    const list = document.querySelector("#albumList");

    try {
        const response = await fetch(`${endpoint}/albums`);
        const data = await response.json();

        if (response.ok) {
            list.innerHTML = '';

            data.forEach((album) => {
                const html = /*html*/`
                <li value=${album.album_id}>
                    <strong>Album</strong>: ${album.album_name},<br>
                    <strong>Artists</strong>: ${album.artist_names},<br>
                    <strong>Tracks</strong>: ${album.track_names}.<br><br>
                </li>
                `;

                list.insertAdjacentHTML('beforeend', html);
            });
        } else {
            console.log({ message: error });
        }
    } catch (error) {
        console.log(error);
    }
};
