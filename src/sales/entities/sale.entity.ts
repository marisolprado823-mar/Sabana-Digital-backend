import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Livestock } from '../../livestock/entities/livestock.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  totalPrice: number;

  @CreateDateColumn()
  saleDate: Date;

  
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  
  @ManyToOne(() => Livestock, (livestock) => livestock.id)
  livestock: Livestock;
}