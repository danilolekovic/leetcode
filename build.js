const {
  statSync,
  writeFile,
  readFileSync,
  readdirSync,
} = require("fs");
const { join } = require("path");

const dirs = readdirSync("./").filter((f) => statSync(join("./", f)).isDirectory());

var htmlCode = `<html>
        <head>
            <title>Danilo's Leetcode Solutions</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body style="padding:3em;">
            <h2>Danilo's Leetcode Solutions</h2>
            <ul>\n`;

for (dir in dirs) {
    if (dirs[dir] != ".git" && dirs[dir] != "solutions") {
        htmlCode +=
          '\t\t\t\t<li><a href="./solutions/' +
          dirs[dir] +
          '.html">' +
          dirs[dir] +
          "</a></li>\n";
    }

    readdirSync(dirs[dir], "utf8").forEach((file) => {
      if (file.startsWith("solution") || file.startsWith("answer")) {
        var data = readFileSync(dirs[dir] + "/" + file, "utf8");
        var languageType = function() {
            if (file.split(".")[1] == "py") {
              return "python";
            } else if (file.split(".")[1] == "js" || file.split(".")[1] == "ts") {
              return "javascript";
            } else if (file.split(".")[1] == "sql") {
              return "mysql";
            } else if (
              file.split(".")[1] == "cpp" ||
              file.split(".")[1] == "c"
            ) {
              return "c";
            } else if (file.split(".")[1] == "rb") {
              return "ruby";
            } else if (file.split(".")[1] == "java") {
              return "java";
            }
        };
        
        var answerHtml =
          `<html>
                    <head>
                        <title>Danilo's Leetcode Solutions</title>
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
                    </head>
                    <body style="padding:3em;">
                    <h2><a href="../index.html">Go Back</a></h2>
                    <br>
                    <br>
                    <pre><code class="` +
          languageType() +
          `">` +
          data +
          `</pre></code>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                        <link rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/default.min.css">
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/highlight.min.js"></script>
                        <script>hljs.initHighlightingOnLoad();</script>
                    </body>
                </html>`;

        writeFile("./solutions/" + dirs[dir] + ".html", answerHtml, function (
          err
        ) {
          if (err) throw err;
        });
      }
    });
}

htmlCode += `
            </ul>
            
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </body>
    </html>`;

writeFile("./index.html", htmlCode, function (err) {
  if (err) throw err;
  console.log("Exported!");
});