import db from "./db";
import Express from "express";

const server = Express();

module.exports = {
	ambilDataSiswa: (request, response) => {
		db.query("SELECT * FROM siswa", {
			type: db.QueryTypes.SELECT
		})
			.then(data => {
				response.json(data);
			})
			.catch(err => {
				response.status(500).json(err);
			});
	},
	cariDataSiswa: (request, response) => {
		let stringCari = request.query.cari;

		db.query(`SELECT * FROM siswa WHERE nama LIKE '%${stringCari}%'`, {
			type: db.QueryTypes.SELECT
		})
			.then(data => {
				response.json(data);
			})
			.catch(err => {
				response.status(500).json(err);
			});
	},
	simpanDataSiswa: (request, response) => {
		//
		db.query(
			`INSERT INTO siswa (nis, nama, jk, kelas, alamat) values ('${request.body.nis}', '${request.body.nama}', '${request.body.jk}', '${request.body.kelas}', '${request.body.alamat}')`
		)
			.then(() => response.status(201).end())
			.catch(err => response.status(500).json(err));
	},
	simpanEditDataSiswa: (request, response) => {
		db.query(
			`UPDATE siswa SET
			nama = '${request.body.nama}',
			jk = '${request.body.jk}',
			kelas = '${request.body.kelas}',
			alamat = '${request.body.alamat}'
			WHERE nis = ${request.params.nis}
		`
		)
			.then(() => {
				response.status(202).end();
			})
			.catch(err => {
				response.status(500).json(err);
			});
	},
	deleteDataSiswa: (request, response) => {
		let { nis } = request.params;
		db.query(`DELETE FROM siswa WHERE nis=${nis}`)
			.then(() => {
				response.status(202).end();
			})
			.catch(err => {
				console.log(err).json(err);
			});
	},
	login: (req, res) => {
		// let username = req.body.username;
		// let password = req.body.password;
		const {username, password} = req.body;

		db.query(`SELECT * FROM users WHERE username = "${username}" AND password = "${password}"`, {type: db.QueryTypes.SELECT})
		.then(data => {
			if(data.length == 1){
				res.json(data[0])
			}else{
				res.status(503).end()
			}
		})
		.catch(err => {
			console.log(err)
			res.status(500).json(err);
		})
	}
};
