"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KazagumoPlugin = exports.NewPlayer = void 0;
const kazagumo_1 = require("kazagumo");
const data_1 = __importDefault(require("./data"));
class NewPlayer extends kazagumo_1.KazagumoPlayer {
    filter(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const filterData = data_1.default[type];
            if (!filterData)
                throw new kazagumo_1.KazagumoError(404, "Filter not found");
            yield this.shoukaku.node.rest.updatePlayer({
                guildId: this.guildId,
                playerOptions: {
                    filters: filterData
                }
            });
        });
    }
}
exports.NewPlayer = NewPlayer;
class KazagumoPlugin extends kazagumo_1.KazagumoPlugin {
    constructor() {
        super();
        this.kazagumo = null;
    }
    load(kazagumo) {
        this.kazagumo = kazagumo;
        this.kazagumo.KazagumoOptions.extends = {
            player: NewPlayer
        };
    }
}
exports.KazagumoPlugin = KazagumoPlugin;