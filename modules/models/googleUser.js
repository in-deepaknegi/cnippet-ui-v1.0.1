import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

const Google_user = models.Google_user || mongoose.model("Google_user", userSchema);
export default Google_user;
