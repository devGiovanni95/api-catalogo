import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(() => Category) // Define a relação muitos-para-um com a entidade Category
    @JoinColumn({ name: "category_id" }) // Define o nome da coluna que armazenará a chave estrangeira
    category!: Category;
    
}