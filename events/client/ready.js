const colors = require('colors');
const config = require('../../settings/config');
const {title,footer,verif} = require("../../settings/config");
const { ActionRowBuilder, Colors, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'ready',
    once: false,
    execute: async (client) => {
        console.log(`[READY] ${client.user.tag} (${client.user.id}) is ready !`.green);

        let channelTicket = client.channels.cache.get(config.ticket_channel);
        await channelTicket.send({ content: "." })
        await channelTicket.bulkDelete(2);

        await channelTicket.send({
            embeds: [{
                title: `${title}`,
                description: `${verif} If you want to buy or need support, click on the button below !`,
                color: Colors.Blurple,
                footer: {
                    name: `${footer}`,
                },
                timestamp: new Date(),
            }],
            components: [
                new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder() .setCustomId('ticket') .setLabel('Open a ticket') .setStyle(ButtonStyle.Secondary)
                )
            ]
        })
    }
}
