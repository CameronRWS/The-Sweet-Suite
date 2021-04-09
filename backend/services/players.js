const db = require('./db');
const bcrypt = require('bcrypt');
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
    return !result ? [] : result;
}

async function create(player) {
    player.password = await bcrypt.hash(player.password, 10);
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
    player.password = await bcrypt.hash(player.password, 10);
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

async function checkLoginResult(result, password) {
    if(result.length === 0) {
        return {
            "isSuccessful" : false,
            "status" : "Username doesn't exit."
        }
    } else {
        const isMatch = await bcrypt.compare(password, result[0].password);
        if (!isMatch) {
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
}

module.exports = {
    login, getAll, get, getByUsername, create, update, remove
}
