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
import {UsersEntity} from "./users.entity";
import {AffairsLogsEntity} from "./affairs-logs.entity";
import {MailsRegistersEntity} from "./mails-registers.entity";
import {AccountsEntity} from "./accounts.entity";

@Entity()
export class AffairsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('varchar')
    view: string;

    @Column('varchar')
    number: string;

    @Column('varchar')
    status: string;

    @Column('varchar')
    attention: string;

    @Column({type: 'date', nullable: true})
    deadline: Date;

    @ManyToOne(() => UsersEntity)
    subscriber: UsersEntity;

    @ManyToOne(() => UsersEntity, {nullable: true})
    responsible: UsersEntity;

    @ManyToOne(() => DatabaseEntity, databaseEntity => databaseEntity.affairs)
    object: DatabaseEntity;

    @OneToMany(() => AffairsLogsEntity, affairsLogs => affairsLogs.affairs)
    logs: AffairsLogsEntity[];

    @OneToMany(() => MailsRegistersEntity, mail => mail.affair)
    mails: MailsRegistersEntity[];

    @OneToMany(() => AccountsEntity, accounts => accounts.affair, {onDelete: 'CASCADE'})
    accounts: AccountsEntity[];

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public updated_at: Date;
}
