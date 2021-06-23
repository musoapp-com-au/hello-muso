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
        . then(() => {
            log(`Connection to ${process.env.DATABASE_URL} succeeded`)
        })
        .catch((error) => {
            const retryWaitTime = 10; //seconds
            log(`Datastore connection failed - retrying after ${retryWaitTime} seconds:`, error);
            setTimeout(this.connectWithRetry, retryWaitTime * 1000);
        });
    }
}

export default new MongooseDatastore();