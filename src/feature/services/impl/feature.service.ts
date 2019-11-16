import {Inject, injectable} from 'inversify-props';
import {AxiosObservable} from 'axios-observable/dist/axios-observable.interface';
import {AxiosResponse} from 'axios';
import {forkJoin, Observable} from 'rxjs';
import {FeatureService} from "@/feature/services/feature.service.interface";
import {UtilsService} from "@/common/services/utils.service.interface";


@injectable()
export default class FeatureServiceImpl implements FeatureService{

    @Inject('UtilsService')
    utils!: UtilsService;

    someMethod(): Observable<AxiosResponse[]> {
        let observables: AxiosObservable<any> [] = [];
        return forkJoin(observables);
    }


}
