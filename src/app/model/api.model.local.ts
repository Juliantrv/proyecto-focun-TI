import { environment } from '../../environment/environment.local'

export class Api {

    public static readonly BaseUrl = environment.baseUrl;
    public static readonly token = `${Api.BaseUrl}/principal/api/token/`;
    public static readonly createProduct = `${Api.BaseUrl}/inventario/productos/`;
    public static readonly products = `${Api.BaseUrl}/inventario/lista-productos`;

}