import dataSource from './createDataSource';

const resetDatabase = async (): Promise<void> => {
  const connection = await dataSource;
  await connection.dropDatabase();
  await connection.synchronize();
};

export default resetDatabase;
