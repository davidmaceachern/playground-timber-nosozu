import { Timber } from "@timberio/node";
import { Nosozu } from 'nosozu'; 
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
const socketPath = "this"
const client = new Nosozu(socketPath)
client.run()