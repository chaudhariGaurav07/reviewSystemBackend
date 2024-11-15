import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  reviews: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
});
const reviewModel = mongoose.model("Review", reviewSchema);
export default reviewModel;
