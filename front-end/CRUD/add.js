"use strict"

import { endpoint } from "../main.js";

export async function addArtistToTrack(event) {
    event.preventDefault();

    const trackSelect = document.querySelector("#track-select_in_add_artist");
    const track_id = trackSelect.value;
    const artistSelect = document.querySelector("#artist-select_in_add_artist");
    const artist_id = artistSelect.value;

    if (!track_id || !artist_id) {
        console.log({ message: 'Both track_id and artist_id are required' });
        return;
    }

    try {
        const response = await fetch(`${endpoint}/track-artist`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ track_id, artist_id }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            const errorData = await response.json();
            console.log({ message: errorData });
        }
    } catch (error) {
        console.error(error);
    }
};
