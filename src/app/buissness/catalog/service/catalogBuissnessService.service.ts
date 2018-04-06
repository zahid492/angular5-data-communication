import { Injectable } from '@angular/core';
import { ICatalog } from '../../../platform/catalog';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CatalogBuissnessService implements ICatalog {
    constructor(private http: HttpClient) {
        console.log('implementation of IProduct has been initialized');
    }

    public getCatalogs(): Promise<any> {
        console.log('getProducts() of implementation');
        return this.http.get('https://jsonplaceholder.typicode.com/comments').toPromise();
    }

    public deleteCatalog(catalogId: string) {
        console.log('deleteProduct() of implementation');
        const headers = new HttpHeaders({
            'Content-type': 'application/JSON'
        });
        return this.http.post('http://localhost:3001/deleteFruit',
                        JSON.stringify({productId: catalogId}),
                        {headers: headers}).toPromise();
    }
    
}