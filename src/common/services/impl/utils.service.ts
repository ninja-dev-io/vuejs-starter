import {injectable} from 'inversify-props';
import {UtilsService} from "@/common/services/utils.service.interface";

@injectable()
export default class UtilsServiceImpl implements UtilsService{

    notEmptyArray(array: any[]): boolean {
        return (array != null && array.length > 0);
    }

    randomHexColor() {
        return '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    }

}
