import pkg from "pg";
const { Pool } = pkg;

const config = {
  user: "postgres",
  host: "157.92.151.10",
  password: "caseros@1853",
  database: "migracion",
};

const pool = new Pool(config);

const getUser = async () => {
  try {
    const res = await pool.query("SELECT * FROM list_mails");
    console.log(res.rows);
    pool.end();
  } catch (e) {
    console.log(e);
  }
};

const insertUser = async () => {
  try {
    const sql = "INSERT INTO list_mails(email) VALUES ($1)";
    const value = ["nlazarsky@ffyb.uba.ar"];

    const res = await pool.query(sql, value);
    console.log(res);
    pool.end();
  } catch (e) {
    console.log(e);
  }
};

const deleteUser = async () => {
  try {
    const sql = "DELETE FROM list_mails WHERE email = $1";
    const value = ["nlazarsky@ffyb.uba.ar"];

    const res = await pool.query(sql, value);
    console.log(res);
    pool.end();
  } catch (e) {
    console.log(e);
  }
};

const editUser = async () => {
  try {
    const sql =
      "UPDATE list_mails SET email = $1, fecha_creacion = now() WHERE email = $2";
    const value = ["adrach@ffyb.uba.ar", "ngarcia@ffyb.uba.ar"];

    const res = await pool.query(sql, value);
    console.log(res);
    pool.end();
  } catch (e) {
    console.log(e);
  }
};

getUser();
