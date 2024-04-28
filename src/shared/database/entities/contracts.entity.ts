import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import {DatabaseEntity} from "./database.entity";
import {ContractsLogsEntity} from "./contract-logs.entity";
import {ClientsEntity} from "./clients.entity";
import {DsEntity} from "./ds.entity";

@Entity()
export class ContractsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ClientsEntity)
    client: ClientsEntity;

    @Column('varchar')
    number: string;

    @Column('varchar')
    status: string;

    @OneToMany(() => DsEntity, ds => ds.contracts, {onDelete: 'CASCADE'})
    ds: DsEntity[];

    @Column('timestamp', {nullable: true})
    deadline: Date;

    @ManyToOne(() => DatabaseEntity, object => object.contracts)
    object: DatabaseEntity;

    @OneToMany(() => ContractsLogsEntity, logs => logs.contracts)
    logs: ContractsLogsEntity[];

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public updated_at: Date;
}
