const mostUsedCategories = [
    {
        name: "Login",
        fontawesome: "fa-solid fa-passport",
    },
    { name: "Education", fontawesome: "fa-solid fa-school" },
    {
        name: "Learning Management System",
        fontawesome: "fa-solid fa-bars-progress",
    },
    { name: "Student Affairs", fontawesome: "fa-solid fa-user-graduate" },
    { name: "Inspire Library", fontawesome: "fa-solid fa-book-open-reader" },
];

const mostUsedCategoryItems = {
    Login: [
        {
            name: "Student Portal",
            link: "https://old-stdportal.tdtu.edu.vn/",
            fontawesome: "fa-solid fa-right-to-bracket",
        },
    ],
    Education: [
        {
            name: "Program Specification - Cumulative Plots",
            link: "https://learninginfo.tdtu.edu.vn/sv_xemctdt",
            fontawesome: "fa-solid fa-share-nodes",
        },
        {
            name: "Course Schedule",
            link: "https://lichhoc-lichthi.tdtu.edu.vn/tkb2.aspx",
            fontawesome: "fa-solid fa-calendar-days",
        },
        {
            name: "Learning Outcomes",
            link: "https://ketquahoctap.tdtu.edu.vn/",
            fontawesome: "fa-solid fa-star",
        },
    ],
    "Learning Management System": [
        {
            name: "E-learning",
            link: "https://old-stdportal.tdtu.edu.vn/main/elearningv2",
            fontawesome: "fa-solid fa-laptop-file",
        },
        {
            name: "E-learning IT",
            link: "https://elit.tdtu.edu.vn/",
            fontawesome: "fa-brands fa-gitlab",
        },
    ],
    "Student Affairs": [
        {
            name: "Results of Training Evaluation",
            link: "https://old-stdportal.tdtu.edu.vn/main/hoatdongphongtrao",
            fontawesome: "fa-solid fa-trophy",
        },
    ],
    "Inspire Library": [
        {
            name: "Reserve a Room",
            link: "http://reservearoom-sv.tdtu.edu.vn/",
            fontawesome: "fa-solid fa-building",
        },
    ],
};

const categories = [
    {
        name: "Login",
        fontawesome: "fa-solid fa-passport",
    },
    { name: "Education", fontawesome: "fa-solid fa-school" },
    {
        name: "Learning Management System",
        fontawesome: "fa-solid fa-bars-progress",
    },
    { name: "Student Affairs", fontawesome: "fa-solid fa-user-graduate" },
    { name: "Tuition Service Charge", fontawesome: "fa-solid fa-money-bill" },
    { name: "Inspire Library", fontawesome: "fa-solid fa-book-open-reader" },
];

const categoryItems = {
    Login: [
        {
            name: "Student Portal",
            link: "https://old-stdportal.tdtu.edu.vn/",
            fontawesome: "fa-solid fa-right-to-bracket",
        },
    ],
    Education: [
        {
            name: "Program Specification - Cumulative Plots",
            link: "https://learninginfo.tdtu.edu.vn/sv_xemctdt",
            fontawesome: "fa-solid fa-share-nodes",
        },
        {
            name: "Course Schedule",
            link: "https://lichhoc-lichthi.tdtu.edu.vn/tkb2.aspx",
            fontawesome: "fa-solid fa-calendar-days",
        },
        {
            name: "Exam Date",
            link: "https://lichhoc-lichthi.tdtu.edu.vn/xemlichthi.aspx",
            fontawesome: "fa-solid fa-magnet",
        },
        {
            name: "Learning Outcomes",
            link: "https://ketquahoctap.tdtu.edu.vn/",
            fontawesome: "fa-solid fa-star",
        },
    ],
    "Learning Management System": [
        {
            name: "E-learning",
            link: "https://old-stdportal.tdtu.edu.vn/main/elearningv2",
            fontawesome: "fa-solid fa-laptop-file",
        },
        {
            name: "E-learning IT",
            link: "https://elit.tdtu.edu.vn/",
            fontawesome: "fa-brands fa-gitlab",
        },
    ],
    "Student Affairs": [
        {
            name: "Results of Training Evaluation",
            link: "https://old-stdportal.tdtu.edu.vn/main/hoatdongphongtrao",
            fontawesome: "fa-solid fa-trophy",
        },
        {
            name: "Registration for Student Certificate",
            link: "https://old-stdportal.tdtu.edu.vn/main/dangkychungnhansinhvien",
            fontawesome: "fa-solid fa-certificate",
        },
        {
            name: "Results of Student Certificate",
            link: "https://old-stdportal.tdtu.edu.vn/main/ketquachungnhan",
            fontawesome: "fa-solid fa-stamp",
        },
        {
            name: "Event Attendance",
            link: "https://old-stdportal.tdtu.edu.vn/main/diemdanh",
            fontawesome: "fa-solid fa-clipboard-user",
        },
        {
            name: "Record participation in extracurricular activities",
            link: "https://old-stdportal.tdtu.edu.vn/main/ghinhanthamgiasukienngoaikhoa",
            fontawesome: "fa-solid fa-leaf",
        },
    ],
    "Tuition Service Charge": [
        {
            name: "Service account",
            link: "https://tkdv.tdtu.edu.vn/",
            fontawesome: "fa-solid fa-credit-card",
        },
        {
            name: "Tuition",
            link: "https://hocphilephi.tdtu.edu.vn/",
            fontawesome: "fa-solid fa-money-bill-1",
        },
    ],
    "Inspire Library": [
        {
            name: "Reserve a Room",
            link: "http://reservearoom-sv.tdtu.edu.vn/",
            fontawesome: "fa-solid fa-building",
        },
        {
            name: "Document view statistics",
            link: "https://old-stdportal.tdtu.edu.vn/main/thongkexemtailieu",
            fontawesome: "fa-solid fa-database",
        },
    ],
};

const categoriesHTML = document.querySelector("#categories");
const selectElement = document.querySelector("select");

function renderCategories(selectedOption) {
    categoriesHTML.innerHTML = ""; // Clear previous content
    const data =
        selectedOption === "essential-feature"
            ? mostUsedCategories
            : categories;
    const items =
        selectedOption === "essential-feature"
            ? mostUsedCategoryItems
            : categoryItems;

    data.forEach((category) => {
        const categoryHeader = document.createElement("h2");
        categoryHeader.innerHTML = `<i class="fas ${category.fontawesome}"></i> <span>${category.name}</span>`;
        categoriesHTML.appendChild(categoryHeader);

        const categoryItemsHTML = items[category.name].map((item) => {
            const categoryHTML = document.createElement("p");
            const link = document.createElement("a");
            link.href = item.link;
            link.innerHTML = `<i class="fas ${item.fontawesome}"></i> <span>${item.name}</span>`;
            link.target = "_blank";
            categoryHTML.appendChild(link);
            categoryHTML.id = item.name.replace(/\s+/g, "_");
            return categoryHTML;
        });

        categoriesHTML.append(...categoryItemsHTML);
    });
}

// Initial render with essential features
renderCategories("essential-feature");

// Event listener for dropdown changes
selectElement.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    renderCategories(selectedOption);
});
