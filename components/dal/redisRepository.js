const Redis = require('ioredis');
const config = require('../../config/config.js');
class Cache {

    static async setInRedis(key, payload, expiry, timeInSecondOrMs = 'ex', exists=null) {
        if (!key) return false;
        let redis = null;
        try {
            redis = await this.redisClient();
            let expireTime = expiry || 86400; 
            if (exists) {
                return await redis.set(key, JSON.stringify({data: payload}), timeInSecondOrMs, expireTime, exists);
            } else {
                return await redis.set(key, JSON.stringify({data: payload}), timeInSecondOrMs, expireTime);
            }
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    static async getFromRedis(key) {
        if (!key) return false;
        let redis = null;
        try {
            redis = await this.redisClient();
        } catch (e) {
            console.error(e);
            return null;
        }

        let response = await redis.get(key);
        if (response) response = JSON.parse(response);
        if (response && response.data) return response.data;
        return null;
    }

    static async redisClient() {
        if (Cache._client) return Cache._client;
        const redisUrl = gConfig.redis_url || `redis://localhost:6379`;
        if (!redisUrl) throw new Error('Can not connect without a redis url!');
        let redis = null;
        redis = new Redis(redisUrl);
        return new Promise((res, rej) => {
            redis.on('error', err => {
                rej(err);
            });
            redis.on('connect', () => {
                console.log('Connected to Redis!');
                Cache._client = redis;
                res(redis);
            });
        });
    }

    
}
exports = module.exports = Cache;
