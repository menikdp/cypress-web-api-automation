describe('Check button in landing page', () => {
  beforeEach('Visit Flip landing page', () => {
    cy.visit('https://flip.id/')
  })

  it('Check Masuk button', () => {
    cy.contains('Masuk')

    cy.xpath("//a[.='Masuk']")
      .click()

    cy.url().should('include', '/login')
  })

  it('Check Karir button', () => {
    cy.contains('Karir')
      .click({force: true})

    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("https://career.flip.id/jobs")
    })
  })

  it('Check Biaya button', () => {
    cy.contains('Biaya')
      .click()

    cy.url().should('include', '/biaya')
  })

  it('Check Bantuan button', () => {
    cy.contains('Bantuan')
      .click()

    cy.on("url:changed", (newUrl) => {
      expect(newUrl).to.contain("https://flipid.zendesk.com/hc/id")
    })
  })
})