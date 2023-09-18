"use strict";

import { endpoint } from "../main.js";
import { getAllTracks } from "./get.js";

export async function deleteTrack(event) {
    event.preventDefault();

    const select = document.querySelector("#trackSelect");
    const trackId = select.value;

    try {
        // Send a DELETE request to delete the artist by ID
        const response = await fetch(`${endpoint}/tracks/${trackId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Track deleted successfully
            console.log('Track deleted successfully.');
        } else {
            // Handle the case where the delete request fails
            console.log({message: error});
        }
    } catch (error) {
        console.error(error);
    }
    getAllTracks();
}
