import * as amqp from "amqplib";

import config from "./config/env";
const port = config.port;

const msg = { number: process.argv[2] }; // can be object of any kind
//INFO  Here we are sending a number as a key and value is sent via argument when we run publisher

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
