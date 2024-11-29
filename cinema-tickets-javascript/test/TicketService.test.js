import TicketTypeRequest from "../src/pairtest/lib/TicketTypeRequest";
import TicketService from "../src/pairtest/TicketService";

describe("AccountID validation", () => {
  const newTickets = new TicketService();
  test("An error is thrown if AccountID is not a number", async () => {
    expect(() => newTickets.purchaseTickets("ABCDDEEEE")).toThrowError(
      "Your account ID must be an integer"
    );
  });
  test("AccountID is a number greater than 0", async () => {
    // const newTickets = new TicketService();
    expect(() => newTickets.purchaseTickets(0)).toThrowError(
      "Your account ID must be a number greater than 0"
    );
  });
});

describe("Valid tickets have been requested", () => {
  const newTickets = new TicketService();
  test("An error is thrown if no tickets are requested", async () => {
    expect(() => newTickets.purchaseTickets(100)).toThrowError(
      "You must add at least one ticket"
    );
  });
  test("An error is thrown if more than 20 tickets are requested", async () => {
    let ticketTypeRequests = [];
    for (let i = 1; i <= 21; i++) {
      const ticket = new TicketTypeRequest("ADULT", 1);
      ticketTypeRequests.push(ticket);
    }
    // const newTickets = new TicketService();
    expect(() =>
      newTickets.purchaseTickets(100, ...ticketTypeRequests)
    ).toThrowError("The maximum number of tickets you can purchase is 20");
  });
  test("An error is thrown if no ADULT ticket is purchased", () => {
    let ticketTypeRequests = [];
    ticketTypeRequests.push(new TicketTypeRequest("CHILD", 2));
    ticketTypeRequests.push(new TicketTypeRequest("INFANT", 1));
    expect(() =>
      newTickets.purchaseTickets(100, ...ticketTypeRequests)
    ).toThrowError("There must be an Adult included in the ticket purchase");
  });
});
