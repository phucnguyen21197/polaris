// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://30d8b43d58e20abec6a0bb397861f78f@o4511743083610112.ingest.us.sentry.io/4511743087804416",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  sendDefaultPii:true,
  integrations:[Sentry.vercelAIIntegration,
    Sentry.consoleLoggingIntegration({levels : ["log","warn","error"] })
  ],
});
