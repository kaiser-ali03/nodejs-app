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
 
 
/** contoh kek respon data api status **/
module.exports = {
    name: "examples",
    path: "/example", 
    type: "get",
    example: "hello world",
    description: "hello wordl",
    tags: "exmp",
    hidden: false,
    isDisable: false,
    code: async (req, res, { axios }) => {
        res.json({ message: "this is example get", receivedData: req.body })
    }
}