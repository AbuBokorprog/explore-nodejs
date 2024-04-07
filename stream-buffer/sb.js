const fs = require("fs");

const readableStream = fs.createReadStream(__dirname + "/text.txt", "utf-8");

readableStream.on("data", (data) => {
  console.log(data);

  const writeableStream = fs.createWriteStream(__dirname + "/test.txt");

  writeableStream.write(data, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
});
