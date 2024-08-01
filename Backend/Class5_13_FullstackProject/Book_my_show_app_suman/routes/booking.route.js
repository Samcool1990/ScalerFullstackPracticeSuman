import express from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import isTheatreOwnerMiddleware from "../middleware/is_Theatre_Owner.middleware.js";
import {createBooking, makePayment, getBookingDetails} from "../controllers/booking.controller.js";

const router = express.Router();

//Make Payment
router.post("/make-payment", AuthMiddleware, makePayment);


// Add booking
router.post("/", AuthMiddleware, isTheatreOwnerMiddleware, createBooking);

// booking details
router.get("/", AuthMiddleware, isTheatreOwnerMiddleware, getBookingDetails);

export default router;
