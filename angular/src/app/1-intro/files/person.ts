export class Person {
    private _name: string; 
    private _gender: string; 

    get name(): string {
        return this._name; 
    };
    set name(name: string){
        this._name = name;
    }

    get gender(): string {
        return this._gender; 
    }
    set gender(gender: string){
        this._gender = gender;
    }
}
