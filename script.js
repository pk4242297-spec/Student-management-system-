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


/* LOGIN DETAILS */

const CORRECT_USERNAME = "PRAVEENKUMAR";
const CORRECT_PASSWORD = "9585466422";


/* LOGIN */

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


function login() {

    const enteredUsername = username.value.trim().toUpperCase();
    const enteredPassword = password.value;

    if (
        enteredUsername === CORRECT_USERNAME &&
        enteredPassword === CORRECT_PASSWORD
    ) {

        loginMessage.textContent = "";

        loginPage.classList.remove("active");
        dashboardPage.classList.add("active");

    } else {

        loginMessage.textContent =
            "Invalid username or password.";

        loginMessage.style.color = "#d32f2f";
    }
}


/* SHOW / HIDE PASSWORD */

showPassword.addEventListener("click", function() {

    if (password.type === "password") {

        password.type = "text";
        showPassword.textContent = "🙈";

    } else {

        password.type = "password";
        showPassword.textContent = "👁️";

    }

});


/* PAGE DATA */

const pages = {

    profile: {
        title: "My Profile",
        icon: "👤",
        content: `
            <div class="info-grid">
                <div class="info-box">
                    <strong>Name</strong>
                    PRAVEENKUMAR
                </div>

                <div class="info-box">
                    <strong>Course</strong>
                    BCA - Artificial Intelligence
                </div>

                <div class="info-box">
                    <strong>Student ID</strong>
                    RCAS2025BCA256
                </div>

                <div class="info-box">
                    <strong>Status</strong>
                    Active Student
                </div>
            </div>
        `
    },

    courses: {
        title: "My Courses",
        icon: "📚",
        content: `
            <ul class="simple-list">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Python Programming</li>
                <li>Web Development</li>
                <li>Database Management System</li>
            </ul>
        `
    },

    attendance: {
        title: "Attendance",
        icon: "📅",
        content: `
            <div class="info-grid">
                <div class="info-box">
                    <strong>Overall Attendance</strong>
                    92%
                </div>

                <div class="info-box">
                    <strong>Present</strong>
                    110 Days
                </div>

                <div class="info-box">
                    <strong>Absent</strong>
                    10 Days
                </div>

                <div class="info-box">
                    <strong>Status</strong>
                    Good Attendance
                </div>
            </div>
        `
    },

    marks: {
        title: "Marks & Results",
        icon: "📝",
        content: `
            <ul class="simple-list">
                <li>Artificial Intelligence — 88%</li>
                <li>Machine Learning — 84%</li>
                <li>Python Programming — 89%</li>
                <li>Web Development — 91%</li>
            </ul>
        `
    },

    timetable: {
        title: "Timetable",
        icon: "🕐",
        content: `
            <ul class="simple-list">
                <li>09:00 AM — Artificial Intelligence</li>
                <li>10:00 AM — Python Programming</li>
                <li>11:00 AM — Machine Learning</li>
                <li>01:30 PM — Web Development</li>
                <li>02:30 PM — Database Management</li>
            </ul>
        `
    },

    assignments: {
        title: "Assignments",
        icon: "📖",
        content: `
            <ul class="simple-list">
                <li>AI Assignment — Submitted ✅</li>
                <li>Python Assignment — Submitted ✅</li>
                <li>Web Development — Pending ⏳</li>
                <li>Machine Learning — Pending ⏳</li>
            </ul>
        `
    },

    notifications: {
        title: "Notifications",
        icon: "🔔",
        content: `
            <ul class="simple-list">
                <li>📢 Internal examination schedule updated.</li>
                <li>📢 New assignment has been added.</li>
                <li>📢 Attendance report is available.</li>
            </ul>
        `
    },

    settings: {
        title: "Settings",
        icon: "⚙️",
        content: `
            <ul class="simple-list">
                <li>Account Settings</li>
                <li>Notification Settings</li>
                <li>Privacy Settings</li>
                <li>Application Preferences</li>
            </ul>
        `
    }

};


/* MENU BUTTONS */

document.querySelectorAll(".menu-card").forEach(function(card) {

    card.addEventListener("click", function() {

        const selectedPage = card.dataset.page;

        const data = pages[selectedPage];

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


/* BACK */

backBtn.addEventListener("click", function() {

    contentPage.classList.remove("active");
    dashboardPage.classList.add("active");

    window.scrollTo(0, 0);

});


/* LOGOUT */

logoutBtn.addEventListener("click", function() {

    dashboardPage.classList.remove("active");
    contentPage.classList.remove("active");

    loginPage.classList.add("active");

    username.value = "";
    password.value = "";
function openPage(page) {

    const pages = {
        profile: "pages/profile.html",
        courses: "pages/courses.html",
        attendance: "pages/attendance.html",
        marks: "pages/marks.html",
        results: "pages/results.html",
        timetable: "pages/timetable.html",
        assessments: "pages/assessments.html",
        notifications: "pages/notifications.html",
        settings: "pages/settings.html"
    };

    if (pages[page]) {
        window.location.href = pages[page];
    }
}
});