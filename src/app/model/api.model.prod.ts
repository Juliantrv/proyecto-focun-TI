import { environment } from '../../environment/environment.prod'

export class Api {

    public static readonly BaseUrl = environment.baseUrl;
    public static readonly token = `${Api.BaseUrl}/principal/api/token/`;

}