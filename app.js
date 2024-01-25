const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT;

// Get request
app.get('/get', (req, res) => {
    res.send('Hello World');
});

// Post Request
app.post('/post', (req, res) => {
    const{userName} = req.body;
    res.send(`Hello ${userName}`);
})


//Put Request
app.put('/put', (req, res) => {
    res.send('i am putting a request now');
})

//Patch Request
app.patch('/patch', (req, res) => {
    res.send('i am patching a request now');
})

//Delete Request
app.delete('/delete', (req, res) => {
    res.send('i am deleting a request now');
})




app.listen(port, () => {
    console.log("Server listening on port 4500");
});