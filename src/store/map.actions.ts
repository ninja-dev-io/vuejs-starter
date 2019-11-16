import { mapActions } from 'vuex'

export default {
    computed: {
        ...mapActions([
            'saveData'
        ])
    }
}
