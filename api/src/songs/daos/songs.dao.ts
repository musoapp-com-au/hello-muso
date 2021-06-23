import mongooseDatastore from "../../common/datastores/mongoose.datastore";

import debug from 'debug';

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

    async addSong(title: string){
        const newSong = new this.Song({
            title
        })

        await newSong.save();

        log(`Added a new song with title ${newSong._id}`)

        // TODO: Populate hypermedia
        // HACK: This whole thing is dodgy
        return {id: newSong.id, title: title};
    }

}



export default new SongsDao();