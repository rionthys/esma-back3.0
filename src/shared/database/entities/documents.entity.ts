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
import {DocumentsLogsEntity} from "./documents-logs.entity";
import {ClientsEntity} from "./clients.entity";

@Entity()
export class DocumentsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    number: string;

    @Column('varchar')
    status: string;

    @ManyToOne(() => ClientsEntity)
    client: ClientsEntity;

    @Column('varchar')
    lang: string;

    @Column('varchar', {nullable: true})
    document: string;

    @Column('timestamp', {nullable: true})
    deadline: string;

    @ManyToOne(() => DatabaseEntity, object => object.documents)
    object: DatabaseEntity;

    @OneToMany(() => DocumentsLogsEntity, documentsLogs => documentsLogs.document)
    logs: DocumentsLogsEntity[];

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public updated_at: Date;
}
