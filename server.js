// app.js
// Django settings.py 역할

const express = require("express");
const server = express();

// 쿠키 사용
const cookieParser = require('cookie-parser')

const db = require("./db");

const http = require('http').createServer(server);
const port = 8000;

// application/x-www-form-urlencoded 형식 분석하기 위해 선언
server.use(express.urlencoded({ extended : true }));

// application/json 형식 분석하기 위해 선언
server.use(express.json());

// cookie-parser 사용
server.use(cookieParser());

const Vroutes = require("./routes/View_index");
const Aroutes = require("./routes/Api_index");

// views 경로 정적으로 만듬
server.use(express.static(__dirname + "/views"));

server.use(Vroutes);
server.use(Aroutes);


http.listen(port, () => {
    console.log(`localhost:${port} 실행...`)
});