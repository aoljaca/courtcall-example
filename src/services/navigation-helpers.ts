import { SearchType } from "@/model/admin/search/searchType";
import { RawLocation } from "vue-router";
import Store from '../store/index'
import Router from '../router';

export function NavigateToEntity(idOfEntity: string, type?: SearchType): void {
    let routeLocation: RawLocation = {};

    switch (type) {
        case SearchType.SYSTEM_USER:
            routeLocation = {
                name: "System User",
                params: {
                    systemUserId: idOfEntity,
                },
            };
            break;
        case SearchType.PARTICIPANT:
            routeLocation = {
                name: "Participant",
                params: {
                    participantId: idOfEntity,
                    roomId: Store.getters["ParticipantsModule/getById"](idOfEntity).roomId,
                },
            };
            break;
        case SearchType.ROOM:
            routeLocation = {
                name: "Room View Manage",
                params: {
                    roomId: idOfEntity,
                },
            };
            break;
        case SearchType.CASE:
            routeLocation = {
                name: "Case View",
                params: {
                    roomId: Store.getters["CasesModule/getById"](idOfEntity).roomId,
                    caseId: idOfEntity,
                },
            };
            break;
        case SearchType.ORGANIZATION:
            routeLocation = {
                name: "Organization",
                params: {
                    organizationId: idOfEntity,
                },
            };
            break;
    }

    Router.push(routeLocation);
}