import debug from 'debug';
import mongooseDatastore from "../../common/datastores/mongoose.datastore";
import { CreateSongDto } from "../dtos/create.song.dto";

const log: debug.IDebugger = debug('app:songs-dao');

class SongsDao {
    Schema = mongooseDatastore.getMongoose().Schema

    songSchema = new this.Schema({
            title: { type: String, unique: true, required: true }
        },
        { timestamps: true });

    Song = mongooseDatastore.getMongoose().model('Songs', this.songSchema);

    async getSongs() {
        return this.Song.find().exec();
    }

    async addSong(newSong: CreateSongDto){
        const songToAdd = new this.Song({
            title: newSong.title
        })

        await songToAdd.save();

        log(`Added a new song with title ${songToAdd._id}`)

        // TODO: Populate hypermedia
        // HACK: This whole thing is dodgy
        return {id: songToAdd.id, title: newSong.title};
    }

}



export default new SongsDao();