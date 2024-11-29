import TicketService from "../src/pairtest/TicketService";

describe("AccountID validation", () => {
  test("An error is thrown if AccountID is not a number", async () => {
    const newTickets = new TicketService();
    expect(() => newTickets.purchaseTickets("ABCDDEEEE")).toThrowError(
      "Your account ID must be an integer"
    );
  });
  test("AccountID is a number greater than 0", async () => {
    const newTickets = new TicketService();
    expect(() => newTickets.purchaseTickets(0)).toThrowError(
      "Your account ID must be a number greater than 0"
    );
  });
});
