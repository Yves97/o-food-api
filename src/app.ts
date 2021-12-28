// const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
import {MenuRoutes} from './routes/menuRoutes'
import * as mongoose from "mongoose";


class App {
    public app 
    public menuRoutes : MenuRoutes = new MenuRoutes()
    public mongoUrl: string = "mongodb://localhost:27017/restaurant"

    constructor(){
        this.app = express()
        this.config()
        this.menuRoutes.routes(this.app)
        this.mongoSetup()
    }

    private config():void {
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended : false}))
    }
    private mongoSetup():void{
        // mongoose.Promise = global.Promise
        mongoose.connect(this.mongoUrl)

        
    }
}

export default new App().app