import mongoose from 'mongoose'

import debug from 'debug';

const log: debug.IDebugger = debug('app:mongoose-datastore');

class MongooseDatastore {


    private mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    constructor(){
        this.connectWithRetry();
    }

    getMongoose() {
        return mongoose;
    }

    connectWithRetry = () => {

        log(`Accessing data base at - ${process.env.DATABASE_URL}`)
        mongoose.connect(process.env.DATABASE_URL, this.mongooseOptions)
    }
}

export default new MongooseDatastore();