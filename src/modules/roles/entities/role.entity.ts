import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../interfaces/role.interface';

@Entity()
export class RoleEntity implements Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column('text')
  description: string;
}
