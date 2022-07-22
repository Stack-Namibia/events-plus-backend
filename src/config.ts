import dotenv from 'dotenv';
import ConfigHelper from 'openapi-nodegen-config-helper';

dotenv.config();

/**
 * Add and remove config that you need.
 */
export default {
  // Swagger file
  loadSwaggerUIRoute: ConfigHelper.withDefault('LOAD_SWAGGER_UI_ROUTE', false),
  swaggerBasicAuth: [
    {
      basicAuthUname: String(ConfigHelper.withDefault('SWAGGER_BASIC_AUTH_UNAME', 'user')),
      basicAuthPword: String(ConfigHelper.withDefault('SWAGGER_BASIC_AUTH_PWORD', 'password')),
    },
  ],

  // Instance
  env: ConfigHelper.withDefault('ENVIRONMENT', 'production'),
  port: ConfigHelper.withDefault('PORT', 8000),

  // Cors white list of URLs
  corsWhiteList: ConfigHelper.withDefault('CORS_WHITELIST', '*'),

  // Authentication
  jwtAccessSecret: ConfigHelper.required('JWT_ACCESS_SECRET'),
  apiKey: ConfigHelper.withDefault('API_KEY', false),

  // Request worker config - allThreadsCount = processes * threadsPerProcess
  requestWorker: {
    processes: Number.parseInt(ConfigHelper.withDefault('REQUEST_WORKER_PROCESSES', 1), 10),
    threadsPerProcess: Number.parseInt(ConfigHelper.withDefault('REQUEST_WORKER_THREADS_PER_PROCESS', 10), 10),
    timeoutMs: Number.parseInt(
      ConfigHelper.withDefault('REQUEST_WORKER_TIMEOUT_MS', 300000), // 5 minutes
      10
    ),
    silent: true, // disable thread / proc start logs
  },
  mongoUrl: ConfigHelper.required('MONGO_URL') as string,
  fbCredentials: {
    type: ConfigHelper.required('FB_TYPE') as string,
    projectId: ConfigHelper.required('FB_PROJECT_ID') as string,
    privateKeyId: ConfigHelper.required('FB_PRIVATE_KEY_ID') as string,
    privateKey: ConfigHelper.required('FB_PRIVATE_KEY') as string,
    clientEmail: ConfigHelper.required('FB_CLIENT_EMAIL') as string,
    clientId: ConfigHelper.required('FB_CLIENT_ID') as string,
    authUri: ConfigHelper.required('FB_AUTH_URI') as string,
    tokenUri: ConfigHelper.required('FB_TOKEN_URI') as string,
    authProviderX509CertUrl: ConfigHelper.required('FB_AUTH_PROVIDER_X509_CERT_URL') as string,
    clientX509CertUrl: ConfigHelper.required('FB_CLIENT_X509_CERT_URL') as string,
  },
};
