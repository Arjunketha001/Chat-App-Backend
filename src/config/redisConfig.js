import Queue from 'bull';

import { REDIS_HOST, REDIS_PORT } from './serverConfig.js';
export default new Queue('mailQueue',{
    redis:{
        host:REDIS_HOST,       // Redis server host
        port:REDIS_PORT,              // Redis server port
}});