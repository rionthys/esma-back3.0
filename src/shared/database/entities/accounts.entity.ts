import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {ClientsEntity} from "./clients.entity";
import {AffairsEntity} from "./affairs.entity";

@Entity()
export class AccountsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    status: string;

    @Column('varchar')
    service: string;

    @Column('varchar', {nullable: true})
    price: string;

    @Column('varchar', {nullable: true})
    gospos: string;

    @ManyToOne(() => AffairsEntity, affair => affair.accounts, {onDelete: 'CASCADE'})
    affair: AffairsEntity;

    @Column({type: 'date', nullable: true})
    date: Date;

    @Column({type: 'varchar', nullable: true})
    type: string;

    @Column({type: 'boolean', nullable: true})
    state: boolean

    @ManyToOne(() => ClientsEntity)
    client: ClientsEntity;

    @Column({type: 'varchar', nullable: true})
    invoice: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public updated_at: Date;
}
