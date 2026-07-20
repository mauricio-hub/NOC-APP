import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    MONGO_USER: env.get('MONGO_USER').required().asString(),
    MONGO_PASS: env.get('MONGO_PASS').required().asString(),
    MONGO_DB_URI: env.get('MONGO_DB_URI').required().asString(),
    MAILER_SERVICE: env.get('MAILER_SERVICE').required().asString(),
    MAILER_USER: env.get('MAILER_USER').required().asString(),
    MAILER_PASSWORD: env.get('MAILER_PASSWORD').required().asString(),
    MAILER_FROM_EMAIL: env.get('MAILER_FROM_EMAIL').required().asString()
};