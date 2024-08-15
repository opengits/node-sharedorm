import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('settings')
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  isNotificationEnabled: boolean;

  @Column({ default: false })
  isNewDashboardEnabled: boolean;

  @Column()
  timezone: string;
}
