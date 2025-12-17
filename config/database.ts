
export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: 3306,
      database: 'strapi_db',
      user: 'root',
      password: 'Admin@Password',
    },
  },
});
