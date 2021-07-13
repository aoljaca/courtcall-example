import { ToastContent, ToastOptions } from "vue-toastification/dist/types/src/types";
import Vue from "vue/types/umd";
import { Module } from "vuex";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const baseModule: Module<any, any> = {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        sendMessage({ }, config: { content: ToastContent, options: ToastOptions) {
            Vue.$toast(config.content, config.options);
        },
    },
    getters: {}
};

export default baseModule;
