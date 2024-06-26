const request = require("supertest");
const app = require("../index");

describe("User API", () => {
  it("should create a new user", async () => {
    const res = await request(app).post("/api/worko/user").send({
      email: "test@example.com",
      name: "John Doe",
      age: 30,
      city: "New York",
      zipCode: "10001",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });

  it("should get a list of users", async () => {
    const res = await request(app).get("/api/worko/user");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Todo: Add more tests for other endpoints in future
});
