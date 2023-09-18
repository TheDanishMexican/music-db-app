import express from 'express';
import database from '../database.js';

const deleteAlbum = express.Router();

deleteAlbum.delete('/albums/:album_id', (request, response) => {
    const albumIdToDelete = request.params.album_id;

    const deleteTrackAlbumQuery = 'DELETE FROM track_album WHERE album_id = ?';

    database.query(deleteTrackAlbumQuery, [albumIdToDelete], (error, results, fields) => {
        if (error) {
            console.log(error);
            response.json({ message: error });
        } else {
            const deleteTrackQuery = 'DELETE FROM tracks WHERE album_id = ?';

            database.query(deleteTrackQuery, [albumIdToDelete], (error, results, fields) => {
                if (error) {
                    console.log(error);
                    response.json({ message: error });
                } else {
                    const deleteAlbumQuery = 'DELETE FROM albums WHERE album_id = ?';

                    database.query(deleteAlbumQuery, [albumIdToDelete], (error, results, fields) => {
                        if (error) {
                            console.log(error);
                            response.json({ message: error });
                        } else {
                            response.json({ message: 'Album deleted successfully' });
                        }
                    });
                }
            });
        }
    });
});

export default deleteAlbum;
