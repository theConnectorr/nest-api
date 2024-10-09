export default () => ({
  database: {
    url: process.env.DATABASE_URL,
  },
  security: {
    jwt_secret: process.env.JWT_SECRET,
  }
});
