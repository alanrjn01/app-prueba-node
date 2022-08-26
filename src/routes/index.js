import {Router} from "express"

const router = Router()


//req = request
//res = response
//haciendo que la respuesta renderice un archivo 'index' y le paso un objeto con la propiedad
//title al front-end
router.get("/",(req,res)=>res.render("index",{title:"first website with node"}))

//creando distintas rutas

router.get("/contact",(req,res)=>res.render("contact",{title:"contact page"}))
router.get("/about",(req,res)=>res.render("about",{title:"about page"}))

export default router
