import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Animal } from '../../animals/entities/animal.entity';

@Entity('farms')
export class Farm {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  location!: string;

  @Column()
  ownerName!: string;

  @OneToMany(() => Animal, (animal) => animal.farm)
  animals!: Animal[];
}