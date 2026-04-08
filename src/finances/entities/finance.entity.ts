import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Animal } from '../../animals/entities/animal.entity';
import { User } from '../../users/entities/user.entity';

@Entity('finances')
export class Finance {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  category!: string;

  @Column()
  concept!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount!: number;

  @Column({ type: 'date' })
  expenseDate!: Date;

  @Column()
  animalId!: number;

  @Column()
  userId!: number;

  @ManyToOne(() => Animal, (animal) => animal.finances, { onDelete: 'CASCADE' })
  animal!: Animal;

  @ManyToOne(() => User, (user) => user.id)
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;
}