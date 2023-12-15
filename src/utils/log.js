import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "express-api" },
  transports: [
    process.env.NODE_ENV !== "production" &&
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
  ].filter(Boolean), 
});

export default logger;
