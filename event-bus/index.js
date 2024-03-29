const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")

const app = express()
app.use(bodyParser.json())

const events = []

app.post("/events", (req, res) => {
    const event = req.body

    events.push(event)

    axios.post("http://localhost:4000/events", event)
    .catch(err => console.log("EVENT-BUS POSTS SERVICE ERROR : "+err.message))
    axios.post("http://localhost:4001/events", event)
    .catch(err => console.log("EVENT-BUS COMMENTS SERVICE ERROR : "+err.message))
    axios.post("http://localhost:4002/events", event)
    .catch(err => console.log("EVENT-BUS QUERY SERVICE ERROR : "+err.message))
    axios.post("http://localhost:4003/events", event)
    .catch(err => console.log("EVENT-BUS MODERATION SERVICE ERROR : "+err.message))    

    res.send({ status: "OK" })
})  

app.get("/events", (req, res) => {
    res.send(events)
})

app.listen(4005, () => {
    console.log("Event-Bus : Listening on 4005")
})