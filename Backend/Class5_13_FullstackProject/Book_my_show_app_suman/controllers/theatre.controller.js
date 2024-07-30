import Theatre from "../model/theatre.model.js";

// add theatre
export const addTheatre = async (req, res) => {
  try {
    const newTheatre = new Theatre(req.body);
    newTheatre.owner = req.user.id;
    const theatreDetails = await newTheatre.save();
    res.send({
      success: true,
      ...theatreDetails,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

// get theatre by Id
export const getTheatreById = async (req, res) => {
  try {
    const theatre = await Theatre.findById(req.params.theatreId);

    if (!theatre) {
      return res.status(404).send({
        success: false,
        message: "Theatre Not Found",
      });
    }
    res.send({
      success: true,
      ...theatre,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

// get all theatres
export const getAllTheatre = async (req, res) => {
  try {
    const ownerId = req.query.ownerId;
    const filter = {};
    if (ownerId) {
      filter.owner = ownerId;
    }
    const theatreDetails = await Theatre.find({ filter });
    res.send({
      success: true,
      ...theatreDetails,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

// // get theatres by owners

// export const getTheatreByOwner = async (req, res) => {
//   try {
//     const theatres = await Theatre.find({ owner: req.user.id });
//     res.send({
//       success: true,
//       ...theatres,
//     });
//   } catch (e) {
//     res.status(500).send({
//       success: false,
//       message: e.message,
//     });
//   }
// };

// update theatre

export const updateTheatre = async (req, res) => {
  try {
    // const updatedTheatre = await Theatre.findByIdAndUpdate(
    //   req.params.theatreId,
    //   req.body,
    //   { new: true, runValidators: true }
    // );
    const updatedTheatre = await Theatre.updateOne(
      { _id: req.params.theatreId },
      { $set: req.body }
    );
    if (!updatedTheatre) {
      return res.status(404).send({
        success: false,
        message: "Theatre not found",
      });
    }
    res.send({
      success: true,
      theatre: updatedTheatre,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

// delete theatre

export const deleteTheatre = async (req, res) => {
  try {
    const deletedTheatre = await Theatre.findByIdAndDelete(
      req.params.theatreId
    );
    if (!deletedTheatre) {
      return res.status(404).send({
        success: false,
        message: "Theatre not found",
      });
    }
    res.send({
      success: true,
      message: "Theatre deleted successfully",
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      message: e.message,
    });
  }
};

//Deactivate Theatre
//Activate Theatre
