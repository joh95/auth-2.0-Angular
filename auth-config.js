module.exports = {
  // App Settings
  //MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/cuppaOAuth',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://solomon301:pradeep@ds111489.mlab.com:11489/cuppaoauth',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'f8d92cd78ae2f04fc56480800daa0280',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'iYWK0YyRbttCARCkBqt8KlhL',
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || 'vHn7uMvGgF2C2FPX',
};
