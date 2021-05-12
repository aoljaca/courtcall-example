export type AVStatus = 'unmuted' | 'muted' | 'hard_muted';
export interface Participant {
    video_status: AVStatus;
    audio_status: AVStatus
    id: number;
    name: string;
    pubnub_id: string;
}