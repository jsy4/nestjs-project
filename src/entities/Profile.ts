import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user_profiles' })
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    birthday: Date;

    @Column({ nullable: false })
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date;

    @Column({ nullable: true })
    deletedAt: Date;

}