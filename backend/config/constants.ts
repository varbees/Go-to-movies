import dotenv from 'dotenv';

dotenv.config();

export const __port__: string = process.env.PORT || '8008';
export const __db__: string = process.env.MONGO_URI || '';
export const __isProd__ = process.env.NODE_ENV === 'production' ? true : false;
