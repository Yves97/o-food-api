import * as mongoose from 'mongoose'
import {MenuSchema} from '../../models/Menu/menuModel'
import { Request, Response } from 'express';


const Menu = mongoose.model('Menu', MenuSchema);


export class MenuController{

    public getAllMenu(req:Request,res:Response){
        Menu.find({},(err,menus)=>{
            if(err){
                res.send(err)
            }
            res.status(200).json(menus)
        })
    }

    public addNewMenu(req:Request,res:Response){
        let newMenu = new Menu(req.body)
        newMenu.save((err,menu)=>{
            if(err){
                res.send(err)
            }
            res.json(menu)
        })
    }
    public getMenuById(req:Request,res:Response){
        Menu.findById(req.params.menuId,(err,menu)=>{
            if(err){
                res.send(err)
            }
            res.json(menu)
        })
    }
}