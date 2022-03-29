import express from 'express';

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/alex', (req,res) => {res.send("Hello Alex")});

app.get('/logan', (req,res) => {res.send("Hello Logan")});

app.get('/dave', (req,res) => {res.send("Dave you are Awesome!")});

app.get('/Moses', (req,res) => {res.send("Hello Moses")});

app.listen(port, ()=>console.log("Listening")); 