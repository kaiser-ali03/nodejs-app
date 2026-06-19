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
 
 
/** contoh kalok butuh banyak input parameter **/
module.exports = {
    name: "saying",
    path: "/api/tools/generate",
    type: "get",
    description: "saying",
    tags: "TOOLS",
    params: {
        text: "aku banga jadi jawa",
        url: "tes aja",
        size: "ngantuk",
        nama: "ikbal gntng"
    },  
    hidden: false,
    isDisable: false,
    code: async (req, res) => {
            const { text, url, size, nama } = req.query
            if (!text || !size || !nama) {
                return res.status(400).json({ 
                    error: "Parameter *text*, *size*, dan *nama* wajib diisi." 
                })
            }
            res.json({
                data: { text, url, size, nama }
            })
    }
}