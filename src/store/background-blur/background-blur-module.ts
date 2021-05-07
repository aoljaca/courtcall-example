import {Module} from 'vuex';
import {DateTime} from 'luxon';
const backgroundBlurModule: Module<any,any> = {
    namespaced: true,
    state: {
        timestamp: null,
        mode: 'off'
    },
    mutations: {
        changeMode(state: any, payload) {
            state.mode = payload;
        },
        updateTimestamp(state) {
            state.timestamp = DateTime.now().toISO()
        }
    },
    actions: {
        changeModeAction({commit},payload) {
            commit('changeMode',payload.mode)
        },
        updateTimeStampAction({commit},payload) {
            commit('updateTimestamp')
        }
    }
}
export default backgroundBlurModule