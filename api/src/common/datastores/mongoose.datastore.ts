import mongoose from 'mongoose'

class MongooseDatastore {

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
        mongoose.connect(process.env.DATABASE_URL)


    }
}

export default new MongooseDatastore();