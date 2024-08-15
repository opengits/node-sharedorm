import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0;  // Default value

  @Column()
  firstName: string = '';  // Default value

  @Column()
  lastName: string = '';  // Default value

  @Column()
  email: string = '';  // Default value

  @Column()
  password: string = '';  // Default value
}
