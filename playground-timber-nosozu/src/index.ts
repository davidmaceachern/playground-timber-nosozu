import { Timber } from "@timberio/node";

import { Nodesozu } from '@nodesozu';


// TODO: API KEY from file
const logger = new Timber("YOUR_API_KEY", "YOUR_SOURCE_ID");
const client = new Nodesozu()

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
