import express  from "express";
import {dirname,join} from "path"
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js"
const app =  express()

//agregando el directorio absoluto de nuestra aplicacion
const __dirname = dirname(fileURLToPath(import.meta.url))

//view engine modulo que permite aplicar logica de javascript
app.set("view engine","ejs")

//seteando la carpeta de views, indicando el directorio
app.set("views",join(__dirname,"views"))

//haciendo que la app use las rutas de indexRoutes
app.use(indexRoutes)

//aniadiendo codigo estatico, en este caso css
app.use(express.static(join(__dirname,"public","css")))

app.listen(3000)
console.log("server is listening on port",3000)