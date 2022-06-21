const { model } = require('mongoose')
const WellData = require('./WellData')

const WellData = model('WellData', WellData)

module.exports = {
  WellData
}
