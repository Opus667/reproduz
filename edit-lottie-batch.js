const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const AdmZip = require("adm-zip"); // npm install adm-zip

const INPUT_DIR = path.join(__dirname, "./public/lottie_bckp");
const OUTPUT_DIR = path.join(__dirname, "./public/lottie");

// Garante que a pasta de saída existe
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

function editLottieJSON(data) {
  const NEW_COLOR = [0.733, 1.0, 0.0, 1.0];
  const NEW_STROKE = 1;
  const VECTOR_EFFECT = "non-scaling-stroke";

  function walk(obj) {
    if (Array.isArray(obj)) {
      obj.forEach(walk);
      return;
    }

    if (obj && typeof obj === "object") {
      // ---- 1) Troca cores em shapes (fills e strokes) ----
      if (obj.c && obj.c.k && Array.isArray(obj.c.k)) {
        obj.c.k = NEW_COLOR;
      }

      // ---- 2) Força espessura do stroke ----
      if (obj.w !== undefined && typeof obj.w === "number") {
        obj.w = NEW_STROKE;
      }

      // ---- 3) Aplica vectorEffect ----
      obj.vectorEffect = VECTOR_EFFECT;

      // continua recursão
      Object.values(obj).forEach(walk);
    }
  }

  walk(data);
  return data;
}

function convertJSONtoLottie(jsonPath, outputFolder) {
  try {
    const jsonData = fs.readFileSync(jsonPath, "utf8");
    const animation = JSON.parse(jsonData);

    const baseName = path.basename(jsonPath, ".json");
    const lottieFilename = `${baseName}.lottie`;
    const lottiePath = path.join(outputFolder, lottieFilename);

    // Estrutura padrão do .lottie
    const manifest = {
      generator: "Custom Node Script",
      version: "0.1",
      animations: [
        {
          id: "default",
          layers: [],
          version: animation.v || "5.7.4",
        },
      ],
    };

    // Cria o ZIP
    const zip = new AdmZip();
    zip.addFile(
      "manifest.json",
      Buffer.from(JSON.stringify(manifest, null, 2))
    );
    zip.addFile(
      "animations/default.json",
      Buffer.from(JSON.stringify(animation))
    );

    // Exporta o arquivo .lottie
    zip.writeZip(lottiePath);

    console.log("✔ Gerado:", lottiePath);
    return true;
  } catch (err) {
    console.error("Erro convertendo para .lottie:", err.message);
    return false;
  }
}

function processAllJSON() {
  const files = fs.readdirSync(INPUT_DIR).filter((f) => f.endsWith(".json"));

  if (files.length === 0) {
    console.log("Nenhum JSON encontrado na pasta input/");
    return;
  }

  let successLottie = false;

  files.forEach((file) => {
    const inputPath = path.join(INPUT_DIR, file);
    const outputJsonPath = path.join(OUTPUT_DIR, file);

    try {
      const raw = fs.readFileSync(inputPath, "utf8");
      const json = JSON.parse(raw);

      const edited = editLottieJSON(json);

      fs.writeFileSync(outputJsonPath, JSON.stringify(edited, null, 2));
      console.log("✔ JSON editado:", outputJsonPath);

      // tenta converter para .lottie
      const ok = convertJSONtoLottie(outputJsonPath, OUTPUT_DIR);
      if (ok) successLottie = true;
    } catch (err) {
      console.error("Erro processando", file, "→", err.message);
    }
  });

  if (successLottie)
    console.log("\n🎉 Pelo menos um .lottie foi gerado com sucesso!");
  else console.log("\n⚠ Nenhum .lottie gerado — mas os JSON foram editados.");
}

processAllJSON();
