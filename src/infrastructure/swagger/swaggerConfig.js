import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: " Api test backend developer in Minilemon",
      version: "1.0.0",
      description: "API Documentation",
    },
    servers: [
      {
        url: "https://minilemon-backend-test.vercel.app/api",
        description: "Development Server",
      },
    ],
  },
  apis: [path.resolve(__dirname, "../../interface/routes/*.js")],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
