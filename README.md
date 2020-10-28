# Backend of My-Devices

My-Devices is a web app that allows devices in a network to publish stats about their system. It also provides an endpoint for the detection script to post it's findings.

## Docker-compose

To start the app in development mode:

```bash
docker-compose -f docker-compose.development.yaml up
```

or force a rebuild

```bash
docker-compose -f docker-compose.development.yaml up --build
```

### Migrating the Database

```bash
docker-compose -f docker-compose.development.yaml exec backend npx sequelize-cli db:migrate
```

### Seeding the Database

```bash
docker-compose -f docker-compose.development.yaml exec backend npx sequelize-cli db:seed:all
```

### Resetting the Database

```bash
docker-compose -f docker-compose.development.yaml exec backend npx sequelize-cli db:migrate:undo:all
docker-compose -f docker-compose.development.yaml exec backend npx sequelize-cli db:migrate
docker-compose -f docker-compose.development.yaml exec backend npx sequelize-cli db:seed:all
```
