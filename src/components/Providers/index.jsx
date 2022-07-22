import { DataBaseProvider } from './Database/index';

export default ({ children }) => (
  <DataBaseProvider>{children}</DataBaseProvider>
);