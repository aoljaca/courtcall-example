export type AVStatus = 'unmuted' | 'muted' | 'hard_muted';
/**
 * Fill in as needed
 */
export interface Participant {
    id: number;
    name: string;
    pubnub_id: string;
}