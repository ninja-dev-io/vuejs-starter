import { mapState } from 'vuex';
import {AppState} from '@/store/store';

export default {
    computed: mapState({
        data: (state: AppState) => state.data
    })
}
