"use strict";

import express from 'express';
import database from '../database.js';

const createTrack = express.Router();

createTrack.post('/tracks', (request, response) => {
    const track = request.body;
    const query = 'INSERT INTO tracks(track_name, album_id, artist_id) values(?, ?, ?);';
    const values = [track.track_name, track.album_id, track.artist_id];

    database.query(query, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            response.json({message: error});
        } else {
            response.json(results);
        }
    });
});

export default createTrack;




