const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const URL = require('url');
const fs = require('async-file');
const WebSocket = require('ws');
const http = require('http');
const https = require('https');

const path = require('path');

const DeadClickUtils = require('DeadClick').utils;
const Error = require('DeadClick').Error;
DeadClickUtils.requestsPath = __dirname + '/../new_collect/';

const repairService = require('./repairService');

const app = express();

const API_ROOT = "/API";

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());


const port = process.env.APP_PORT || 8080;

const router = express.Router();

router.get('/redirect', function(req, res) {
    res.redirect('/');
});

router.get('/states', async function(req, res) {
    res.json(JSON.parse(await fs.readTextFile(DeadClickUtils.requestsPath + "../errors.json")));
});

router.get('/repairs', async function(req, res) {
    const results = JSON.parse(await fs.readTextFile(DeadClickUtils.requestsPath + "../results.json"));
    for (const i in results) {
        const result = results[i];
        result.newErrors = result.newErrors.map(e => {
            const error = new Error();
            Object.assign(error, e);
            error.message = error.getMessage();
            return error;
        });
        result.oldErrors = result.oldErrors.map(e => {
            const error = new Error();
            Object.assign(error, e);
            error.message = error.getMessage();
            return error;
        });
    }
    res.json(results);
});

router.get('/state/:id', async function(req, res) {
    const state = await DeadClickUtils.loadState(req.params.id);
    state.requests.forEach(e => {
        e.type = e.contentType().split("/")[1];
    });
    state.errors.forEach(e => {
        e.message = e.getMessage();
    });
    res.json(state);
});

const repairPool = {};
router.get('/state/:id/repair', async function(req, res) {
    let repair = repairPool[req.params.id];
    if (!repair || repair.status == "done" || repair.status == "error") {
        const state = await DeadClickUtils.loadState(req.params.id);
        const errors = state.errors;
        repair = {
            state: state,
            status: "created"
        };
        repairPool[req.params.id] = repair;
        await repairService.repair(repair);
        //repair.state = repair.repairedState;
        repair.state.requests.forEach(e => {
            e.type = e.contentType().split("/")[1];
        });
        repair.state.errors.forEach(e => {
            e.message = e.getMessage();
        });
    }
    res.json(repair);
});

process.on('uncaughtException', function(err) {
    console.log('process.on handler');
    console.log(err);
});

router.get('/state/:id/screenshot.png', async function(req, res) {
    res.sendFile(path.resolve(DeadClickUtils.requestsPath + req.params.id + '/screenshot.png'));
});

router.post('/exception', function (req, res) {
    const exception = new Exception();
    exception.date = new Date(req.body.date);
    exception.pageId = req.body.pageId;
    exception.error = req.body.error;

    for (let i = 0; i < exception.error.stack.length; i++) {
        const stack = exception.error.stack[i];
        let fileName = "?";
        if (stack.url != null) {
            const url = URL.parse(stack.url);
            const path = url.pathname;
            if (path.lastIndexOf("/") != -1) {
                fileName = path.substring(path.lastIndexOf("/") + 1);
                if (fileName.lastIndexOf(".") != -1) {
                    fileName = fileName.substring(0, fileName.lastIndexOf("."));
                }
            }
        }
        stack.file = fileName;
        if (exception.file == null) {
            exception.error.file = fileName;
            exception.error.line = stack.line;
            exception.error.column = stack.column;
        }
    }

    exception.save(function(err, data) {
        if (err) {
            res.send(err)
        } else {
            wss.broadcast({
                event: "new_exception",
                data: data
            });
            console.log("Exception: " + exception.error.message + " is created");
            res.json({message: 'Exception created!'});
        }
    });
});


app.use(API_ROOT, router);
app.use('/', express.static('dist'));

const server = http.createServer(app);

// const wss = new WebSocket.Server({ server });
//
// wss.on('connection', function connection(ws) {
//     ws.on('message', function incoming(message) {
//         console.log('received: %s', message);
//     });
//
//     ws.send('something');
// });
//
// wss.broadcast = function broadcast(data) {
//     wss.clients.forEach(function each(client) {
//         if (client.readyState === WebSocket.OPEN) {
//             client.send(JSON.stringify(data));
//         }
//     });
// };
(async function () {
    try {
        const certificate = await fs.readTextFile('./fullchain.pem', 'utf8');
        const privateKey = await fs.readTextFile('./privkey.pem', 'utf8');

        const credentials = {key: privateKey, cert: certificate};
        const httpsServer = https.createServer(credentials, app);

        const proxy = await repairService.startProxy(55894);
        proxy.requestState = await DeadClickUtils.loadState("http://personal.lse.ac.uk/birchj1/");

        const host = process.env.HOST || "//localhost:8080";

        console.log("Start on port: " + port + ", 443");
        server.listen(port);
        const https_port = 443;
        if (host.indexOf("localhost") == -1) {
            //httpsServer.listen(https_port);
        }
    } finally {
        //repairService.stopProxy();
    }
})();




