console.clear()
require("./configs")
/**
 * Copyright © 2025 [ balxzzy ]
 *
 * All rights reserved. This source code is the property of [ Shiina Team ].
 * Unauthorized copying, distribution, modification, or use of this file,
 * via any medium, is strictly prohibited without prior written permission.
 *
 * This software is protected under international copyright laws.
 *
 * Contact: [ pa424013@gmail.com ]
 * GitHub: https://github.com/balxz
 */

app.use((req, res, next) => {
    let awal = Date.now()
    res.on("finish", () => {
        let durasi = Date.now() - awal
        let time = new Date().toLocaleTimeString("id-ID", { hour12: false })
        let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress
        console.log(`[${chalk.yellow(time)}] ${chalk.red(req.method)} ${chalk.white(req.originalUrl)} ${chalk.blue(durasi + "ms")} ${chalk.green(ip)}`
)
    })
    next()
})
app.use(express.static(path.join(__dirname, "src/pages")))

let { generateJson } = require("./src/lib/loader/docs")
generateJson(
    path.join(__dirname, "route"), 
    path.join(__dirname, "src/pages/sh/sh.json")
)
let { loadRoutes } = require("./src/lib/loader/router")
loadRoutes(path.join(__dirname, "route"))

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "src/pages/404/index.html"))
})

app.listen(3000, () => {
    console.log(chalk.yellow("JANGAN DIPERJUAL BELIKAN JIKA KEADAAN FITUR MASIH DEFAULT"))
    console.log(
        chalk.blue.bold(
            `${chalk.white("|")} IG: @iqstore78\n${chalk.white("|")} TT: @iqstore78\n${chalk.white("|")} GH: balxz`
        )
    )
    console.log(chalk.yellow("http://localhost:3000"))
    open("http://localhost:3000")
})

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
})