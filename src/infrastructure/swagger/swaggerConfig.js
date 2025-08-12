import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

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
  apis: ["src/interface/routes/*.js"], 
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
