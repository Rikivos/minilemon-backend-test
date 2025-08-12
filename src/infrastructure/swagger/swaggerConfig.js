import path from "path";
import { fileURLToPath } from "url";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === "production";

const routesPath = isProd
  ? path.resolve(__dirname, "../../interface/routes/*.js") 
  : path.resolve(__dirname, "../../interface/routes/*.js"); 

console.log("Swagger reading API docs from:", routesPath);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API Documentation",
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL || "https://minilemon-backend-test.vercel.app/api",
      },
    ],
  },
  apis: [routesPath],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
