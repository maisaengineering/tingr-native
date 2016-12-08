import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Config } from "../config";

@Injectable()
export class AuthService {
    constructor(private http: Http) {}

    getClientToken() {
        console.log('Hellow World...')
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(
            Config.apiUrl + "clients/token",
            JSON.stringify({
                grant_type: "client_credentials",
                client_id:"5a0ebafb2f327e4ece3cb0dcec7300ed21f0b3dec1fc6f3a4c778ee75d1ada37",
                client_secret: "fb427d58ea8677daff6f36af08cc34fd47f9015b67dbf08daeee582e86496acf",
                scope: "KidsApp"
            }), {
                headers: headers
            }
        )
        .map((res:Response) => res.json())
        .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error.json() || {error: 'Server error'})
    }


}