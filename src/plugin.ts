import {
  KazagumoPlugin as Plugin,
  KazagumoPlayer as OldPlayer,
  KazagumoError,
  Kazagumo,
} from 'kazagumo';
import data from "./data"
import { FilterRoot } from "./type"

export class NewPlayer extends OldPlayer {
  public async filter(type: string) {
    const filterData = data[type as keyof FilterRoot]
    if (!filterData) throw new KazagumoError(404, "Filter not found")

    await this.shoukaku.node.rest.updatePlayer({
      guildId: this.guildId,
      playerOptions: {
        filters: filterData
      }
    })
  }
}

export class KazagumoPlugin extends Plugin {
  private kazagumo: Kazagumo | null;

  constructor() {
    super();
    this.kazagumo = null;
  }

  public load(kazagumo: Kazagumo) {
    this.kazagumo = kazagumo;
    this.kazagumo.KazagumoOptions.extends = {
      player: NewPlayer
    }
  }

}