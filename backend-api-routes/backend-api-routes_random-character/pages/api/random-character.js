import Chance from "chance";

const chance = new Chance();

// write a handler function which responds with...
export default function handler(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterHandle: chance.twitter(),
    geoHash: chance.geohash(),
    // ... some more keys here ...
  };
  res.status(200).json(character); // ... a 200 status code and with the return value of character object with random information, parsed with the .json() method
}
