require("../../../configs")
let SH = require("../../../configs")
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

function generateApiDocs(dir) {
    const apiDocs = {
        "name": SH.name,
        "version": SH.version,
        "description": SH.description,
        "bannerImage": SH.banner,
        "header": {
            "status": SH.status
        },
        "apiSettings": {
            "creator": SH.creator
        },
        "categories": []
    }

    const categoriesMap = new Map()

    function readRoutes(currentDir) {
        const files = fs.readdirSync(currentDir)
        for (const file of files) {
            const filePath = path.join(currentDir, file)
            const stat = fs.statSync(filePath)

            if (stat.isDirectory()) {
                readRoutes(filePath)
            } else if (file.endsWith(".js")) {
                    delete require.cache[require.resolve(filePath)]
                    const route = require(filePath)
                    if (!route.name 
                        || !route.path 
                        || !route.description 
                        || !route.tags 
                        || route.hidden) {
                        if (!route.hidden)
                            continue
                    }

                    const categoryName = route.tags

                    const codeString = route.code.toString()
                    const paramMatch = codeString.match(/req\.query\.(\w+)/)
                    const paramName = paramMatch ? paramMatch[1] : "text"
                    
                    const routeItem = {
                        name: route.name,
                        desc: route.description,
                        path: route.path,
                        status: route.isDisable ? "Offline" : SH.status,
                        example: route.example || "No example provided",
                        /*params: {
                            [paramName]: `Parameter ${paramName} dibutuhkan`
                        }*/
                        params: route.params || {}
                    }

                    if (!categoriesMap.has(categoryName)) {
                        categoriesMap.set(categoryName, {
                            name: categoryName,
                            items: []
                        })
                    }
                    categoriesMap.get(categoryName).items.push(routeItem)
            }
        }
    }

    readRoutes(dir)
    apiDocs.categories = Array.from(categoriesMap.values())
    return apiDocs
}

function generateJson(directory, outputPath) {
        const apiDocsObject = generateApiDocs(directory)
        fs.writeFileSync(outputPath, JSON.stringify(apiDocsObject, null, 2)) 
}

module.exports = { generateJson }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
})
