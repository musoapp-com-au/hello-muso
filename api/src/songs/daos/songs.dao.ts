import mongooseDatastore from "../../common/datastores/mongoose.datastore";

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

        // TODO: Add better debug logging to avoid console
        // tslint:disable-next-line:no-console
        console.log(newSong._id)

        // TODO: Populate hypermedia
        return newSong._id;
    }

}



export default new SongsDao();