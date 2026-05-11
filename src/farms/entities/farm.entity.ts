import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Livestock } from '../../livestock/entities/livestock.entity';

@Entity()
export class Farm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @OneToMany(() => Livestock, (livestock) => livestock.farm)
  livestock: Livestock[];
}