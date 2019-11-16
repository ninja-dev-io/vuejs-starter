import {AxiosResponse} from "axios";
import {Observable} from "rxjs";

export interface FeatureService {

    someMethod(): Observable<AxiosResponse[]>;



}

