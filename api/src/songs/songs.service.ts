import SongsDao from "./daos/songs.dao";
import { CreateSongDto } from "./dtos/create.song.dto";
import { UpdateSongDto } from "./dtos/update.song.dto";

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

    async updateSong(songUpdate: UpdateSongDto){
        return SongsDao.updateSong(songUpdate)
    }
}

export default new SongsService();
