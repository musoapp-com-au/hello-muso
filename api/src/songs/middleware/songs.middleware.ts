import express from 'express';

class SongsMiddleWare {

    async extractSongId(req: express.Request,
        res: express.Response,
        next: express.NextFunction)
        {
            req.body.id = req.params.songId;
            next();
        }
}

export default new SongsMiddleWare();
