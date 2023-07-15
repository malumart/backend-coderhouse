class Usuario{
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }
    
    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        const libro = {nombre, autor};
        this.libros.push(libro);
    }

    getBookNames(){
        return this.libros.map((libro) => libro.nombre);
    }
}

const usuario = new Usuario('Malu', 'Martin');
usuario.addMascota('Lila');
usuario.addMascota('Trufa');
usuario.addMascota('Kuki');
usuario.addMascota('Menta');

usuario.addBook('El tunel', 'Ernesto Sabato');
usuario.addBook('Deja de ser tu', 'Joe Dispenza');


console.log(usuario.getFullName());
console.log(usuario.countMascotas());
console.log(usuario.getBookNames());