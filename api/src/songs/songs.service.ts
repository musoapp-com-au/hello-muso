import SongsDao from "./daos/songs.dao";

class SongsService {

    async list(){
        return SongsDao.getSongs();
    }

    async create(title: string){
        return SongsDao.addSong(title);
    }
}

export default new SongsService();