import { Router } from "express";
import { deleteCartItem, getCart, getCheckOut, getEventById, getEvents, getIndex, getOrder, postCart } from "../controllers/shopCtrl";

export const shopRouter =  Router();

shopRouter.get('/',getIndex);
shopRouter.get('/events',getEvents);
shopRouter.get('/events/:eventId',getEventById);
shopRouter.post('/add-to-cart', postCart);
shopRouter.get('/cart', getCart);
shopRouter.delete('/cart-delete-item', deleteCartItem);
shopRouter.get('/orders', getOrder);
shopRouter.get('/checkout', getCheckOut);