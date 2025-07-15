# Alex AI Playground

My playground for AI experiments

## Stack

- **Framework**: NextJS
- **Styling**: Tailwind + CVA

## Getting started

### Local Development

Execute the following commands to start the project:

```bash
npm install

npm run dev
```

You will need a `.env` file on the root of the project, you can create one based on the `.env.example` file.

### Local Development using Docker

To run the application using Docker:

```bash
# Build and start the application
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

The application will be available at `http://localhost:3000`
