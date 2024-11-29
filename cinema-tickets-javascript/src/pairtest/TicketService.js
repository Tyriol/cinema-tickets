import TicketTypeRequest from "./lib/TicketTypeRequest.js";
import InvalidPurchaseException from "./lib/InvalidPurchaseException.js";

export default class TicketService {
  // define prices
  #PRICES = {
    ADULT: 20,
    CHILD: 10,
    INFANT: 0,
  };

  // validate account id
  #validateAccountID(accountId) {
    if (accountId < 1) {
      throw new InvalidPurchaseException(
        "Your account ID must be a number greater than 0",
        "Account ID error"
      );
    } else if (!Number.isInteger(accountId)) {
      throw new InvalidPurchaseException(
        "Your account ID must be an integer",
        "Account ID error"
      );
    }
  }
  // TODO: add tests

  // validate ticket type requests
  #validateTicketType(ticketTypeRequests) {
    // check that there are ticket type requests
    if (ticketTypeRequests.length === 0) {
      throw new InvalidPurchaseException(
        "You must add at least one ticket",
        "Ticket quantity error"
      );
    }
    // if there are more than 20, throw an error
    let ticketsRequested = 0;
    ticketTypeRequests.map((ticketTypeRequest) => {
      const numOfTickets = ticketTypeRequest.getNoOfTickets();
      ticketsRequested += numOfTickets;
    });
    if (ticketsRequested > 20) {
      throw new InvalidPurchaseException(
        "The maximum number of tickets you can purchase is 20",
        "Ticket quantity error"
      );
    }
    // check that they are all valid ticket type requests
    // if there are valid ticket requests check an adult is present
    // determine the total number of tickets included in all the ticket type requests
  }

  // calculate total and pay for tickets

  // reserve seats

  purchaseTickets(accountId, ...ticketTypeRequests) {
    // throws InvalidPurchaseException
    this.#validateAccountID(accountId);
    this.#validateTicketType(ticketTypeRequests);
  }
}
