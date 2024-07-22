export interface Product{
    sku: string,
    nombre: string,
    imagen: string,
    descripcion: string,
    precio: string,
    stock_actual: number,
    categoria: string,
    is_active: boolean
    _order: number
}