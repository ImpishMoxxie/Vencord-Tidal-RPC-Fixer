/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Samu
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import definePlugin from "../utils/types";

export default definePlugin({
    name: "Tidal RPC Fixer",
    authors: [
        {
            id: 712653921692155965n,
            name: "MGK <3",
        },
    ],
    description: "Fixes the RPC from saying Playing to Listening when usign https://github.com/purpl3F0x/TIDAL-Discord-Rich-Presence-UNOFFICIAL",
    patches: [
        {
            find: '.displayName="LocalActivityStore"',
            replacement: {
                match: /LOCAL_ACTIVITY_UPDATE:function\((\i)\)\{/,
                replace: "$&$self.replaceType($1.activity);",
            }
        }
    ],
    replaceType(activity) {
        if (!activity) return;
        if (activity.name == "TIDAL"){
            activity.type = 2;
        }
    },
});
