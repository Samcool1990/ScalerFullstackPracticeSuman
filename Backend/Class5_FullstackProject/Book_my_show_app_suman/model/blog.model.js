import mongoose, { model, Schema } from "mongoose";

// const blogSchema = new Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "Title is required"],
//       trim: true,
//       minLength: [10, "Min 10 characters are required"],
//     },
//     author: {
//       type: String,
//       required: true,
//     },
//     content: String,
//   },
//   { timestamps: true }
// );

// const Blog = model("blog", blogSchema);

// export default Blog;

const bookingSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    seats: {
      type: [String],
      default: [],
    },
    showId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "shows",
    },
  },
  { timestamps: true }
);

const Booking = model("booking", bookingSchema);

export default Booking;
