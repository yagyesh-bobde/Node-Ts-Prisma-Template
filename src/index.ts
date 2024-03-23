require('dotenv').config()
import express from 'express'
import config from 'config'
import log from './utils/logger';
import router from './routes';
import { PrismaClient } from '@prisma/client';


const app = express()

const port = config.get("port");

export const prismaClient = new PrismaClient({
    log: ['query', 'info', 'warn'],
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.get("/", (req, res) => {
    res.send("Hello World")
})


app.listen(port, () => {
    log.info(`Server started on http://localhost:${port}`);
});