import Queue from 'bull';

import redisConfig from '../config/redisConfig.js';

const mailQueue = new Queue('mailQueue', {
  redis: redisConfig,
});

// mailQueue.on('error', (err) => {
//   console.error('❌ Redis Queue Error:', err);
// });

// mailQueue.on('stalled', (job) => {
//   console.warn('⚠️ Job stalled:', job.id);
// });

// mailQueue.count().then(count => console.log("Pending jobs:", count));

console.log('✅ Mail Queue Initialized');

export default mailQueue;
