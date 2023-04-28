require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT
const route = require("./router/route")

//Swagger add>>>>>
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');

const swaggerDocument = YAML.load(path.join(__dirname, './openapi.yaml'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
//<<<< swagger done

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/v1", route)

app.listen(port, () => {
  console.log(`Server connection success on http://localhost:${port}/api/v1/`)
})
