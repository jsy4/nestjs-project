import { Column, Entity, IsNull, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";
import { Post } from "./Post";

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    darkmode?: boolean;

    @Column({ nullable: false })
    createdAt: Date;

    @Column({ nullable: true })
    deletedAt: Date;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];

}