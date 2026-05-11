import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Livestock } from '../../livestock/entities/livestock.entity'; 

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string; 

  @Column({ default: 'user' }) 
  role: string;

  
  @OneToMany(() => Livestock, (livestock) => livestock.user)
  livestock: Livestock[];
}