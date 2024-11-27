import TicketTypeRequest from "./lib/TicketTypeRequest.js";
import InvalidPurchaseException from "./lib/InvalidPurchaseException.js";

class TicketService {
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

  // validate ticket type requests
  #validateTicketType(ticketTypeRequests) {
    // check that there are ticket type requests
    // check that they are all valid ticket type requests
    // if there are valid ticket requests check an adult is present
    // determine the total number of tickets included in all the ticket type requests
    // if there are more than 20, throw an error
  }

  // calculate total and pay for tickets

  // reserve seats

  purchaseTickets(accountId, ...ticketTypeRequests) {
    // throws InvalidPurchaseException
  }
}
