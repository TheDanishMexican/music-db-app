"use strict";

import { addArtistToTrack } from "../CRUD/add.js";
import { createAlbum, createArtist, createTrack } from "../CRUD/create.js";
import { deleteTrack } from "../CRUD/delete.js";
import { getAlbumsForSelect, getArtistsForSelect, getTracksForSelect } from "../CRUD/get.js";
import { search,searchAlbums } from "../CRUD/searchFunc.js";
import { closeDialog, closeDialogOnSubmit, openDialog } from "./dialog.js";



export function createButtonInitialized() {
    const buttonDiv = document.querySelector("#buttonContainer");

    buttonDiv.addEventListener('click', (event) => {
        const buttonId = event.target.id;

        if (buttonId === 'createAlbum' || 'createTrack' || 'createArtist' || 
            'deleteTrack' || 'addArtist') {
            openDialog(`${buttonId}`);
        }
    });
};

export function cancelButtonInitialized() {
    const cancelButtons = document.querySelectorAll('.cancel-button');

    cancelButtons.forEach((cancelButton) => {
        cancelButton.addEventListener('click', () => {
            const dataFormId = cancelButton.getAttribute('data-form-id');
            closeDialog(dataFormId);
        })
    });
};

export function artistSelectInitialized() {
    const createAlbumButton = document.querySelector("#createAlbum");
    const createTrackButton = document.querySelector("#createTrack");
    const addArtistButton = document.querySelector("#addArtist");

    addArtistButton.addEventListener('click', () => {
        const form = document.querySelector("#addArtistForm");
        const select = form.querySelector('[data-select-type="artist"]');
        const selectId = select.id;
        getArtistsForSelect(selectId);
    })

    createTrackButton.addEventListener('click', () => {
        const form = document.querySelector("#createTrackForm");
        const select = form.querySelector('[data-select-type="artist"]');
        const selectId = select.id
        getArtistsForSelect(selectId); 
    });

    createAlbumButton.addEventListener("click", () => {
        const form = document.querySelector('#createAlbumForm');
        const select = form.querySelector('[data-select-type="artist"]');
        const selectId = select.id;
        getArtistsForSelect(selectId); 
    });
}

export function albumSelectInitialized() {
    const createTrackButton = document.querySelector("#createTrack");
    const addArtistButton = document.querySelector("#addArtist");

        createTrackButton.addEventListener('click', () => {
            const form = document.querySelector("#createTrackForm");
            const select = form.querySelector('[data-select-type="album"]');
            const selectId = select.id;
            getAlbumsForSelect(selectId); 
        });
}

export function trackSelectInitialized() {
    const deleteTrackButton = document.querySelector("#deleteTrack");
    const addArtistButton = document.querySelector("#addArtist");

    addArtistButton.addEventListener('click', () => {
        const form = document.querySelector("#addArtistForm");
        const select = form.querySelector("[data-select-type='track']");
        const selectId = select.id;
        getTracksForSelect(selectId);
    })

    deleteTrackButton.addEventListener('click', () => {
        const form = document.querySelector("#deleteTrackForm");
        const select = form.querySelector("[data-select-type='track']");
        const selectId = select.id;
        getTracksForSelect(selectId);
    })
}

export function createArtistButtonInitialized() {
    const form = document.querySelector("#createArtistForm");

    form.addEventListener("submit", createArtist);
}

export function createTrackButtonInitialized() {
    const form = document.querySelector("#createTrackForm");

    form.addEventListener("submit", createTrack);
}

export function createAlbumButtonInitialized() {
    const form = document.querySelector("#createAlbumForm");

    form.addEventListener('submit', createAlbum);
}

export function deleteTrackButtonInitialized() {
    const form = document.querySelector('#deleteTrackForm');

    form.addEventListener('submit', deleteTrack);
}

export function SubmitButtonInitialized() {
    const submitButtons = document.querySelectorAll('.close-button');

    submitButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
           const submitButton = event.target.getAttribute('data-dialog');
           closeDialogOnSubmit(submitButton);
        });
    });
};

export function searchButtonInitialized() {
    const searchButton = document.querySelector("#searchButton");

    searchButton.addEventListener('click', search);
    searchButton.addEventListener('click', searchAlbums);
}


export function addArtistButtonInitialized() {
    const form = document.querySelector("#addArtistForm");

    form.addEventListener("submit", addArtistToTrack);    
}