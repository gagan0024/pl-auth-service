const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

class AppCache{

    getByKey(key){
        return myCache.get(key);
    };

    setByKey(key, value){
        myCache.set( key, value, 10000);
    };

}

module.exports = AppCache;