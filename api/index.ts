require('dotenv').config()
import express from 'express'
// import log from '../src/utils/logger';
import router from '../src/routes';
import { PrismaClient } from '@prisma/client'
import config from '../src/config/default'


const app = express()
const port = config.port

export const prismaClient = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(port, () => {
    // log.info(`Server started on http://localhost:${port}`);
    console.log(`Server started on http://localhost:${port}`);
});

module.exports = app;
