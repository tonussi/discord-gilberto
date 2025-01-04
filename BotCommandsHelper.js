const config = {
  PREFIX: '.',
  INVITE:
    'Hello there, Come To My _Server_ // Olá amigo! Venha Para Nosso _Servidor_ // https://discord.gg/AzAKua8.',
  HELP: {
    en: 'This bot shows bible verses from Wpnt. Wpnt is a translation of the new testament text based on \
the manuscripts of the family 35. This bot also shows verses from acf (Almeida corrigida e fiel 2007), \
a portuguese version of the bible based on masoretic texts and textus receptus. \
This bot was destined to portuguese people, so the references will mostly be in portuguese. \
Type /c and press enter to show a list of commands and descriptions.',
    pt: 'O principal objetivo deste bot é ensinar sobre manuscritos do texto do novo testamento. \
Este bot mostra versos bíblicos da Wpnt. Wpnt é uma tradução baseada nos manuscritos da família 35. \
Este bost também repassa versos da Acf (Almeida corrigida e fiel 2007), \
uma versão em língua brasileira da Bíblia. Acf é baseada no Texto masorético e Textus receptus. \
O bot foi feito para usuários da língua brasileira. \
por isto as referências estão em brasileiro i.e. joão, marcos, gênesis, etc. \
Utilize /c para ver comandos e descrições.',
  },
  ACTIVITIES: [
    'Learning about the Bible',
    'Reading other books',
    'Learning about ancient history',
    'Learning about other religions',
    'Accepting praying requests',
  ],
  COMMANDS:
    'Comandos do bot // Bot commands =>\n\n\
.hen for a description of the bot\n\
.hpt para uma descrição do bot\n\n\
**Bible Description // Descrição da Edição Bíblica**\n\n\
.bd ACF para detalhes da ACF sendo usada\n\
.bd WPNT for details of this version being used\n\n\
**Commentary Description // Descrição do Comentário**\n\n\
.cd RWP para detalhes do comentário sendo usado\n\
.cd POOLE for details of this commentary being used\n\n\
**Bible Verse // Verso Bíblico**\n\n\
.bv João 1:1 ACF\n\
.bv Gênesis 1:1 ACF\n\
.bv João 13:16 WPNT\n\n\
**Bible Commentary // Comentário Bíblico**\n\n\
.bc João 1:1 RWP\n\
.bc Gênesis 1:1 POOLE\n\n\
**Bible Words Search // Busca Palavras na Bíblia**\n\n\
.bs amor,irmão,salvar,ovelha,... ACF João\n\
.bs amor,irmão,salvar,ovelha,... ACF Marcos\n\
.bs amor,irmão,salvar,ovelha,... ACF Gênesis\n\
.bs amor,irmão,salvar,ovelha,... ACF Apocalipse\n\
.bs love,Jesus,brothers WPNT Mateus\n\n\
**Extra Commands // Outros Comandos**\n\n\
.c Para ver os todos comandos disponiveis\n\
.a Mostra todas as Bíblias disponíveis e Comentários Bíblicos\n\
.refs Mostra as possibilidades de formatação das referências bíblicas\n\
.iv Para pegar um link permanente do chat!',
};

module.exports.config = config;
