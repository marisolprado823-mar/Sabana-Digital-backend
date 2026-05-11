import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Farm } from '../../farms/entities/farm.entity';
import { User } from '../../users/entities/user.entity'; 

@Entity()
export class Livestock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  weight: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  initialWeight: number;

  @Column({ default: 'Activo' })
  status: string;

  @ManyToOne(() => Farm, (farm) => farm.livestock)
  farm: Farm;

  @Column()
  farmId: number;

  
  @ManyToOne(() => User, (user) => user.livestock)
  user: User;

  @Column()
  userId: number; 
}