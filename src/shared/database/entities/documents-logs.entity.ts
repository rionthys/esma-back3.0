import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {DocumentsEntity} from "./documents.entity";
import {UsersEntity} from "./users.entity";

@Entity()
export class DocumentsLogsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {nullable: true})
    type: string;

    @Column('varchar')
    action: string;

    @Column('varchar', {nullable: true})
    path: string;

    @ManyToOne(() => UsersEntity, {nullable: true})
    responsible: UsersEntity;

    @ManyToOne(() => DocumentsEntity, documents => documents.logs)
    document: DocumentsEntity;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public updated_at: Date;
}
