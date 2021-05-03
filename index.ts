import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import messanger from './src/controllers/createMessage';
import { Settings } from './settings';

const app = express();
// number type

//instance of our class
let messages = new messanger(Settings.PORT);

const dataConnection = (user: string, pass: string): string => {
    return `mongodb://${user}:${pass}@cluster0-shard-00-00.4vjqo.mongodb.net:27017,cluster0-shard-00-01.4vjqo.mongodb.net:27017,cluster0-shard-00-02.4vjqo.mongodb.net:27017/test_database?ssl=true&replicaSet=atlas-6r2gny-shard-0&authSource=admin&retryWrites=true&w=majority`;
}

// string
const database = dataConnection(Settings.mlabUser, Settings.mlabPass);

// mongoose connection
mongoose.connect(database, {
    useMongoClient: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

interface Name {
    firstName: string;
}

// function with interface
const nameCreator = (name: Name): string => {
    return `Hello, ${name.firstName},`
}

let myName = {firstName: "Manny"};

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(messages.messagePrint())
);

app.listen(Settings.PORT, () =>
    console.log(nameCreator(myName), messages.messagePrint())
);