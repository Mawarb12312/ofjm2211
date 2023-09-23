const {
  ActionRowBuilder,
  ChannelType,
  Colors,
  PermissionFlagsBits,
  StringSelectMenuBuilder,
} = require("discord.js");
const config = require("../../settings/config");
const {
  verif,
  list,
  growtopia,
  discord,
  another,
  title,
} = require("../../settings/config");

module.exports = {
  name: "interactionCreate",
  once: false,
  execute: async (interaction, client) => {
    if (!interaction.isButton()) return;

    if (interaction.customId == "ticket") {
      let ticket = interaction.guild.channels
        .create({
          name: `Select a category`,
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
                title: `${title}`,
                description: "Please select a category for your ticket!",
                color: Colors.Blurple,
              },
            ],
            components: [
              new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                  .setCustomId("category")
                  .setPlaceholder("Select a category")
                  .addOptions([
                    {
                      label: "License",
                      description: "Ticket for buy License",
                      value: "license",
                      emoji: `${list}`,
                    },
                    {
                      label: "Growtopia",
                      description: "Ticket for buy Growtopia service",
                      value: "growtopia",
                      emoji: `${growtopia}}`,
                    },
                    {
                      label: "Discord",
                      description: "Ticket for buy Discord service",
                      value: "discord",
                      emoji: `${discord}`,
                    },
                    {
                      label: "Another",
                      description: "Ticket for buy anoter service",
                      value: "another",
                      emoji: `${another}`,
                    },
                  ])
              ),
            ],
          });
          c.send({
            content: `${interaction.user}`,
          }).then((msg) => {
            setTimeout(() => {
              msg.delete(), 1000;
            });
          });
        });
      interaction.reply({
        content: `${verif} | Your ticket has been created!`,
        ephemeral: true,
      });
    }
  },
};
