const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mulitipleFileSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,

    },
    address: {
      type: String,
      required: true,

    },
    email: {
      type: String,
      required: true,

    },
    phoneNumber: {
      type: Number,
      required: true,

    },
    password: {
      type: String,
      required: true,

    },

    files: [Object],
  },
  { timestamps: true }
);

module.exports = mongoose.model("MultipleFile", mulitipleFileSchema);
