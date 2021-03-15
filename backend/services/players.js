const db = require('./db');
let tableName = "players";

async function getAll(){
    const result = await db.query(
        `SELECT * FROM ${tableName}`
    );
    return !result ? [] : result;
}

async function get(id){
    const result = await db.query(
        `SELECT * FROM ${tableName} WHERE id=?`, 
        [id]
    );
    return !result ? [] : result;
}

async function create(player) {
    const result = await db.query(
        `INSERT INTO ${tableName} 
        (username, password, email, display_name, total_score, spendable_score, created_on) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?)`, 
        [
            player.username,
            player.password,
            player.email,
            player.display_name,
            player.total_score,
            player.spendable_score,
            new Date().toISOString().slice(0, 19).replace('T', ' ')
        ]
    );
    return !result ? [] : result;
}

async function update(id, player){
    const result = await db.query(
        `UPDATE ${tableName} 
        SET username=?, password=?, email=?, display_name=?, total_score=?, spendable_score=?, created_on=?
        WHERE id=?`, 
        [
            player.username,
            player.password,
            player.email,
            player.display_name,
            player.total_score,
            player.spendable_score,
            id
        ]
    );
    return !result ? [] : result;
}

async function remove(id){
    const result = await db.query(
        `DELETE FROM ${tableName} WHERE id=?`, 
        [id]
    );
    return !result ? [] : result;
}

module.exports = {
    getAll, get, create, update, remove
}