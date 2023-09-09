import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Product from "./product";

@Entity()
export default class Category extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    description!: string
    
    @OneToMany(() => Product, (product) => product.category) // Define a relação um-para-muitos com a entidade Product
    products?: Product[]; // Esta propriedade conterá a lista de produtos relacionados a esta categoria

}