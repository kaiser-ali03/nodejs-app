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

/** contoh misalnya untuk random image **/
module.exports = {
    name: "Ship Card",
    path: "/api/canvas/welcome",
    type: "get",
    example: "",
    description: "nyocot.",
    tags: "Image Creator",
    hidden: false,
    isDisable: false,
    code: async (req, res, { axios }) => {
            let r = await axios.get("https://api.siputzx.my.id/api/canvas/ship?avatar1=https%3A%2F%2Fi.ibb.co.com%2FYc4MVdV%2Fimages.jpg&avatar2=https%3A%2F%2Fi.ibb.co.com%2FKKYxYQr%2Fdownload.jpg&background=https%3A%2F%2Fi.ibb.co%2F4YBNyvP%2Fimages-76.jpg&persen=20", {
                responseType: "arraybuffer"
            })        
            res.set("Content-Type", "image/png")
            res.send(r.data)
    }
}