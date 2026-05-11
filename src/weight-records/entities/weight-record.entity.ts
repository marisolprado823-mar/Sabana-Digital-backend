import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Livestock } from '../../livestock/entities/livestock.entity';

@Entity()
export class WeightRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  weight: number;

  @Column()
  date: Date;

  @Column()
  animalId: number;

  @ManyToOne(() => Livestock, (livestock) => livestock.id, { onDelete: 'CASCADE' })
  animal: Livestock;
}