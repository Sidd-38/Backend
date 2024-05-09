import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE 
}).promise()

export async function getTestimonals( ){
    const [rows] = await pool.query("select * from testimonals")
    return rows
}

export async function getTestimonal(uid){
    const[row] = await pool.query("select * from testimonals where uid=?",[uid])
    return row[0]
}

export async function createTestimonal(uid,star,review){
    const [result] = await pool.query("insert into testimonals (uid,star,review) values (?,?,?)",[uid,star,review])
    const id = result.insertId
    return getTestimonal(uid)
} 