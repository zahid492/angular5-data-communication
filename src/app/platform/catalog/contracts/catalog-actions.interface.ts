export interface ICatalog {
    getCatalogs(): Promise<any[]>;
    deleteCatalog(catalogId: string): Promise<any>;
}
