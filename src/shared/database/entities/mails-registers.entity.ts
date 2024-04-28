import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {AffairsEntity} from "./affairs.entity";

@Entity()
export class MailsRegistersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {nullable: true})
    number: string;

    @Column('varchar')
    type: string;

    @Column('varchar')
    services: string;

    @Column('text')
    destination: string;

    @Column({type: 'varchar', nullable: true})
    address: string;

    @Column('timestamp', {nullable: true})
    date: string;

    @Column('varchar', {nullable: true})
    content: string;

    @ManyToOne(() => AffairsEntity, affair => affair.mails)
    affair: AffairsEntity;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public updated_at: Date;
}
