# LEDDrawing-Pi [ WEBPAGE ]
***IMPORTANT:** This project need https://github.com/m3kkis/LEDDrawing-Pi to work properly.*

This repository is part of a project that allows users to do a drawing online on a webpage and then the information gets sent over to my raspberry pi and replicates it on my 16x16 LED frame. It is by running 2 NodeJS servers and communicating between eachother by using SocketsIO and executing a python script by spawning a child process.

![alt text](https://github.com/m3kkis/LEDDrawing-Web/blob/master/public/leddraw.gif?raw=true)

## Requirements
* Nodejs v12

## Installation
```
git clone https://github.com/m3kkis/LEDDrawing-Web.git
cd LEDDrawing-Web
npm install
```
## Starting up
```
node app.js
```
or if you have PM2 installed
```
pm2 start app.js
```