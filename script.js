const loginPage = document.getElementById("loginPage");
const dashboardPage = document.getElementById("dashboardPage");
const contentPage = document.getElementById("contentPage");

const username = document.getElementById("username");
const password = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const backBtn = document.getElementById("backBtn");

const showPassword = document.getElementById("showPassword");
const loginMessage = document.getElementById("loginMessage");

const pageTitle = document.getElementById("pageTitle");
const contentIcon = document.getElementById("contentIcon");
const pageContent = document.getElementById("pageContent");

let pages = {};

loginBtn.addEventListener("click", login);

username.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        login();
    }
});

password.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        login();
    }
});

async function login() {
    loginBtn.disabled = true;
    loginMessage.textContent = "";

    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username.value.trim(),
                password: password.value
            })
        });
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Invalid username or password.");
        }

        const pagesResponse = await fetch("/api/pages");
        if (!pagesResponse.ok) {
            throw new Error("Could not load student information.");
        }
        pages = await pagesResponse.json();

        loginMessage.textContent = "";
        loginPage.classList.remove("active");
        dashboardPage.classList.add("active");
    } catch (error) {
        loginMessage.textContent = error.message || "Unable to connect to the server.";
        loginMessage.style.color = "#d32f2f";
    } finally {
        loginBtn.disabled = false;
    }
}

showPassword.addEventListener("click", function() {
    const isPassword = password.type === "password";
    password.type = isPassword ? "text" : "password";
    showPassword.textContent = isPassword ? "🙈" : "👁️";
});

document.querySelectorAll(".menu-card").forEach(function(card) {
    card.addEventListener("click", function() {
        const data = pages[card.dataset.page];
        if (!data) {
            return;
        }

        pageTitle.textContent = data.title;
        contentIcon.textContent = data.icon;
        pageContent.innerHTML = data.content;
        dashboardPage.classList.remove("active");
        contentPage.classList.add("active");
        window.scrollTo(0, 0);
    });
});

backBtn.addEventListener("click", function() {
    contentPage.classList.remove("active");
    dashboardPage.classList.add("active");
    window.scrollTo(0, 0);
});
logoutBtn.addEventListener("click", function() {
    dashboardPage.classList.remove("active");
    contentPage.classList.remove("active");

    loginPage.classList.add("active");
    username.value = "PRAVEENKUMAR";
    password.value = "9585466422";
});
