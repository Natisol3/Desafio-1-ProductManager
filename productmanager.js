

class ProductManager {
    constructor () {
        this.products = []
    }

    getProducts() {
        console.log(this.products)
        return this.products 
    }
    getProductById(product_id) {
        let uno = this.products.find(each=> each.id === product_id)
        if (uno) {
            console.log(uno)
            return uno
        }
        console.log('not found')
        return null
    }
    
    addProduct({ title,description,price,thumbnail,id,stock }) {
        let id = 0
        if (this.products.lenght===0) {
            id = 1
        }
        else {let lastProduct = this.products[this.products.length-1]
        id = lastProduct.id + 1
    }
    let product = { title,description,price,thumbnail,id,stock: [] }
    this.products.push (product)
    }
}
let product = new ProductManager()
product.addProduct({title: '',description: '',price: '',thumbnail: '',id:'' ,stock:''})
product.getProductById(1)