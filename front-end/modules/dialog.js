"use strict";

export function openDialog(buttonId) {
    if (buttonId === 'createAlbum') {
        document.querySelector("#createAlbumDialog").showModal();
        document.querySelector("#createAlbumForm").reset();
    } else if (buttonId === 'createTrack') {
        document.querySelector("#createTrackDialog").showModal();
        document.querySelector("#createTrackForm").reset();
    } else if (buttonId === 'createArtist') {
        document.querySelector("#createArtistDialog").showModal();
        document.querySelector("#createArtistForm").reset();
    } else if (buttonId === 'deleteTrack') {
        document.querySelector("#deleteTrackDialog").showModal();
    } else if (buttonId === 'addArtist') {
        document.querySelector("#addArtistDialog").showModal();
    }
}

export function closeDialog(buttonId){
    if (buttonId === 'inAlbum') {
        document.querySelector("#createAlbumDialog").close();
    } else if (buttonId === 'inTrack') {
        document.querySelector("#createTrackDialog").close();
    } else if (buttonId === 'inArtist') {
        document.querySelector("#createArtistDialog").close();
    } else if (buttonId === 'inDeleteTrack') {
        document.querySelector("#deleteTrackDialog").close();
    } else if (buttonId === 'inAddArtist') {
        document.querySelector("#addArtistDialog").close();
    }
}

export function closeDialogOnSubmit(dialogId) {
    document.querySelector(`#${dialogId}`).close();
}
