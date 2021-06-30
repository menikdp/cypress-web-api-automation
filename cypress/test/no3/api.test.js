import { getListUserSchema } from "../../fixtures/GetListUserSchema";


describe("Testing API Endpoints Using Cypress", () => {

  it("Test GET List Users", () => {
    cy.request("https://reqres.in/api/users?page=3")
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('page', 3);
          expect(response.body).to.have.property('per_page', 6);
          expect(response.body).to.be.jsonSchema(getListUserSchema);
          
    })
  })

  it("Test GET List Users Without Param", () => {
    cy.request("https://reqres.in/api/users")
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.jsonSchema(getListUserSchema);
    })
  })

  it("Test POST Create User", () => {
    cy.request({
         method: 'POST',
         url: "https://reqres.in/api/users",
         body: {
             "name": "Reqres",
             "job": "Admin"
         }
      }).then((response) => { 
          console.log(response)
          expect(response.status).to.eq(201); 
          expect(response.body).to.have.property("name", "Reqres");
          expect(response.body).to.have.property("job", "Admin");
          assert.hasAllKeys(response.data, ["name", "job", "id", "createdAt"]);
          assert.isString(response.data.name);
          assert.isString(response.data.job);
          assert.isString(response.data.id);
    })
  })

})