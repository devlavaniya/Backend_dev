const session = require("express-session");
const MongoStore = require("connect-mongo");

module.exports = session({
    name: "secure.sid",
    secret: process.env.SESSION_SECRET,

    resave: false,
    saveUninitialized: false,

    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: "sessions",
        crypto: {
            secret: process.env.SESSION_SECRET // session encryption
        }
    }),

    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // HTTPS only
        sameSite: "strict",
        maxAge: 1000 * 60 * 30 // 30 min
    }
});