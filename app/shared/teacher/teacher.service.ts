

import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Teacher } from "./teacher";
import { Config } from "../config";

@Injectable()
export class TeacherService {
    constructor(private http: Http) {}

    checkEmail(teacher: Teacher) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(
            Config.apiUrl + "Users",
            JSON.stringify({
                Username: teacher.email,
                Email: teacher.email,
                Password: teacher.password
            }), {
                headers: headers
            }
        ).catch(this.handleErrors);
    }



    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }


}