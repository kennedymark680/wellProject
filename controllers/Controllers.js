const WellData = require('../models/WellData')

const getWellData = async (req, res) => {
  try {
    const wellData = await WellData.find()
    return res.status(200).send(wellData)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getWellData
}
