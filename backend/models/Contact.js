import mongoose from "mongoose";


const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true
    },
    countryCode: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    company: {
      type: String
    },
    tag: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
