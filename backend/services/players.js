const db = require('./db');
let tableName = "players";

async function login(username, password){
    const result = await db.query(
        `SELECT * FROM ${tableName} WHERE username=?`,
        [username]
    );
    return checkLoginResult(result, password);
}

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
    return !result ? [] : result[0];
}

async function getByUsername(username){
    const result = await db.query(
        `SELECT * FROM ${tableName} WHERE username=?`, 
        [username]
    );
    return !result ? [] : result[0];
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
    return !result ? [] : this.getByUsername(player.username);
}

async function update(id, player){
    const result = await db.query(
        `UPDATE ${tableName} 
        SET username=?, password=?, email=?, display_name=?, total_score=?, spendable_score=? 
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
    return !result ? [] : this.getByUsername(player.username);
}

async function remove(id){
    const result = await db.query(
        `DELETE FROM ${tableName} WHERE id=?`, 
        [id]
    );
    return !result ? [] : result;
}

async function checkLoginResult(result, password) {
    if(result.length === 0) {
        return {
            "isSuccessful" : false,
            "status" : "Username doesn't exit."
        }
    } else if (result[0].password !== password) {
        return {
            "isSuccessful" : false,
            "status" : "Password is not correct."
        }
    } else {
        return {
            "isSuccessful" : true,
            "status" : "Success."
        }
    }
}

module.exports = {
    login, getAll, get, getByUsername, create, update, remove
}