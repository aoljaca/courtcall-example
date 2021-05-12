import {Module} from 'vuex';
const participantsModule: Module<any,any> = {
    namespaced: true,
    state: {
        participants: []
    },
    mutations: {
        addParticipant(state: any, payload) {
            state.participants = [
                ...state.participants,
                payload
            ]
        },
        removeParticipant(state: any, payload) {
            state.participants = (state.participants as any[])
            .filter(p => p.id !== payload)
        }
    },
    getters: {
        getById : (state) => (id: number) => {
            return (state.participants as any[]).find(p => p.id === id);
        }
    }
}


export default participantsModule;