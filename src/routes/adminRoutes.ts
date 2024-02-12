import { Router } from "express";
import { getAddEvent, getAllOrders, getEditEvent, getEvents, postAddEvent, postDeleteEvent, putEditEvent } from "../controllers/adminCtrl";

export const adminRouter = Router();

adminRouter.get('/events',getEvents);
adminRouter.get('/add-event',getAddEvent); //Para presentar el formulario
adminRouter.post('/add-event',postAddEvent); //Para recibir los datos del formulario
adminRouter.get('/add-event/:eventId', getEditEvent);
adminRouter.put('/edit-event', putEditEvent);
adminRouter.delete('/delete-event', postDeleteEvent);
adminRouter.get('/orders', getAllOrders);