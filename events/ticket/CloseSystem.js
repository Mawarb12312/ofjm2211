const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Colors,
} = require("discord.js");
const config = require("../../settings/config");
const { list, title, footer } = require("../../settings/config");
const transcript = require("discord-html-transcripts");

module.exports = {
  name: "interactionCreate",
  once: false,
  execute: async (interaction, client) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === "close") {
      interaction.reply({
        content: `${list} Are you sure you want to delete the ticket?`,
        ephemeral: true,
      });

      interaction.channel.send({
        embeds: [
          {
            title: `${title}`,
            description:
              "The ticket will be closed do you want the **transcript** of it ?",
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
              .setCustomId("yes")
              .setLabel("Yes")
              .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
              .setCustomId("no")
              .setLabel("No")
              .setStyle(ButtonStyle.Danger)
          ),
        ],
      });
    } else if (interaction.customId === "yes") {
      let ticket_logs = client.channels.cache.get(config.ticket_logs);

      await ticket_logs.send({
        embeds: [
          {
            title: `${title}`,
            description: `New ticket closed (${interaction.channel.name}) by ${interaction.user}\n\n${list} Transcipt : **YES**`,
            color: Colors.Blurple,
            footer: {
              text: `${footer}`,
            },
            timestamp: new Date(),
          },
        ],
      });

      const user = interaction.author;
      await user.send({
        embeds: [
          {
            title: `${title}`,
            description: `This your transcript\n\n[LIKK]`,
            color: Colors.Blurple,
            footer: {
              text: `${footer}`,
            },
            timestamp: new Date(),
          },
        ],
        files: [await transcript.createTranscript(interaction.channel)],
      });

      await interaction.channel.send({
        embeds: [
          {
            title: `${title}`,
            description: `Ticket closed by ${interaction.user}`,
            color: Colors.Blurple,
            footer: {
              text: `${footer}`,
            },
            timestamp: new Date(),
          },
        ],
      });

      await interaction.channel.delete();
    } else if (interaction.customId === "no") {
      let ticket_logs = client.channels.cache.get(config.ticket_logs);

      await ticket_logs.send({
        embeds: [
          {
            title: `${title}`,
            description: `New ticket closed (${interaction.channel.name}) by ${interaction.user}\n\n${list} Transcipt : **NO**`,
            color: Colors.Blurple,
            footer: {
              text: `${footer}`,
            },
            timestamp: new Date(),
          },
        ],
      });

      const user = interaction.user;
      await user.send({
        embeds: [
          {
            title: `${title}`,
            description: `This your transcript chat in Farhan Store\n\nhttps://discord.gg/g4ZFp2mXZm`,
            color: Colors.Blurple,
            footer: {
              text: `${footer}`,
            },
            timestamp: new Date(),
          },
        ],
        files: [await transcript.createTranscript(interaction.channel)],
      });

      await interaction.channel.send({
        embeds: [
          {
            title: `${title}`,
            description: `Ticket closed by ${interaction.user}`,
            color: Colors.Blurple,
            footer: {
              text: `${footer}`,
            },
            timestamp: new Date(),
          },
        ],
      });

      await interaction.channel.delete();
    }
  },
};
