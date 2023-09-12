export class Pokemon {
    readonly id: number;
    readonly name: string;
    readonly image: string;

    constructor({
                    id,
                    name,
        image
                }: {
        id: number,
        name: string,
        image: string
    }) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
}