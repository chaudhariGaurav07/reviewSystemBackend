import Like from "../models/like.js";
import Review from "../models/review.js";
export const likeReviews = async (req, res) => {
  try {
    const { reviews, student } = req.body;
    const likes = new Like({
      reviews,
      student,
    });
    const savedLikes = await likes.save();
    const updatedReviews = await Review.findByIdAndUpdate(
      reviews,
      { $push: { likes: savedLikes._id } },
      { new: true }
    )
      .populate("likes")
      .exec();
    res.json({
      reviews: updatedReviews,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while liking reviews",
      
    });
    
  }
};
