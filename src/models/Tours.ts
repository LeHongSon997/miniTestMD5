export class Tours{
  id!: number;
  name!: string;
  price!: number;
  description!: string;

  constructor(id: number, name: string, price: number, description: string ) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.description = description;
  }
}
