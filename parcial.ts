class HashTable {
   
    private table: { [key: string]: { nombre: string, precioCosto: number, precioVenta: number } } = {};

  
    private hash(code: string): number {
        let hash = 0;
        
        for (let i = 0; i < code.length; i++) {
            hash += code.charCodeAt(i); 
        }
        return hash % 50;  
    }
    public insertarProducto(codigo: string, nombre: string, precioCosto: number, precioVenta: number): void {
        const index = this.hash(codigo); 
       
        if (!this.table[index]) {
            this.table[index] = { nombre, precioCosto, precioVenta };  
            console.log(`Producto insertado: ${nombre}`);
        } else {
            console.log('Colisión detectada.');
           
        }
    }
    public buscarProducto(codigo: string): { nombre: string, precioCosto: number, precioVenta: number } | null {
        const index = this.hash(codigo);  
      
        if (this.table[index]) {
            return this.table[index];  
        } else {
            console.log('Producto no encontrado');
            return null;  
        }
    }
    public mostrarProductos(): void {
        for (let key in this.table) {
            const producto = this.table[key];
            console.log(`Código: ${key}, Nombre: ${producto.nombre}, Precio Costo: ${producto.precioCosto}, Precio Venta: ${producto.precioVenta}`);
        }
    }
}

const farmacia = new HashTable ();

farmacia.insertarProducto("P001", "Pepto-Bismol", 50.00, 65.00);
farmacia.insertarProducto("P002", "Aspirina", 10.00, 15.00);
farmacia.insertarProducto("P002", "Aspirina", 10.00, 15.00);
farmacia.insertarProducto("P003", "Virogrip", 50.00, 65.00);


const producto = farmacia.buscarProducto("P002");
if (producto) {
    console.log(`Producto encontrado: ${producto.nombre}, Precio Venta: ${producto.precioVenta}`);
} else {
    console.log("Producto no encontrado.");
}

farmacia.mostrarProductos();