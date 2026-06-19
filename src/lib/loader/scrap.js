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


exports.loadScrapers = (dir) => {
  let scrapers = {}
  for (const folder of fs.readdirSync(dir)) {
    let folderPath = path.join(dir, folder)
    if (!fs.statSync(folderPath).isDirectory()) continue
    scrapers[folder] = {}
    for (const file of fs.readdirSync(folderPath)) {
      if (file.endsWith(".js")) {
        let filePath = path.join(folderPath, file)
        Object.assign(scrapers[folder], require(filePath))
      }
    }
  }
  return scrapers
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  delete require.cache[file]
})