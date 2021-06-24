import SongsDao from "./daos/songs.dao";
import { CreateSongDto } from "./dtos/create.song.dto";

class SongsService {

    async list(){
        return SongsDao.getSongs();
    }

    async create(songtoAdd: CreateSongDto){
        return SongsDao.addSong(songtoAdd);
    }

    async deleteById (songId: string){
        return SongsDao.removeSongById(songId)
    }
}

export default new SongsService();
