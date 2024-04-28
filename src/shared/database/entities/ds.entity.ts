import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {ContractsEntity} from "./contracts.entity";

@Entity()
export class DsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {nullable: true})
    name: string;

    @Column('varchar', {nullable: true})
    document: string;

    @Column('varchar', {nullable: true})
    description: string;
    
    @ManyToOne(() => ContractsEntity, contract => contract.ds, {onDelete: 'CASCADE'})
    contracts: ContractsEntity;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public updated_at: Date;
}
