import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import {AffairsEntity} from "./affairs.entity";
import {ContractsEntity} from "./contracts.entity";
import {DocumentsEntity} from "./documents.entity";
import {ClientsEntity} from "./clients.entity";

@Entity()
export class DatabaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: true})
    name: string;

    @Column('text')
    trademark: string;

    @Column('varchar', {nullable: true})
    trademarkType: string;

    @Column('varchar', {nullable: true})
    territory: string;

    @Column({type: 'varchar', nullable: true})
    nonProtectedElements: string;

    @ManyToOne(() => ClientsEntity)
    client: ClientsEntity;

    @Column('varchar')
    numberOrder: string;

    @Column('date')
    dateOrder: Date;

    @Column('varchar')
    numberRegistration: string;

    @Column('date')
    dateRegistration: Date;

    @Column('date')
    datePublication: Date;

    @Column('varchar')
    priorityNumber: string;

    @Column('date')
    priorityDate1: Date;

    @Column('date')
    priorityDate2: Date;

    @Column('text')
    niceClasses: string;

    @Column('date')
    validityStart: Date;

    @Column('date')
    validityEnd: Date;

    @Column({type: 'date', nullable: true})
    extensionStart: Date;

    @Column({type: 'date', nullable: true})
    extensionEnd: Date;

    @OneToMany(() => AffairsEntity, affairs => affairs.object)
    affairs: AffairsEntity[];

    @OneToMany(() => ContractsEntity, contract => contract.object)
    contracts: ContractsEntity[];

    @OneToMany(() => DocumentsEntity, document => document.object)
    documents: DocumentsEntity[];

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public updated_at: Date;
}
