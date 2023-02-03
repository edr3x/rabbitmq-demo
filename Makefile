up:
	docker-compose up -d

down:
	docker-compose down

consume:
	yarn run consume

publish:
	yarn run publish $(msg)
