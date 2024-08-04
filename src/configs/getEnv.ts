import { config } from "dotenv";
config({ path: `.env`});
// config({ path: `.env.${process.env.NODE_ENV || 'developmenr'}.local`});

interface Environment {
    [key: string]: string | undefined;
}

export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN }: Environment = process.env;