import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {AffairsEntity} from "./affairs.entity";
import {UsersEntity} from "./users.entity";

@Entity()
export class AffairsLogsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {nullable: true})
    type: string;

    @Column('varchar')
    action: string;

    @Column( 'text', {nullable: true, array: true})
    documents: string[];

    @ManyToOne(() => UsersEntity, {nullable: true})
    responsible: UsersEntity;

    @ManyToOne(() => AffairsEntity, affairs => affairs.logs, {nullable: true})
    affairs: AffairsEntity;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public updated_at: Date;
}
