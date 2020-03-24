const express = require('express')
const cors = require('cors')
const routes = require('./routes')

/**
 * HTTP Methods:
 * 
 * GET: Fetch info from back-end
 * POST: Create info in back-end
 * PUT: Update info in back-end
 * DELETE: Delte info in back-end
 */

/**
 * Params types: 
 * 
 * Query params
 * Route params
 * Body params
 */

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333);