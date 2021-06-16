import mongooseDatastore from "../../common/datastores/mongoose.datastore";

class SongsDao {
    Schema = mongooseDatastore.getMongoose().Schema

    songSchema = new this.Schema({
            name: { type: String, unique: true, required: true }
        },
        { timestamps: true });

    Song = mongooseDatastore.getMongoose().model('Songs', this.songSchema);

}

export default new SongsDao();