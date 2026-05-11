import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Livestock } from '../../livestock/entities/livestock.entity';

@Entity()
export class HealthEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  animalId: number;

  @ManyToOne(() => Livestock, (livestock) => livestock.id, { onDelete: 'CASCADE' })
  animal: Livestock;

  @CreateDateColumn()
  createdAt: Date;
}