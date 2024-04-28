import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {ContractsEntity} from "./contracts.entity";
import {UsersEntity} from "./users.entity";

@Entity()
export class ContractsLogsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {nullable: true})
    type: string;

    @Column('varchar', {array: true, nullable: true})
    document: string[];

    @Column('varchar')
    action: string;

    @ManyToOne(() => ContractsEntity, contract => contract.logs)
    contracts: ContractsEntity;

    @ManyToOne(() => UsersEntity, {nullable: true})
    responsible: UsersEntity;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public updated_at: Date;
}
