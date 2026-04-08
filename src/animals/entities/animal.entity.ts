import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Finance } from '../../finances/entities/finance.entity';
import { Farm } from '../../farms/entities/farm.entity';

@Entity('animals')
export class Animal {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  species!: string;

  @Column({ nullable: true })
  breed?: string;

  @Column({ type: 'timestamp' })
  birthDate!: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  purchasePrice!: number;

  @Column()
  farmId!: number;

  @OneToMany(() => Finance, (finance) => finance.animal)
  finances!: Finance[];

  @ManyToOne(() => Farm, (farm) => farm.animals)
  farm!: Farm;
}