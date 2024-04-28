import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class PriceEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('jsonb')
    value: string;
}
