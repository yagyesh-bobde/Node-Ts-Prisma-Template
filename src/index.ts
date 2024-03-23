require('dotenv').config()
import express from 'express'
import log from './utils/logger';
import router from './routes';
import { PrismaClient } from '@prisma/client';
import config from '../config/default'


const app = express()
const port = config.port

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