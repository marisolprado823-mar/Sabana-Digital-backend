import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Livestock } from '../../livestock/entities/livestock.entity';
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

  @ManyToOne(() => Livestock, (livestock) => livestock.id, { onDelete: 'CASCADE' })
  animal!: Livestock;

  @ManyToOne(() => User, (user) => user.id)
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;
}