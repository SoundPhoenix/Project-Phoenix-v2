import { ChatInputCommandInteraction, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import fetch from 'node-fetch'; //Makes the HTTP Request

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
            const start = Date.now();
            await fetch('https://discord.com/api/v9/gateway'); //Makes A get request to the discord API
            const end = Date.now();
            const ping = end - start;
            await InteractionUtils.send(
                intr,
                Lang.getEmbed('displayEmbeds.ping', data.lang, { ping: ping.toString() })
            );
        } catch (error) {
            console.error('Error occurred while pinging Discord API:', error);
            await InteractionUtils.send(intr, 'Error occurred while pinging Discord API.');
        }
    }
}
