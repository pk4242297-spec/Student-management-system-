const express = require("express");
const fs = require("node:fs/promises");
const path = require("node:path");

const app = express();
const pagesFile = path.join(__dirname, "data", "pages.json");

app.use(express.json());

app.get("/api/pages", async function(_request, response) {
    try {
        const pages = await fs.readFile(pagesFile, "utf8");
        response.type("json").send(pages);
    } catch (error) {
        console.error("Unable to read page data:", error);
        response.status(500).json({ message: "Student information is unavailable." });
    }
});

app.post("/api/login", function(request, response) {
    const expectedUsername = process.env.STUDENT_USERNAME;
    const expectedPassword = process.env.STUDENT_PASSWORD;

    if (!expectedUsername || !expectedPassword) {
        return response.status(503).json({
            message: "Login is not configured on the server."
        });
    }

    const submittedUsername = String(request.body?.username || "").trim().toUpperCase();
    const submittedPassword = String(request.body?.password || "");

    if (
        submittedUsername !== expectedUsername.trim().toUpperCase() ||
        submittedPassword !== expectedPassword
    ) {
        return response.status(401).json({ message: "Invalid username or password." });
    }

    return response.json({ success: true });
});

app.use(express.static(__dirname));

if (require.main === module) {
    const port = process.env.PORT || 3000;
    app.listen(port, function() {
        console.log(`Student Management System running at http://localhost:${port}`);
    });
}

module.exports = app;