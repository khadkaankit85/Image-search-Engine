import express from "express"
import { createClient } from 'pexels';
import 'dotenv/config'
import axios from "axios";
const app = express()
const apiKey = process.env.apiPexels

const client = createClient(apiKey);
console.log(apiKey)

app.get("/", (req, res) => {
    client.photos.search({ query: "nepal", per_page: 1 }).then((photos) => {
        console.log(photos)
        res.send(photos)
    })
})

app.listen(3000, () => {
    console.log("listening on port 3000 ")
})