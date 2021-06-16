import SongsDao from "./daos/songs.dao";

class SongsService {

    async list(){
        return SongsDao.getSongs();
    }
}

export default new SongsService();