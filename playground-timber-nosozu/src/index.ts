import { Timber } from "@timberio/node";
// import { Nodesozu } from '@nodesozu'; TODO: might need to fix type definitions
require('dotenv').config()

export function test_this() {
  const apiKey = process.env.TIMBER_KEY;
  if (!apiKey) {
    throw new Error('No API Key');
  }
  const logger = new Timber(apiKey, "45016");
  logger.info("Hello world")
}

// test_this()

//const client = new Nodesozu()