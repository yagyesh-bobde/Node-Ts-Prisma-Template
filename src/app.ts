require('dotenv').config()
import express from 'express'
import config from 'config'
import connectToDb from './utils/connectToDb';


const app = express()

const port = config.get("port");


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    connectToDb();
});