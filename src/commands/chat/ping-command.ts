import { ChatInputCommandInteraction, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { Language } from '../../models/enum-helpers/index.js';
import { EventData } from '../../models/internal-models.js';
import { Lang } from '../../services/index.js';
import { InteractionUtils } from '../../utils/index.js';
import { Command, CommandDeferType } from '../index.js';

export class PingCommand implements Command {
    public names = [Lang.getRef('chatCommands.ping', Language.Default)];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.PUBLIC;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        try {
            const apiLatency = Math.round(intr.client.ws.ping);
            const botLatency = Date.now() - intr.createdTimestamp;
            await InteractionUtils.send(
                intr,
                Lang.getEmbed('displayEmbeds.ping', data.lang, {
                    API_LATENCY: `${apiLatency || 'N/A'}ms`,
                    BOT_LATENCY: `${botLatency || 'N/A'}ms`,
                })
            );
        } catch (error) {
            console.error(error);
            await InteractionUtils.send(
                intr,
                Lang.getEmbed('errorEmbeds.command', data.lang, {
                    ERROR_CODE: error.code,
                })
            );
        }
    }
}
