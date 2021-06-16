import mongoose from 'mongoose'

class MongooseDatastore {


    private mongooseOptions = {
        useNewUrlParser: true
    };

    constructor(){
        this.connectWithRetry();
    }

    getMongoose() {
        return mongoose;
    }

    connectWithRetry = () => {

        // TODO: Add better debug logging to avoid console
        // tslint:disable-next-line:no-console
        console.debug(process.env.DATABASE_URL)
        mongoose.connect(process.env.DATABASE_URL, this.mongooseOptions)


    }
}

export default new MongooseDatastore();