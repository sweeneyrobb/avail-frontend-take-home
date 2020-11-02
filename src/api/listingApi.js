import listings from "./bookingData.json";

/**
 * Returns all listings. We are returning a promise to simulate an asynchronous call to a backend.
 */
export const getListings = () => Promise.resolve(listings);
