class ProductManager{

constructor(){
    this.products = [];
}

addProduct = (title, description, price, thumbnail, code, stock) => 
{
    const newProduct = {
    title, 
    description, 
    price, 
    thumbnail,
    code,
    stock
    }

    //genero un id unico para cada producto
    if (this.products.length === 0) {
        newProduct.id = 1;
    } else {
        newProduct.id = this.products[this.products.length - 1].id + 1;
    }

    //verifico si ya existe el codigo y si se ingresaron todos los valores
    const codesArray = Object.keys(this.products).map((index) => this.products[index].code);
    const codeExists = codesArray.includes(code);

    if (codeExists){
        console.log(`El codigo ${code} ya existe`)
        return
    }else if(!title || !description || !price || !thumbnail || !code || !stock){
        console.log('Todos los campos son obligatorios, vuelva a ingresar el producto')
        return
    }else{
        this.products.push(newProduct)
    }
}   

getProducts(){
    return this.products;
}

getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      console.log(product);
      return product;
    } else {
      console.error("Not found");
    }
  }

}

//Se creará una instancia de la clase “ProductManager”
const manager = new ProductManager();
//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(manager.getProducts());
/* Se llamará al método “addProduct” con los campos: title: “producto prueba”, 
description:”Este es un producto prueba”, price:200, thumbnail:”Sin imagen”
code:”abc123”, stock:25 El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
*/
manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123',25);
//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(manager.getProducts());
//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123',25);
//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
manager.getProductById(700);




