import config from './config';
import cassandra from 'cassandra-driver';

const ssl_option = {
    //  cert: fs.readFileSync("path\to\cert"),
    //   rejectUnauthorized: false,
    secureProtocol: 'TLSv1_2_method',

};

const { username, contactPoint, port, password, keyspace, localDataCenter } = config;

let authProvider = new cassandra.auth.PlainTextAuthProvider(username, password);
export let client = new cassandra.Client({
    contactPoints: [`${contactPoint}:${port}`],
    keyspace,
    authProvider: authProvider,
    sslOptions: ssl_option,
    localDataCenter,
});