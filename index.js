const mostUsedCategories = [
    {
        name: "Login",
    },
    { name: "Education" },
    {
        name: "Learning Management System",
    },
    { name: "Student Affairs" },
    { name: "Inspire Library" },
];

const mostUsedCategoryItems = {
    Login: [
        {
            name: "Student Portal",
            link: "https://old-stdportal.tdtu.edu.vn/",
        },
    ],
    Education: [
        {
            name: "Program Specification - Cumulative Plots",
            link: "https://learninginfo.tdtu.edu.vn/sv_xemctdt",
        },
        {
            name: "Course Schedule",
            link: "https://lichhoc-lichthi.tdtu.edu.vn/tkb2.aspx",
        },
        {
            name: "Learning Outcomes",
            link: "https://ketquahoctap.tdtu.edu.vn/",
        },
    ],
    "Learning Management System": [
        {
            name: "E-learning",
            link: "https://stdportal.tdtu.edu.vn/main/elearningv2",
        },
        {
            name: "E-learning IT",
            link: "https://elit.tdtu.edu.vn/",
        },
    ],
    "Student Affairs": [
        {
            name: "Results of Training Evaluation",
            link: "https://old-stdportal.tdtu.edu.vn/main/hoatdongphongtrao",
        },
    ],
    "Inspire Library": [
        {
            name: "Reserve a Room",
            link: "http://reservearoom-sv.tdtu.edu.vn/",
        },
    ],
};

const categories = [
    {
        name: "Login",
    },
    { name: "Education" },
    {
        name: "Learning Management System",
    },
    { name: "Student Affairs" },
    { name: "Tuition Service Charge" },
    { name: "Inspire Library" },
];

const categoryItems = {
    Login: [
        {
            name: "Student Portal",
            link: "https://old-stdportal.tdtu.edu.vn/",
        },
    ],
    Education: [
        {
            name: "Program Specification - Cumulative Plots",
            link: "https://learninginfo.tdtu.edu.vn/sv_xemctdt",
        },
        {
            name: "Course Schedule",
            link: "https://lichhoc-lichthi.tdtu.edu.vn/tkb2.aspx",
        },
        {
            name: "Exam Date",
            link: "https://lichhoc-lichthi.tdtu.edu.vn/xemlichthi.aspx",
        },
        {
            name: "Learning Outcomes",
            link: "https://ketquahoctap.tdtu.edu.vn/",
        },
    ],
    "Learning Management System": [
        {
            name: "E-learning",
            link: "https://stdportal.tdtu.edu.vn/main/elearningv2",
        },
        {
            name: "E-learning IT",
            link: "https://elit.tdtu.edu.vn/",
        },
    ],
    "Student Affairs": [
        {
            name: "Results of Training Evaluation",
            link: "https://old-stdportal.tdtu.edu.vn/main/hoatdongphongtrao",
        },
        {
            name: "Registration for Student Certificate",
            link: "https://old-stdportal.tdtu.edu.vn/main/dangkychungnhansinhvien",
        },
        {
            name: "Results of Student Certificate",
            link: "https://old-stdportal.tdtu.edu.vn/main/ketquachungnhan",
        },
        {
            name: "Event Attendance",
            link: "https://old-stdportal.tdtu.edu.vn/main/diemdanh",
        },
        {
            name: "Record participation in extracurricular activities",
            link: "https://old-stdportal.tdtu.edu.vn/main/ghinhanthamgiasukienngoaikhoa",
        },
    ],
    "Tuition Service Charge": [
        {
            name: "Service account",
            link: "https://tkdv.tdtu.edu.vn/",
        },
        {
            name: "Tuition",
            link: "https://hocphilephi.tdtu.edu.vn/",
        },
    ],
    "Inspire Library": [
        {
            name: "Reserve a Room",
            link: "http://reservearoom-sv.tdtu.edu.vn/",
        },
        {
            name: "Document view statistics",
            link: "https://old-stdportal.tdtu.edu.vn/main/thongkexemtailieu",
        },
    ],
};

const categoriesHTML = document.querySelector("#categories");

function renderCategories(selectedOption) {
    categoriesHTML.innerHTML = "";
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
        categoryHeader.innerHTML = `<span>${category.name}</span>`;

        categoriesHTML.appendChild(categoryHeader);

        const categoryItemsHTML = items[category.name].map((item) => {
            const categoryHTML = document.createElement("p");
            const link = document.createElement("a");
            link.href = item.link;
            link.innerHTML = `<span>${item.name}</span>`;
            link.target = "_blank";
            categoryHTML.appendChild(link);
            categoryHTML.id = item.name.replace(/\s+/g, "_");
            return categoryHTML;
        });

        categoriesHTML.append(...categoryItemsHTML);
    });
}

renderCategories("essential-feature");

const changeViewButton = document.querySelector("#change-view-button");
changeViewButton.addEventListener("click", () => {
    if (changeViewButton.innerHTML === "Minimal") {
        changeViewButton.innerHTML = "All";
        renderCategories("all");
    } else {
        changeViewButton.innerHTML = "Minimal";
        renderCategories("essential-feature");
    }
});
