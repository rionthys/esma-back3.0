import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class ClientsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar', {nullable: true})
    address: string;

    @Column('varchar', {nullable: true})
    phone: string;

    @Column('varchar', {nullable: true})
    bin: string;

    @Column('varchar', {nullable: true})
    inn: string;

    @Column('varchar', {nullable: true})
    orgn: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public updated_at: Date;
}
