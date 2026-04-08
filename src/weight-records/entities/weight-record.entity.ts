import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Animal } from '../../animals/entities/animal.entity';

@Entity('weight_records')
export class WeightRecord {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  weight!: number;

  @Column({ type: 'date' })
  date!: Date;

  @Column()
  animalId!: number;

  @ManyToOne(() => Animal, (animal) => animal.finances)
  animal!: Animal;
}