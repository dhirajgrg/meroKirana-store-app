//CORE MODULES
import express from 'express'

//THIRD PARTY MODULES
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

//CUSTOM MODULES
import AppError from './utils/app-error.util.js'
import globalError from './controllers/error-controller.js'


//INITIALIZATION APP
const app =express()

//LOGGERS FOR DEVELOPMENT
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}

//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(cookieParser())

//MAIN ROUTES


//UNHANDLED ROUTES
app.use(/.*/,(req,res,next)=>{
    next(new AppError(`unable to find ${req.originalUrl} route on this server`,404))
})


//GLOBAL ERROR HANDLED MIDDLEWARE
app.use(globalError)


//EXPORT APP
export default app;