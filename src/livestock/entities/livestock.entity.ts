import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Farm } from '../../farms/entities/farm.entity';

@Entity('livestock')
export class Livestock {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  species!: string;

  @Column({ nullable: true })
  breed?: string;

  @Column()
  farmId!: number;

  @ManyToOne(() => Farm, (farm) => farm.animals)
  farm!: Farm;
}