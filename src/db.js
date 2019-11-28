import Sequelize from "sequelize";

const db = new Sequelize("sekolahg", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

function auth() {
    db.authenticate()
        .then(() => {
            console.log("db connected");
        })

        .catch(err => {
            console.log(err);
            setTimeout(() => {
                auth();
            }, 500);
        });
}

auth();
export default db;