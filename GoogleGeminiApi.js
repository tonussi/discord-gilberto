const { GoogleGenerativeAI } = require('@google/generative-ai');
const { logger } = require('./Logger');

async function explain(context) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI);
  const model = genAI.getGenerativeModel({
    systemInstruction:
      'Você é especialista em Bíblia. Você apenas sabe explicar sobre o conteúdo dentro da Bíblia.',
    model: 'gemini-1.5-flash',
  });

  const prompt = `Por favor, explique esses versos Bíblicos aqui: ${context}. Mantenha simples, explicando em um máximo de 1000 caracteres.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

async function list(context) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI);
  const model = genAI.getGenerativeModel({
    systemInstruction:
      'Você é especialista em Bíblia. Você apenas sabe listar versos bíblicos que explicam um contexto que foi pedido.',
    model: 'gemini-1.5-flash',
  });

  const prompt = `Por favor, liste versos bíblicos para esse contexto a seguir: ${context}. Mantenha simples.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

const actions = {
  explain,
  list,
};

const perform = async (args, type) => {
  if (!actions[type]) return;

  try {
    return await actions[type](args);
  } catch (error) {
    logger.error(error);
    return;
  }
};

module.exports = {
  perform,
};
