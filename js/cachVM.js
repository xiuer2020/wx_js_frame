class CachVM {
    constructor() {
        this.cach = {}
    }
    add(vm){
        let pagePath = vm.__route__;
        this.cach[pagePath] = vm;
    }
    get(pagePath){
        return this.cach[pagePath]
    }
    delete(pagePath){
        delete this.cach[pagePath]
    }
}
export default new Utils();