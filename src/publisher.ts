import * as amqp from "amqplib";

import config from "./config/env";
const port = config.port;

const msg = { number: process.argv[2] };

async function connect() {
  try {
    const connection = await amqp.connect(`amqp://localhost:${port}`);
    const channel = await connection.createChannel();

    await channel.assertQueue("jobs");

    // send message to queue
    channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));

    console.log(`Job sent successfully ${msg.number}`);
  } catch (error) {
    console.log(error);
  }
}

connect();
