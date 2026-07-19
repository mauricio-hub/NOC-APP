import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    MAILER_SERVICE:env.get('MAILER_SERVICE').required().asString(),
    MAILEAR_EMAIL: env.get('MAILEAR_EMAIL').required().asString(),
    MAILER_SECRET_KEY: env.get('MAILER_SECRET_KEY').required().asString()
};