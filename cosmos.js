"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var config_1 = __importDefault(require("./config"));
var cassandra_driver_1 = __importDefault(require("cassandra-driver"));
var ssl_option = {
    //  cert: fs.readFileSync("path\to\cert"),
    //   rejectUnauthorized: false,
    secureProtocol: 'TLSv1_2_method',
};
var username = config_1.default.username, contactPoint = config_1.default.contactPoint, port = config_1.default.port, password = config_1.default.password, keyspace = config_1.default.keyspace, localDataCenter = config_1.default.localDataCenter;
var authProvider = new cassandra_driver_1.default.auth.PlainTextAuthProvider(username, password);
exports.client = new cassandra_driver_1.default.Client({
    contactPoints: [contactPoint + ":" + port],
    keyspace: keyspace,
    authProvider: authProvider,
    sslOptions: ssl_option,
    localDataCenter: localDataCenter,
});
