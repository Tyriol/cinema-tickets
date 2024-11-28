import TicketTypeRequest from "../src/pairtest/lib/TicketTypeRequest";

describe("TicketTypeRequests are validated correctly", () => {
  test("Error is thrown if incorrect Ticket type is submitted", async () => {
    expect(() => {
      new TicketTypeRequest("Teenager", 2);
    }).toThrow(Error);
  });

  test("Error is thrown if ticket number is not an integer", async () => {
    expect(() => {
      new TicketTypeRequest("Adult", "2");
    }).toThrow(Error);
  });
});

test("TicketTypeRequests return a valid response", () => {
  const newTicket = new TicketTypeRequest("ADULT", 2);
  expect(newTicket.getNoOfTickets()).toEqual(2);
  expect(newTicket.getTicketType()).toEqual("ADULT");
});
