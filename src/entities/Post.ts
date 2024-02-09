import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: 'user_posts' })
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ nullable: false })
    createdAt: Date;

    @Column({ nullable: true })
    updatedAt: Date;

    @Column({ nullable: true })
    deletedAt: Date;

    @ManyToOne(() => User, (user) => user.posts)
    user: User;
}