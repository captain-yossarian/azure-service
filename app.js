'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cosmos_1 = require("./cosmos");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var app = express_1.default();
var insert = function (id, photo_id, quantity) {
    var arr = [
        "INSERT INTO likes.user_likes (id, photo_id, quantity) VALUES (" + id + ", '" + photo_id + "', " + quantity + ")",
    ];
    arr.forEach(function (element) {
        cosmos_1.client.execute(element);
    });
};
app.get('/', function (req, res) {
    res.send('INDEX');
});
app.get('/add', function (req, res) {
    console.log('GOTO /add');
    cosmos_1.client.connect(function () {
        console.log('connected');
    });
    res.send('/ADD');
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log("server running at port http://localhost:" + port);
});
