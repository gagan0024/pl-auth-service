const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const globalErrHandler = require('./controllers/errorController');
const AppError = require('./components/utils/appError');
const app = express();
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUiExpress = require('swagger-ui-express');

//Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Authentication Service",
      description: "Authenticatio Service Documentation",
      contact: {
        name: "Pinelabs"
      },
      servers: ["http://localhost:3000"]
    }
  },
  // ['.routes/*.js']
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));


// Allow Cross-Origin requests
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: '20mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: false,
    parameterLimit: 20000,
  })
);

app.disable('x-powered-by');

//Health Check
app.get("/", (req, res) => {
    res.json({ message: "running" });
  });

// Routes
app.use('/api/v1/auth', authRoutes);


// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    res.status(404).send(err);
});


app.use(function(e, req, res, next) {
  if (e.message === "Bad request") {
      res.status(400).json({error: {msg: e.message, stack: e.stack}});
  }
});

app.use(globalErrHandler);

module.exports = app;