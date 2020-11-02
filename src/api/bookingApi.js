import bookings from "./bookingData.json";

/**
 * Returns all bookings. We are returning a promise to simulate an asynchronous call to a backend.
 */
export const getBookings = () => Promise.resolve(bookings);
