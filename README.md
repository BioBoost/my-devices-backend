# Backend of My-Devices

My-Devices is a web app that allows devices in a network to publish stats about their system. It also provides an endpoint for the detection script to post it's findings.

## Docker-compose

To start the app in development mode:

```bash
docker-compose -f docker-compose.development.yaml up
```

### Migrating the Database

```bash
docker-compose -f docker-compose.development.yaml exec backend npx sequelize-cli db:migrate
```
