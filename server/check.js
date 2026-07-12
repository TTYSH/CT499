const { MongoClient } = require('mongodb');

async function checkSchema() {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    try {
        await client.connect();
        const db = client.db('bookworm');
        const collections = await db.listCollections({ name: 'NGUOIDUNG' }).toArray();
        if (collections.length > 0 && collections[0].options && collections[0].options.validator) {
            console.log("Validator Schema:");
            console.dir(collections[0].options.validator, { depth: null });
        } else {
            console.log("No schema validation found for NGUOIDUNG.");
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

checkSchema();
