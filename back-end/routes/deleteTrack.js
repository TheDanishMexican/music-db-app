"use strict";

import express from 'express';
import database from '../database.js';

const deleteTrack = express.Router();

deleteTrack.delete('/tracks/:id', (request, response) => {
    const id = request.params.id;
    const query = 'DELETE FROM tracks where track_id=?;';
    const values = [id];

    database.query(query, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            response.json({message: error});
        } else {
            response.json(results);
        }
    });
});

export default deleteTrack;