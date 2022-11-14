import { DataSource } from 'typeorm';

import * as entities from 'entities';

let ds: DataSource;
export const getDataSource = (): DataSource => {
  if (!ds) {
    ds = new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: Object.values(entities),
      synchronize: true,
    });
  }
  return ds;
};

const createDatabaseConnection = (): Promise<DataSource> => {
  const connection = getDataSource();
  return connection.initialize();
};

export default createDatabaseConnection;
