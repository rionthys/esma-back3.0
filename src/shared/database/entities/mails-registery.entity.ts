import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('text')
    login: string;

    @Column('text')
    password: string;

    @Column({type: 'integer', nullable: true})
    rights: object;
}
