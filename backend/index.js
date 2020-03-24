const express = require('express')

const app = express()

// app.use(json())

app.get('/', (req, res) => {
  res.json({ 
    evento: "OmniStack11",
    aluno: "Gabriel Gigante"
  })
})

app.listen(3333);