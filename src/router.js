const siswa = require("./routersiswa");
import Express from 'express';

const server = Express();

export function Route(server) {
	server.get("/data", siswa.ambilDataSiswa);
	server.get("/cari", siswa.cariDataSiswa);
	server.post("/simpan", siswa.simpanDataSiswa);
	server.delete("/hapus/:nis", siswa.deleteDataSiswa);
	server.put("/simpandata/:nis", siswa.simpanEditDataSiswa);
	server.post("/login", siswa.login);
	server.use("/image", Express.static("./image"));
}
