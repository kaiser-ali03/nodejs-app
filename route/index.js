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
 
 
/** page utama, cek di folder src/page/index.html **/
module.exports = {
    name: "Home",
    path: "/", 
    type: "get",
    hidden: false,
    isDisable: false,
    code: async (req, res, { axios }) => {
        res.sendFile("/index.html")
    }
}