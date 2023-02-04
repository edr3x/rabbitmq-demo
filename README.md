# Rabbitmq demo

## Start the Rabbit mq server

- Open terminal in project directory and run

```sh
docker-compose up
```

## Start consumer service to watch for message emited by publisher

```sh
yarn run consume
```

## Run publisher service to send the message

```sh
yarn run publish msg=<messge>
```

>Note:\
> We don't have to send message via terminal always, it is just done in this way for demo purpose only
