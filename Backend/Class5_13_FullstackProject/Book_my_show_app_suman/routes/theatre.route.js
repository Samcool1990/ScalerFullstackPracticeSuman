import express from "express";
import {
  addTheatre,
  deleteTheatre,
  getAllTheatre,
  getTheatreById,
  updateTheatre,
  // getTheatreByOwner,
} from "../controllers/theatre.controller.js";
import AuthMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// add theatre
router.post("/", AuthMiddleware, addTheatre);

// get theatre by Id
router.get("/:theatreId", AuthMiddleware, getTheatreById);

// //Get theatre by owner
// router.get("/:ownerId", AuthMiddleware, getTheatreByOwner);

// get all theatres
// get theatres by owners
router.get("/", AuthMiddleware, getAllTheatre);

// update theatre
router.put("/:theatreId", AuthMiddleware, updateTheatre);

// delete theatre
router.delete("/:theatreId", AuthMiddleware, deleteTheatre);

export default router;
