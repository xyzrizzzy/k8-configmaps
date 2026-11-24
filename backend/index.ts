import express from 'express'
import dotenv from 'dotenv'
const app = express();

dotenv.config({ path: './secrets/.env' });

console.log(process.env.PORT);
console.log(process.env.DATABASE_URL);

app.get('/', (req, res)=>{
    res.json({
        port: process.env.PORT,
        database: process.env.DATABASE_URL
    })
})

app.listen(process.env.PORT);