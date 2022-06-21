const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WellData = new Schema(
  {
    name: { type: String, required: false },
    data: { type: String, required: false },
    published_at: { type: String, required: false },
    coreid: { type: String, required: false },
    userid: { type: String, required: false },
    version: { type: Number, required: false },
    public: { type: Boolean, required: false },
    productID: { type: Number, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('WellData', WellData)
