import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Animal } from '../../animals/entities/animal.entity';

@Entity('health_events')
export class HealthEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string; 

  @Column()
  description: string;

  @Column({ type: 'date' })
  eventDate: Date;

  @Column()
  animalId: number;

  @ManyToOne(() => Animal, (animal) => animal.id, { onDelete: 'CASCADE' })
  animal: Animal;

  @CreateDateColumn()
  createdAt: Date;
}