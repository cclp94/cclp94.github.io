export class MenuItem {
    name : string;
    iconClass: string;
    type : string;
    route: string;

    constructor(obj?: MenuItem) {    
        this.name = obj && obj.name || "";
        this.iconClass = obj && obj.iconClass || "";
        this.type = obj && obj.type || "PAGE";
        this.route = obj && obj.route || "";
    }  
}
