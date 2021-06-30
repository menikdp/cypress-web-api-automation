const data_in_db = require('../../fixtures/database.json')
const data_ui = require('../../fixtures/data_ui.json')

describe("Transaction data validation", () => {
  data_in_db.forEach(($data, index) => {
    it('Data number:' + index, () => {
      cy.validateArrays(data_ui[index].id, $data.id, "ID")
      cy.validateArrays(data_ui[index].username, $data.username, "Username")
      cy.validateArrays(data_ui[index].source_bank, $data.source_bank, "Source_bank")
      cy.validateArrays(data_ui[index].destination_bank, $data.destination_bank, "Destination_bank")
      cy.validateArrays(data_ui[index].amount, $data.amount, "Amount")
    })
  })
});