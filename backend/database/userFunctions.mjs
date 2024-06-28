import { createConnection } from 'mysql';

const con = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'my_database'
});

export function connectDatabase() {
    console.log('connect to database');
    con.connect();
};

export function closeConnectionDatabase() {
    console.log('close connection to database');
    con.end();
};

export function addNewUser(user) {
    let sql = "INSERT INTO user (first_name, last_name) VALUES (?,?)";

    con.query(sql, [user.firstname, user.lastname], function(err, result) {
        if (err) console.log(err);
    });
};

export function getAllUser() {
    let sql = "SELECT * FROM user";

    return new Promise((resolve, reject) => {
        con.query(sql, function(err, res) {
            if (err) reject(err);
            resolve(res);
        });
    });
};
