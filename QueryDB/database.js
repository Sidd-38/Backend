import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE 
}).promise()

export async function getQueries( ){
    const [rows] = await pool.query("select * from query")
    return rows
}

export async function getQuery(uid){
    const[row] = await pool.query("select * from query where uid=?",[uid])
    return row[0]
}

export async function createQuery(uid,pid,pname,tech,type_,status_){
    const [result] = await pool.query("insert into query (uid,pid,pname,tech,type_,status_) values (?,?,?,?,?,?)",[uid,pid,pname,tech,type_,status_])
    const id = result.insertId
    return getQuery(uid)
} 
