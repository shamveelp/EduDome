export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET || 'super-secret-key-change-me',
    expiresIn: '1d',
  },
});
