"use strict";

import { endpoint } from "../main.js";

export async function createArtist(event) {
    event.preventDefault();

    const form = event.target;
    let artist_name = form.artist_name.value;

    if (artist_name) {
        // Capitalize the first letter of each word
        artist_name = artist_name
            .split(' ') // Split the string into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
            .join(' '); // Join the words back together with spaces
    }

    try {
        const response = await fetch(`${endpoint}/artists`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({artist_name}),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            const errorData = await response.json();
            console.log({message: errorData});
        }
    } catch (error) {
        console.log(error);
    }
};

export async function createTrack(event) {
    event.preventDefault();

    const form = event.target;
    let track_name = form.track_name.value;
    const artist_id = form.artist_id.value;
    const album_id = form.album_id.value;

    // Capitalize the first letter of each word in track_name
    if (track_name) {
        track_name = track_name
            .split(' ') // Split the string into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
            .join(' '); // Join the words back together with spaces
    }

    if (!track_name) {
        console.log('Track name is empty.');
        return;
    }

    try {
        const response = await fetch(`${endpoint}/tracks`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ track_name, artist_id, album_id }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            const errorData = await response.json();
            console.log({message: errorData});
        }
    } catch (error) {
        console.log(error);
    }
}

export async function createAlbum(event) {
    event.preventDefault();

    const form = event.target;
    let album_name = form.album_name.value;
    const artist_id = form.artist_id.value;
    

    if (album_name) {
        // Capitalize the first letter of each word
        album_name = album_name
            .split(' ') // Split the string into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
            .join(' '); // Join the words back together with spaces
    }

    try {
        const response = await fetch(`${endpoint}/albums`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ album_name, artist_id }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            const errorData = await response.json();
            console.log({ message: errorData });
        }
    } catch (error) {
        console.log(error);
    }
}