const app = require('express')()
const PORT = 8080

app.get('t/shirt', (req, res) => {
  res.status(200).send({
    tshirt: 'T-shirt',
    size: 'large'
  })
})

app.listen(
  PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
)