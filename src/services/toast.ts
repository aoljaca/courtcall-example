import { injectable } from 'inversify-props';
import Vue from 'vue';

export interface ToastService {
    standardToast : () => void,

}

@injectable()
export class ToastServiceImpl {

    public standardToast() {
        Vue.swal.fire({
            title: 'Example Alert',
            timer: 3000,
            text: 'This message will be dismissed in 3 seconds',
            position: 'top-end',
            toast: true,
            timerProgressBar: true,
            showConfirmButton: false
        })
    }
}