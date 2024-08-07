import { KazagumoPlugin as Plugin, KazagumoPlayer as OldPlayer, Kazagumo } from 'kazagumo';
export declare class NewPlayer extends OldPlayer {
    filter(type: string): Promise<void>;
}
export declare class KazagumoPlugin extends Plugin {
    private kazagumo;
    constructor();
    load(kazagumo: Kazagumo): void;
}
//# sourceMappingURL=plugin.d.ts.map