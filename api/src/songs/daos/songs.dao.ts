import debug from 'debug';
import mongooseDatastore from "../../common/datastores/mongoose.datastore";
import { CreateSongDto } from "../dtos/create.song.dto";
import { UpdateSongDto } from '../dtos/update.song.dto';

const log: debug.IDebugger = debug('app:songs-dao');

class SongsDao {
    Schema = mongooseDatastore.getMongoose().Schema

    songSchema = new this.Schema({
            title: { type: String, unique: true, required: true }
        },
        { timestamps: true });

    Song = mongooseDatastore.getMongoose().model('Songs', this.songSchema);

    async getSongs() {
        return await this.Song.find().exec();
    }

    async removeSongById(songId: string){
        return this.Song.deleteOne({ _id: songId }).exec();
    }

    async updateSong(updateData: UpdateSongDto){
        const update = { title: updateData.newTitle};
        this.Song.updateOne({_id: updateData.id}, update).exec(); // TODO: Optomise by using updateResult and not refetching data.
        return await this.Song.findById(updateData.id).exec();
    }

    async addSong(newSong: CreateSongDto){
        const songToAdd = new this.Song({
            title: newSong.title
        })

        await songToAdd.save();

        log(`Added a new song with title ${songToAdd._id}`)
        return await this.Song.findById(songToAdd._id).exec();
    }
}

export default new SongsDao();
