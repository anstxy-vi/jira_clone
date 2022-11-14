import { getDataSource } from './createConnection';

const resetDatabase = async (): Promise<void> => {
  // const connection = getConnection();
  const connection = getDataSource();
  await connection.dropDatabase();
  await connection.synchronize();
};

export default resetDatabase;
