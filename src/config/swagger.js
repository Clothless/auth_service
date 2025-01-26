const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Your API Documentation',
            version: '1.0.0',
            description: 'API documentation for your application',
        },
        servers: [
            {
                url: 'http://localhost:5000',
                description: 'Local server',
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            description: 'The auto-generated ID of the user',
                        },
                        email: {
                            type: 'string',
                            description: 'The email of the user',
                        },
                        password: {
                            type: 'string',
                            description: 'The password of the user',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'The date and time the user was created',
                        },
                        updatedAt: {
                            type: 'string',
                            format: 'date-time',
                            description: 'The date and time the user was last updated',
                        },
                    },
                },
            },
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

// Serve Swagger UI
const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;