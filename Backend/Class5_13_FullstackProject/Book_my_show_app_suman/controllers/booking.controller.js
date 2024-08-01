import { model } from "mongoose"
import Booking from "../model/booking.model"

export const makePayment = async(req,res) => {
    try {
        //make payment to thirdparty gateway
    }catch(e){
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
}


export const createBooking = async(req,res) => {
    try {
        //UserID > req.user
        //transactionId > req.transactionId (get transaction detaisl from 'makePayment')
        //Seats > req.seats (verify if selected seats are available, update bookedseates in show db )
        //showId >req.showid
        const bookingDetails = req.body;
        const booking = new Booking(bookingDetails);
        booking.user = req.user.id;
        await booking.save();

        //updated BookedSeats in show collection

    }catch(e){
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
}

export const getBookingDetails = async(req,res) => {
    try {
        const bookingId = req.query;
        const bookingDetails = await Booking.findById(bookingId)
        .populate('user')
        .populate({path:'show',
            model:'shows',
            populate:{
                path: 'movie',
                model: 'movies'
            }})
        .populate({path:'movie',
            model:'movies',
            populate:{
                path: 'movie',
                model: 'movies'
            }
        });

    }catch(e){
        res.status(500).send({
            success: false,
            message: e.message
        })
    }
}
