import {container} from 'inversify-props';
import FeatureServiceImpl from '@/feature/services/impl/feature.service';
import {FeatureService} from "@/feature/services/feature.service.interface";
import UtilsServiceImpl from "@/common/services/impl/utils.service";
import {UtilsService} from "@/common/services/utils.service.interface";

export default function buildDependencyContainer (): void {
    container.addSingleton<FeatureService>(FeatureServiceImpl, 'FeatureService');
    container.addSingleton<UtilsService>(UtilsServiceImpl, 'UtilsService');
}
