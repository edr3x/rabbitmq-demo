import * as amqp from "amqplib";

import config from "./config/env";
const port = config.port;

async function connect() {
  try {
    const connection = await amqp.connect(`amqp://localhost:${port}`);
    const channel = await connection.createChannel();

    await channel.assertQueue("jobs");

    // consume message from queue
    channel.consume("jobs", (message: any) => {
      const input = JSON.parse(message.content.toString());

      console.log(`Received job with input ${input.number}`);

      channel.ack(message); // acknowledges message when re-connecting to queue which clears previous all messages from queue
    });

    console.log("Waiting for messages...");
  } catch (error) {
    console.log(error);
  }
}

connect();
