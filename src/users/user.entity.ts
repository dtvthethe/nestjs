import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 32, unique: true, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  fullname: string;

  @Column({ type: 'varchar', length: 64, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  access_token: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  refresh_token: string;
}
