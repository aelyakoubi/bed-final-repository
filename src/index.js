import express from "express";
import usersRouter from "./routes/users.js";
import bookingsRouter from "./routes/bookings.js";
import propertiesRouter from "./routes/properties.js";
import reviewsRouter from "./routes/reviews.js";
import hostsRouter from "./routes/hosts.js";
import amenitiesRouter from "./routes/amenities.js";
import loginRouter from "./routes/login.js";
import log from "./middleware/logMiddleware.js";
import errorHandler from "./middleware/errorHandler.js";
import * as Sentry from "@sentry/node";
import "dotenv/config";

const app = express();

Sentry.init({
  dsn: process.env.SENTRY_DSN, 
  integrations: [
    new Sentry.Integrations.Http({
      tracing: true,
    }),
    new Sentry.Integrations.Express({
      app,
    }),
  ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.get("/", (req, res) => {
  res.send("Hello, This is the project bedfinal_bookingsite_Api of Ahmed el Yakoubi. To render the data from and to the database to test it, you need to create an account on planetscal and follow the steps..");
});

app.use(express.json());
app.use(log);

app.use("/users", usersRouter);
app.use("/bookings", bookingsRouter);
app.use("/properties", propertiesRouter);
app.use("/reviews", reviewsRouter);
app.use("/hosts", hostsRouter);
app.use("/amenities", amenitiesRouter);

app.use("/login", loginRouter);

app.use(Sentry.Handlers.errorHandler());

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
