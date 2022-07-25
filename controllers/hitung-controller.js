
const { History } = require('../models');

const hitung = (req, res) => {
    const angka1 = req.body.angka1
    const angka2 = req.body.angka2
    const tipe = req.body.tipe

    let hasil = 0
    let symbol = ""
    switch (tipe.toUpperCase()) {
        case "TAMBAH":
            hasil = angka1 + angka2;
            symbol = "+"
            break;
        case "KURANG":
            hasil = angka1 - angka2;
            symbol = "-"
            break;
        case "KALI":
            hasil = angka1 * angka2;
            symbol = "*"
            break;
        case "BAGI":
            hasil = angka1 / angka2;
            symbol = "/"
            break;
        default:
            hasil = 'Tipe tidak terdaftar'
    }
    History.create({
        angka1: angka1,
        angka2: angka2,
        tipe: tipe,
        hasil: hasil,
        formula: angka1 + symbol + angka2 + "=" + hasil
    })

res.status(200).send({
    hasil: hasil
})
}

const getAllHistory = (req, res) => {
        History.findAll()
            .then((data) => {
                return res.status(200).json(data)
            })
            .catch(err => {
                return res.status(500).json(err)
            })
    }




module.exports = {
    getAllHistory,
    hitung,
}

