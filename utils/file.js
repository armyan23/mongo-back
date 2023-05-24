const fs = require("fs");
const path = require("path");
const { randomId } = require("./helpers");

const uploadFile = async (filePath, file) => {
  const namePrefix = randomId(5);

  const dir = `./${filePath}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const fileName = file.originalname.toLowerCase().split(" ").join("-");
  const url = path.join(
    path.resolve(),
    ".",
    `${filePath}/${namePrefix}_${fileName}`
  );

  await fs.writeFileSync(url, file.buffer);
  return `${process.env.API_URL}/${filePath}/${namePrefix}_${fileName}`;
};

async function deleteImage(url) {
  const path = url?.replace(process.env.API_URL, `.`);
  await fs.unlink(path, (err) => {
    if (err) console.log(err);
  });
}

module.exports = { uploadFile, deleteImage };
