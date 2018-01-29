module.exports = {
    "parser": "babel-eslint",
    "extends": "google",
    "rules": {
        // windows linebreaks when not in production environment
        "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
        "no-unused-vars": 1
    }
};