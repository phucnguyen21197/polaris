// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
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
