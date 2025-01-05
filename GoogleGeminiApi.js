const { GoogleGenerativeAI } = require('@google/generative-ai');

async function explainContext(context) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI);
  const model = genAI.getGenerativeModel({
    systemInstruction:
      'Você é especialista em Bíblia. Você apenas sabe explicar sobre o conteúdo dentro da Bíblia. Seu nome é Gilberto.',
    model: 'gemini-1.5-flash',
  });

  const prompt = `Por favor, explique esses versos Bíblicos aqui \
    here: ${context}. Mantenha simples, explicando em um máximo de 1000 caracteres.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = {
  explainContext,
};
