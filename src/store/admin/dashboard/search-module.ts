import { LocalizedSearchType, SearchType } from "@/model/admin/search/searchType";
import { Module } from "vuex";
import i18n from "@/plugins/i18n";
import API from "@/services/api";
import { SystemUser } from "@/model/admin/system-users/system-user";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Room } from "@/model/admin/room/room";
import { Case } from "@/model/meeting/meeting-ui/case";
import { Organization } from "@/model/admin/organization/organization";

const searchModule: Module<any, any> = {
    namespaced: true,
    state: {
        searchResults: []
    },
    mutations: {
        setSearchResults(state: any, results: any[]) {
            state.searchResults = results;
        }
    },
    actions: {
        async search({ commit, rootGetters }, query: { type: SearchType, searchTerm: string }) {
            // Send request to API to query for results
            // try {
            //     const response = await API.Get<any[]>(`search?type=${query.type}&term=${query.searchTerm}`)
            //     commit('setSearchResults', response);
            // } catch (e) {
            //     this.$toast.error("There was an error processing search request: ", e.message);
            // }

            //Temporary until we have the backend
            // Remove once API is implemented
            let response: any[] = [];
            let systemUsers: SystemUser[] = [];
            let participants: Participant[] = [];
            let rooms: Room[] = [];
            let cases: Case[] = [];
            let organizations: Organization[] = [];

            switch (query.type) {
                case SearchType.SYSTEM_USER:
                    systemUsers = rootGetters["SystemUsersModule/getAsList"];
                    response = systemUsers.filter(su => su.name.includes(query.searchTerm));
                    break;
                case SearchType.PARTICIPANT:
                    participants = rootGetters["ParticipantsModule/getAsList"];
                    response = participants.filter(p => p.name.includes(query.searchTerm));
                    break;
                case SearchType.ROOM:
                    rooms = rootGetters["RoomModule/getAsList"];
                    response = rooms.filter(r => r.roomDetails.name?.includes(query.searchTerm));
                    break;
                case SearchType.CASE:
                    cases = rootGetters["CasesModule/getAsList"];
                    response = cases.filter(c => c.name.includes(query.searchTerm));
                    break;
                case SearchType.ORGANIZATION:
                    organizations = rootGetters["OrganizationsModule/getAsList"];
                    response = organizations.filter(o => o.name.includes(query.searchTerm));
                    break;
                default:
                    break;
            }

            commit('setSearchResults', response);
        }
    },
    getters: {
        searchTypes: () => {
            const localizedSearchTypeNames = Object.values(
                i18n.t("admin.dashboard.search.searchTypes")
            );
            const lockedSearchTypes = Object.values(SearchType);
            const searchTypes: LocalizedSearchType[] = [];

            localizedSearchTypeNames.forEach((name, index) => {
                searchTypes.push({
                    name,
                    type: lockedSearchTypes[index],
                });
            });

            return searchTypes;
        },
        searchTypeByName: (state, getters) => (name: string) => {
            return getters.searchTypes.find((st: LocalizedSearchType) => st.name === name);
        }
    },
};

export default searchModule;
