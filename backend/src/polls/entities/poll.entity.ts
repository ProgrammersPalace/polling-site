import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';


@Entity()
export class Poll {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('text')
    questionAsked: string;

    @CreateDateColumn()
    created: Date;
}