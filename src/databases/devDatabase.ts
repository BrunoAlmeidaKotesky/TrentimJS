import { Sequelize } from 'sequelize';
export const configSequelize = new Sequelize({
  database: 'dev',
  username: '',
  password: '',
  host: '',
  port: 1,
  dialect: 'mssql',
});
