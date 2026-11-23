import express from 'express'
const app = express();

console.log(process.env.PORT);
console.log(process.env.DATABASE_URL);

app.get('/', (req, res)=>{
    res.json({
        port: process.env.PORT,
        database: process.env.DATABASE_URL
    })
})

app.listen(process.env.PORT);