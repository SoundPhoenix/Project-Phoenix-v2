import {
    ApplicationCommandType,
    PermissionFlagsBits,
    PermissionsBitField,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
    RESTPostAPIContextMenuApplicationCommandsJSONBody,
} from 'discord.js';

import { Args } from './index.js';
import { Language } from '../models/enum-helpers/index.js';
import { Lang } from '../services/index.js';

export const ChatCommandMetadata: {
    [command: string]: RESTPostAPIChatInputApplicationCommandsJSONBody;
} = {
    DEV: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.dev', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.dev'),
        description: Lang.getRef('commandDescs.dev', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.dev'),
        dm_permission: true,
        default_member_permissions: PermissionsBitField.resolve([
            PermissionFlagsBits.Administrator,
        ]).toString(),
        options: [
            {
                ...Args.DEV_COMMAND,
                required: true,
            },
        ],
    },
    HELP: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.help', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.help'),
        description: Lang.getRef('commandDescs.help', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.help'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.HELP_OPTION,
                required: true,
            },
        ],
    },
    INFO: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.info', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.info'),
        description: Lang.getRef('commandDescs.info', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.info'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Args.INFO_OPTION,
                required: true,
            },
        ],
    },
    TEST: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.test', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.test'),
        description: Lang.getRef('commandDescs.test', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.test'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
    LEADEROBARD: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.leaderboard', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.leaderboard'),
        description: Lang.getRef('commandDescs.leaderboard', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.leaderbaord'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
    VERIFY: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.verify', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.verify'),
        description: Lang.getRef('commandDescs.verify', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.verify'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
    IPINFO: {
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.ipinfo', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.ipinfo'),
        description: Lang.getRef('commandDescs.ipinfo', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.ipinfo'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
    SERVER:{
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.server', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.server'),
        description: Lang.getRef('commandDescs.server', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.server'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
    TIME:{
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.time', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.time'),
        description: Lang.getRef('commandDescs.ipinfo', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.time'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
    SET:{
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.set', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.set'),
        description: Lang.getRef('commandDescs.set', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.set'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
    SETUP:{
        type: ApplicationCommandType.ChatInput,
        name: Lang.getRef('chatCommands.setup', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('chatCommands.setup'),
        description: Lang.getRef('commandDescs.setup', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('commandDescs.setup'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
};

export const MessageCommandMetadata: {
    [command: string]: RESTPostAPIContextMenuApplicationCommandsJSONBody;
} = {
    VIEW_DATE_SENT: {
        type: ApplicationCommandType.Message,
        name: Lang.getRef('messageCommands.viewDateSent', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('messageCommands.viewDateSent'),
        default_member_permissions: undefined,
        dm_permission: true,
    },
};

export const UserCommandMetadata: {
    [command: string]: RESTPostAPIContextMenuApplicationCommandsJSONBody;
} = {
    VIEW_DATE_JOINED: {
        type: ApplicationCommandType.User,
        name: Lang.getRef('userCommands.viewDateJoined', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('userCommands.viewDateJoined'),
        default_member_permissions: undefined,
        dm_permission: true,
    },
};
