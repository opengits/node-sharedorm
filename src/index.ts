import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Settings } from './entities/settings.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',  // or 'mysql'
  host: 'localhost',
  port: 5432,  // or MySQL default port 3306
  username: 'postgres',
  password: 'postgres',
  database: 'my-account',
  entities: [User, Settings],
  synchronize: true,
  migrations: [],
});





export {User} from './entities/user.entity';
export {Settings} from './entities/settings.entity';
