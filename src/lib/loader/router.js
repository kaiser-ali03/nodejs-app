require("../../../configs")
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

let home = path.join(__dirname, "../../")
let mainten  = path.join(home, "pages/maintenance/index.html")

exports.loadRoutes = async function loadRoutes(dir) {
    for (const file of fs.readdirSync(dir)) {
        let filePath = path.join(dir, file)
        if (fs.statSync(filePath).isDirectory()) {
            loadRoutes(filePath)
            continue
        }

        try {
            delete require.cache[require.resolve(filePath)]
            let route = require(filePath)
            if (!route.path || !route.type) {
                console.warn(chalk.red(`[ ROUTE ERROR ] ${file} - Missing "path" or "type"`))
                continue
            }

            const {
                path: routePath,
                type,
                isDisable = false,
                hidden = false,
                code
            } = route

            let endpoint = routePath.startsWith("/") ? routePath : "/" + routePath

            app[type](endpoint, async (req, res) => {
                if (isDisable) {
                    return res.sendFile(mainten)
                }

                try {
                    let scrap = require("./scrap").loadScrapers(
                        path.join(__dirname, "../scraper")
                    )
                    //console.log(scrap)
                    let config = require("../../../configs")
                    code(req, res, { axios, scrap, config })
                } catch (e) {
                    console.error(chalk.red(`${file}\n${e}`))
                    res.status(500).json({
                        status: 500,
                        message: "Try Again Next Time."
                    })
                }
            })

            if (!hidden) {
                console.log(
                    chalk.blue("[ ROUTE LIST → ]"),
                    chalk.yellow(endpoint),
                    isDisable ? chalk.red("<disabled>") : chalk.green("<active>")
                )
            }
        } catch (err) {
            console.error(`[ ROUTE ERROR ]\n${filePath}\n${err}`)
        }
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
})
