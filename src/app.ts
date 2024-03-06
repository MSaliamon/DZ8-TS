enum Category {
    Software,
    Hardware,
    Fiction,
    NonFiction
}



function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

const inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

console.log(purge(inventory));

console.log(purge([1, 2, 3, 4, 5]));


const purgeNumbers: <T>(inventory: T[]) => T[] = purge;


console.log(purgeNumbers([1, 2, 3, 4, 5]));
console.log(purgeNumbers(['a', 'b', 'c', 'd', 'e']));


interface Magazine {
    title: string;
    publisher: string;
}


class Shelf<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T | undefined {
        return this.items[0];
    }
}


const bookShelf = new Shelf<typeof inventory[0]>();
inventory.forEach(book => bookShelf.add(book));


console.log(bookShelf.getFirst()?.title);


const magazines = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];


const magazineShelf = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));


console.log(magazineShelf.getFirst()?.title);


interface CallbackFn<T> {
    (err: Error | null, data: T | null): void;
}


function exampleCallback(callback: CallbackFn<string>): void {
    // Function body
}