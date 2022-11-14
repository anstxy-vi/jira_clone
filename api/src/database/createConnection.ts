import { DataSource } from 'typeorm';

import dataSource from './createDataSource';

const createDatabaseConnection = (): Promise<DataSource> => dataSource;

export default createDatabaseConnection;
