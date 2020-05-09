export class User {
    _id: number;
    name: String;
    email: String;
    password: String;
    active:String;
    api_token : String;
    created_at:String;
    updated_at:String;
    user_role:{
        id:number;
        name:String;
    }
}