import {Request, Response} from "express";
import {MenuController} from '../controllers/menu/menuControllers'

export class MenuRoutes {
    public menuController: MenuController = new MenuController();

    public routes(app):void  {
        app.route('/')
            .get((req:Request,res:Response)=>{
                res.status(200).send({
                    message : "GET successfully in menu !!!!"
                })
            })

        app.route('/menus')
            //all menus
            .get(this.menuController.getAllMenu)
            //create menu
            .post(this.menuController.addNewMenu)

        app.route('/menu/:menuId')
            //details menu
            .get(this.menuController.getMenuById)
    }
}