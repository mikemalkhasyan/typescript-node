import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
// number type
const PORT: number = 3000;

// string
const database: string = "mongodb://Malkhasyan:x43norte@cluster0-shard-00-00.4vjqo.mongodb.net:27017,cluster0-shard-00-01.4vjqo.mongodb.net:27017,cluster0-shard-00-02.4vjqo.mongodb.net:27017/test_database?ssl=true&replicaSet=atlas-6r2gny-shard-0&authSource=admin&retryWrites=true&w=majority"

const n: number = 100;

// mongoose connection
mongoose.connect(database, {
    useMongoClient: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);