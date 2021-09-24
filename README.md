Booking API - An application that enables agents book users so they are available to perform specific tasks during the booked time

## Getting Started

First, install the packages:

```bash
npm install
# or
yarn
```

Second, create a .env file with the content in .env.example file

```bash
touch .env
copy content into newly created .env file
```

Third, run the development server:

```bash
npm run start:dev
```

The API can be accessed from [http://localhost:4000](http://localhost:4000)

### Authentication

To Start querying the routes, you need to create an agent account POST - `/api/v1/agents`.

- Create agent account by sending a POST request to `/api/v1/agents`
- Copy returned appId and save it
- Add returned appId to the header `x-agent-id` for every other request that requires authentication. Check endpoints docs for more details and example requests

## Endpoints:

Please refer to the Postman Docs linked below for the endpoints documentation
[Booking API Docs](https://documenter.getpostman.com/view/5602496/UUxxfnka)
