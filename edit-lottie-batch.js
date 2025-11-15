const fs = require("fs");
const axios = require("axios");
const lottieToSvg = require("lottie-to-svg"); // npm install lottie-to-svg

async function convertLottieUrlToSvg(url, outputSvgPath) {
  try {
    // Baixa o JSON do lottie
    const response = await axios.get(url);
    const animationData = response.data;

    // Renderiza um frame como SVG (padrão é frame 0)
    const svg = await lottieToSvg(animationData, null, 0);

    // Escrever SVG no arquivo
    fs.writeFileSync(outputSvgPath, svg, "utf8");
    console.log("✅ SVG gerado em:", outputSvgPath);
  } catch (err) {
    console.error("❌ Erro na conversão:", err);
  }
}

const lottieJsonUrl =
  "https://color-test--reproduz.netlify.app/lottie/Ideias.json";
const outputSvg = "Ideias.svg";

convertLottieUrlToSvg(lottieJsonUrl, outputSvg);
