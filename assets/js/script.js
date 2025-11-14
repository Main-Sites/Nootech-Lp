/* =============================
   Nootech Computer Centre - app.js
   Handles: Navigation, Section Switching, Notice Board,
   Google Drive Media Loading, Testimonials (basic), Footer Year
   ============================= */

/* -------------------- NAVIGATION & SPA -------------------- */
const menuItems = ["Home", "Admission", "Courses", "Exams", "Reports", "About Us"];

const navbar = document.getElementById("navbar");
const content = document.getElementById("content");

function buildNavbar() {
    let html = "<div class='menu'>";
    menuItems.forEach((item, index) => {
        html += `<a href='#' class='nav-link' data-section='sec${index}'>${item}</a>`;
    });
    html += "</div>";
    navbar.innerHTML = html;

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            switchSection(this.dataset.section);
            setActiveLink(this);
        });
    });
}

function setActiveLink(active) {
    document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
    active.classList.add("active");
}

function switchSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));

    let activeSec = document.getElementById(id);
    if (activeSec) activeSec.classList.add("active");
}

/* -------------------- HOME SECTION GENERATOR -------------------- */
function buildHomeSection() {
    const homeHTML = `
        <div class='section active' id='sec0'>
            <h1>Nootech Computer Centre</h1>
            <p>Registration No: <b>[ADD REG NO]</b></p>
            <p>Authorized Training Centre: <b>[ADD AUTH DETAILS]</b></p>

            <h2>Centre Video</h2>
            <iframe id="centerVideo" width="100%" height="300" frameborder="0" allow="autoplay"></iframe>

            <h2>Centre Image</h2>
            <img id="centerImage" width="100%" style="border-radius:8px;" />

            <h2>Testimonials</h2>
            <div id='testimonial-area'></div>
        </div>
    `;
    content.innerHTML += homeHTML;
}

/* -------------------- GOOGLE DRIVE MEDIA HANDLER -------------------- */
const driveMedia = {
    centerVideo: "FILE_ID_VIDEO",   // Replace with real file ID
    centerImage: "FILE_ID_IMAGE"    // Replace with real file ID
};

function loadDriveMedia() {
    document.getElementById("centerVideo").src = `https://drive.google.com/file/d/${driveMedia.centerVideo}/preview`;
    document.getElementById("centerImage").src = `https://drive.google.com/uc?export=view&id=${driveMedia.centerImage}`;
}

/* -------------------- NOTICE BOARD -------------------- */
const noticeBoard = document.getElementById("notice-board");
let notices = JSON.parse(localStorage.getItem("notices")) || [];

function renderNoticeBoard() {
    let html = `<h3>📢 Notices</h3>`;

    notices.forEach((note, i) => {
        html += `<div class='notice-item'>${note}</div>`;
    });

    noticeBoard.innerHTML = html;
}

/* -------------------- FOOTER -------------------- */
function buildFooter() {
    const footer = document.getElementById("footer");
    footer.innerHTML = `
        <div class='columns'>
            <div>
                <h3>Nootech Computer Centre</h3>
                <p>Your trusted institute for professional computer education.</p>
            </div>
            <div>
                <h4>Quick Links</h4>
                <a href='#'>Home</a><br>
                <a href='#'>Admission</a><br>
                <a href='#'>Courses</a>
            </div>
            <div>
                <h4>Policies</h4>
                <a href='#'>Privacy Policy</a><br>
                <a href='#'>Terms & Conditions</a>
            </div>
        </div>
        <p style='margin-top:20px;text-align:center;'>© <span id='year'></span> Nootech Computer Centre</p>
    `;

    document.getElementById("year").textContent = new Date().getFullYear();
}

/* -------------------- INIT APP -------------------- */
function init() {
    buildNavbar();
    buildHomeSection();
    renderNoticeBoard();
    buildFooter();
    loadDriveMedia();

    switchSection("sec0");
    setActiveLink(document.querySelector(".nav-link"));
}

window.onload = init;

# Folder Structure and File Linking Guide for Nootech Computer Centre Website

Below is a clean and simple guide describing how to set up, organize, and link the external CSS and JS files (Option C). You can keep this inside your project folder or README for future reference.

---
## ✅ Recommended Folder Structure
```
Nootech-Website/
│
├── index.html
│
├── assets/
│    ├── css/
│    │     └── style.css
│    │
│    ├── js/
│    │     └── script.js
│    │
│    └── media/
│          ├── images/
│          └── videos/
│
└── README.md (optional)
```
This keeps your project **clean, professional, and GitHub‑friendly**.

---
## ✅ How to Link CSS in index.html
Place this inside `<head>` of `index.html`:
```html
<link rel="stylesheet" href="assets/css/style.css">
```
This will apply all your external styles to the HTML page.

---
## ✅ How to Link JS in index.html
Place this line at the **end of the body** before `</body>`:
```html
<script src="assets/js/script.js"></script>
```
This ensures the HTML loads first, then the scripts.

---
## 🎥 Linking Google Drive Media Files
Use **shareable links**, then convert them to direct-access format.

### For images:
```
https://drive.google.com/uc?export=view&id=FILE_ID
```
Usage:
```html
<img src="https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" alt="Student Photo">
```

### For videos:
```
https://drive.google.com/uc?export=download&id=FILE_ID
```
Usage:
```html
<video controls>
  <source src="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID" type="video/mp4">
</video>
```

---
## 🧪 Testing Your Links on GitHub Pages
After uploading to GitHub:
1. Go to **Settings → Pages**
2. Select branch: `main` → folder: `/root`
3. Save
4. GitHub will give you a public URL like:
```
https://yourusername.github.io/Nootech-Website/
```
5. Open it and test:
   - CSS working? (Background, layout)  
   - JS working? (Menu interactivity)  
   - Images/videos loading from Google Drive?

---
## 🛠 Tips for Future Editing in VS Code or GitHub Copilot
- Keep **CSS only in style.css** and remove all inline styles.  
- Keep **JavaScript only in script.js** and remove inline `<script>` blocks.  
- Add comments like:
```css
/* Navigation Menu Styles */
```
```js
// Toggle submenu on click
```
Copilot will auto‑continue styles/scripts cleanly.

---
## 🎉 Your setup is ready!
Whenever you ask for updates, I can modify:  
✔ CSS (style.css)  
✔ JS (script.js)  
✔ Full HTML (index.html)

Just tell me what you want next! 😊
