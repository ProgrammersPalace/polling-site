import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Poll {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    questionAsked: string;

    @Column('timestamp')
    created: Date;
}