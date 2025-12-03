import sharp from "sharp";
import fs from "fs";
import path from "path";

const ROOT_DIR = path.join(process.cwd(), "public");

const RULES = [
    {
        name: "bunny",
        test: (filePath: string) => filePath.includes("/rabbit/bunny_"),
        resize: { width: 140 },
        quality: 80,
    },
    {
        name: "coin",
        test: (filePath: string) => filePath.includes("/icon/coin_"),
        resize: { width: 140 },
        quality: 80,
    },
    {
        name: "space-bg",
        test: (filePath: string) =>
            filePath.includes("/shared/space") ||
            filePath.endsWith("space.jpeg"),
        resize: null,
        quality: 80,
    },
];

const DEFAULT_RULE = {
    name: "default",
    resize: { width: 600 },
    quality: 80,
};

function findRule(filePath: string) {
    return RULES.find((r) => r.test(filePath)) || DEFAULT_RULE;
}

async function optimizeImage(filePath: string) {
    if (!/\.(png|jpg|jpeg)$/i.test(filePath)) return;

    const rel = filePath.replace(process.cwd(), "");
    const rule = findRule(rel);

    const output = filePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

    if (fs.existsSync(output)) {
        console.log(`SKIP: already exists → ${output}`);
        return;
    }

    let pipeline = sharp(filePath);

    if (rule.resize) {
        pipeline = pipeline.resize({
            width: rule.resize.width,
            withoutEnlargement: true,
        });
    }

    await pipeline.webp({ quality: rule.quality }).toFile(output);

    console.log(
        `✔ Optimized [${rule.name}] → ${output.replace(process.cwd(), "")}`
    );
}

function walk(dir: string) {
    fs.readdirSync(dir).forEach((name) => {
        const full = path.join(dir, name);
        const stat = fs.statSync(full);

        if (stat.isDirectory()) walk(full);
        else optimizeImage(full);
    });
}

console.log("🔧 Optimizing images...");
walk(ROOT_DIR);
console.log("Done!");
