const {
  ActionRowBuilder,
  ChannelType,
  Colors,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits,
} = require("discord.js");
const config = require("../../settings/config");
const {
  community,
  title,
  footer,
  verif,
  no,
} = require("../../settings/config");

module.exports = {
  name: "interactionCreate",
  once: false,
  execute: async (interaction, client) => {
    if (!interaction.isStringSelectMenu()) return;

    let support_team = config.support_team;

    let AlreadyChannel = interaction.guild.channels.cache.find(
      (c) => c.topic == interaction.user.id
    );
    if (AlreadyChannel)
      return interaction.reply({
        content: `${no} | You already have a ticket open <@${interaction.user.id}> | Your ticket : ${interaction.channel.name}`,
        ephemeral: true,
      });

    if (interaction.values[0] === "license") {
      interaction.channel.delete();
      let ticket = interaction.guild.channels
        .create({
          name: `[LC] Ticket ${interaction.user.username}`,
          topic: interaction.user.id,
          type: ChannelType.GuildText,
          parent: config.ticket_category,
          permissionOverwrites: [
            {
              id: interaction.user.id,
              allow: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
              ],
              deny: [PermissionFlagsBits.MentionEveryone],
            },
            {
              id: support_team,
              allow: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
              ],
              deny: [PermissionFlagsBits.MentionEveryone],
            },
            {
              id: interaction.guild.id,
              deny: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
                PermissionFlagsBits.MentionEveryone,
              ],
            },
          ],
        })
        .then((c) => {
          c.send({
            embeds: [
              {
                title: `${community} - ${title}`,
                description: `**[LICENSE]**\n\nWelcome to your ticket ${interaction.user} !\nA staff will come and take care of you as soon as possible ! <@&${support_team}>\n\n${verif} Verified Ticket for ${interaction.user.id}`,
                color: Colors.Blurple,
                footer: {
                  text: `${footer}`,
                },
                timestamp: new Date(),
              },
            ],
            components: [
              new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                  .setCustomId("close")
                  .setLabel("Close")
                  .setStyle(ButtonStyle.Danger)
              ),
            ],
          });
          c.send({
            content: `${interaction.user} <@&${config.support_team}>`,
          }).then((msg) => {
            setTimeout(() => {
              msg.delete(), 1000;
            });
          });
        });
    } else if (interaction.values[0] === "growtopia") {
      interaction.channel.delete();
      let ticket = interaction.guild.channels
        .create({
          name: `[GT] Ticket ${interaction.user.username}`,
          topic: interaction.user.id,
          type: ChannelType.GuildText,
          parent: config.ticket_category,
          permissionOverwrites: [
            {
              id: interaction.user.id,
              allow: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
              ],
              deny: [PermissionFlagsBits.MentionEveryone],
            },
            {
              id: support_team,
              allow: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
              ],
              deny: [PermissionFlagsBits.MentionEveryone],
            },
            {
              id: interaction.guild.id,
              deny: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
                PermissionFlagsBits.MentionEveryone,
              ],
            },
          ],
        })
        .then((c) => {
          c.send({
            embeds: [
              {
                title: `${community} - ${title}`,
                description: `**[GROWTOPIA]**\n\nWelcome to your ticket ${interaction.user} !\nA staff will come and take care of you as soon as possible ! <@&${support_team}>\n\n${verif} Verified Ticket for ${interaction.user.id}`,
                color: Colors.Blurple,
                footer: {
                  text: `${footer}`,
                },
                timestamp: new Date(),
              },
            ],
            components: [
              new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                  .setCustomId("close")
                  .setLabel("Close")
                  .setStyle(ButtonStyle.Danger)
              ),
            ],
          });
          c.send({
            content: `${interaction.user} <@&${config.support_team}>`,
          }).then((msg) => {
            setTimeout(() => {
              msg.delete(), 1000;
            });
          });
        });
    } else if (interaction.values[0] === "discord") {
      interaction.channel.delete();
      let ticket = interaction.guild.channels
        .create({
          name: `[DC] Ticket ${interaction.user.username}`,
          topic: interaction.user.id,
          type: ChannelType.GuildText,
          parent: config.ticket_category,
          permissionOverwrites: [
            {
              id: interaction.user.id,
              allow: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
              ],
              deny: [PermissionFlagsBits.MentionEveryone],
            },
            {
              id: support_team,
              allow: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
              ],
              deny: [PermissionFlagsBits.MentionEveryone],
            },
            {
              id: interaction.guild.id,
              deny: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
                PermissionFlagsBits.MentionEveryone,
              ],
            },
          ],
        })
        .then((c) => {
          c.send({
            embeds: [
              {
                title: `${community} - ${title}`,
                description: `**[DISCORD]**\n\nWelcome to your ticket ${interaction.user} !\nA staff will come and take care of you as soon as possible ! <@&${support_team}>\n\n${verif} Verified Ticket for ${interaction.user.id}`,
                color: Colors.Blurple,
                footer: {
                  text: `${footer}`,
                },
                timestamp: new Date(),
              },
            ],
            components: [
              new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                  .setCustomId("close")
                  .setLabel("Close")
                  .setStyle(ButtonStyle.Danger)
              ),
            ],
          });
          c.send({
            content: `${interaction.user} <@&${config.support_team}>`,
          }).then((msg) => {
            setTimeout(() => {
              msg.delete(), 1000;
            });
          });
        });
    } else if (interaction.values[0] === "another") {
      interaction.channel.delete();
      let ticket = interaction.guild.channels
        .create({
          name: `[AN] Ticket ${interaction.user.username}`,
          topic: interaction.user.id,
          type: ChannelType.GuildText,
          parent: config.ticket_category,
          permissionOverwrites: [
            {
              id: interaction.user.id,
              allow: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
              ],
              deny: [PermissionFlagsBits.MentionEveryone],
            },
            {
              id: support_team,
              allow: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
              ],
              deny: [PermissionFlagsBits.MentionEveryone],
            },
            {
              id: interaction.guild.id,
              deny: [
                PermissionFlagsBits.ViewChannel,
                PermissionFlagsBits.ReadMessageHistory,
                PermissionFlagsBits.SendMessages,
                PermissionFlagsBits.MentionEveryone,
              ],
            },
          ],
        })
        .then((c) => {
          c.send({
            embeds: [
              {
                title: `${community} - ${title}`,
                description: `**[ANOTHER]**\n\nWelcome to your ticket ${interaction.user} !\nA staff will come and take care of you as soon as possible ! <@&${support_team}>\n\n${verif} Verified Ticket for ${interaction.user.id}`,
                color: Colors.Blurple,
                footer: {
                  text: `${footer}`,
                },
                timestamp: new Date(),
              },
            ],
            components: [
              new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                  .setCustomId("close")
                  .setLabel("Close")
                  .setStyle(ButtonStyle.Danger)
              ),
            ],
          });
          c.send({
            content: `${interaction.user} <@&${config.support_team}>`,
          }).then((msg) => {
            setTimeout(() => {
              msg.delete(), 1000;
            });
          });
        });
    }
  },
};
