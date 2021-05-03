import {container} from 'inversify-props';
import { ToastService, ToastServiceImpl } from '../services/toast';
import { INJECTION_TYPES } from './injection-types';
export default function buildDependencyContainer() : void {
    container.bind<ToastService>(INJECTION_TYPES.TOAST).to(ToastServiceImpl);
}