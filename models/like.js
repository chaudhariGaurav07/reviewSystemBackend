import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
  reviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const likeModel = mongoose.model("Like", likeSchema);
export default likeModel;
