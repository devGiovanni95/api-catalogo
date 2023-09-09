import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Category from "./category";

@Entity()
export default class Product extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id!:  number

    @Column()
    name!: string

    @Column()
    description!: string

    @Column()
    price!: number

    @Column({default: false})
    promotion!: boolean

    @ManyToOne(() => Category, (category) => category.products) // Define a relação muitos-para-um com a entidade Category
    category!: Category;
    
}