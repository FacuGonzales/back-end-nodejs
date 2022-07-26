class Book {
    constructor( title, author ) {
        this.title = title,
        this.author = author
    }
}

class User {
    constructor( name, surname, books, pets) {
        this.name = name,
        this.surname = surname,
        this.books = books,
        this.pets = pets
    }

    getFullName() {
        // const titleBooks = this.books.map( book => book.title);

        const message = `El usuario es:
                        ➡️ Nombre: ${this.name}, ${this.surname}.
                        ➡️ Mascotas: ${this.pets}.
                        ➡️ Libros: ${this.getBooksName}.`;
        return message;
    }

    addPets( name ) {
        return this.pets.push(name);
    }

    countPets() {
        return `La cantidad de mascotas del usuario es: ${this.pets.length}`;
    }

    addBook( title, author ) {
        const book = new Book();

        book.title = title;
        book.author = author;

        return this.books.push(book);
    }

    getBooksName() {
        return this.books.map( b => b.title);
    }
}



const newUser = new User(
    'Facundo', 
    'Gonzales',
    [
        {
            'title': 'Harry Potter', 
            'author': 'J.K Rowlling',
        },
        {
            'title': 'The Chronicles of Narnia', 
            'author': 'C.S Lewis',
        },
        {
            'title': 'El Camino de Steve Jobs', 
            'author': 'Jay Elliot',
        }
    ],
    [
        'Olivia',
        'Roña'
    ]   
)


newUser.getFullName();
newUser.countPets();
newUser.getBooksName();

