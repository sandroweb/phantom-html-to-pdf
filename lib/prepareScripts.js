
var fs = require("memfs"),
    path = require("path");

console.log("Preparing phantom scripts");

fs.readFile(path.join(__dirname, "scripts", "logScriptPart.js"), "utf8", function(err, log){
    if (err) {
        return console.log(e);
    }

    fs.readFile(path.join(__dirname, "scripts", "conversionScriptPart.js"), "utf8", function (err, conversion){
        if (err) {
            return console.log(e);
        }

        fs.readFile(path.join(__dirname, "scripts", "serverScriptPart.js"), "utf8", function (err, serverScript){
            if (err) {
                return console.log(e);
            }

            fs.readFile(path.join(__dirname, "scripts", "standaloneScriptPart.js"), "utf8", function (err, standaloneScript){
                if (err) {
                    return console.log(e);
                }

                fs.writeFileSync(path.join(__dirname, "scripts", "serverScript.js"), serverScript.replace("$conversion", conversion).replace("$log", log));
                fs.writeFileSync(path.join(__dirname, "scripts", "standaloneScript.js"), standaloneScript.replace("$conversion", conversion).replace("$log", log));
            });
        });
    });
});
