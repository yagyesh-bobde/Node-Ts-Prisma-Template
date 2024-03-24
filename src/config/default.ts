const JWT_SECRET = process.env.JWT_SECRET || "thisisasamplesecretkey";
const SALT_ROUNDS = parseInt(`${process.env.SALT_ROUNDS}`) || 10;
const MIN_PASSWORD_LENGTH = parseInt(`${process.env.MIN_PASSWORD_LENGTH}`) || 6;
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID!;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET!;
const DB_URL = process.env.DB_URL!;


export default {
    port: 3000, 
    DB_URL: DB_URL, 
    logLevel: "info", 
    JWT_SECRET, 
    SALT_ROUNDS,
    MIN_PASSWORD_LENGTH: MIN_PASSWORD_LENGTH, 
    RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET
}
