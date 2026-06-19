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
 
 
/** contoh ai dengan parameter text **/
module.exports = {
    name: "openai",
    path: "/api/ai",
    type: "get",
    example: "hello ai!",
    description: "ai with luminAI",
    tags: "AI",
    hidden: false,
    isDisable: false,
    params: {
        text: "hi lumin"
    },
    code: async (req, res, { axios, scrap }) => {
            const text = req.query.text
            if (!text) {
                return res.status(400).json({ error: "dimana teksnya?" })
            }
            /** src/lib/scraper/ai/aites.js **/
                      /** scrap (folder) (file) **/
            let d = await scrap.ai.tesku(text)
            res.json(d)
    }
}