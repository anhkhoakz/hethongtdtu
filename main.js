const categoryItems = {
    Login: [
        {
            name: "Student Portal",
            link: "https://old-stdportal.tdtu.edu.vn/",
            fontawesome: "fa-solid fa-right-to-bracket",
            mostUsed: true,
        },
    ],
    Education: [
        {
            name: "Program Specification - Cumulative Plots",
            link: "https://learninginfo.tdtu.edu.vn/sv_xemctdt",
            fontawesome: "fa-solid fa-share-nodes",
            mostUsed: true,
        },
        {
            name: "Course Schedule",
            link: "https://lichhoc-lichthi.tdtu.edu.vn/tkb2.aspx",
            fontawesome: "fa-solid fa-calendar-days",
            mostUsed: true,
        },
        {
            name: "Agenda",
            link: "TKB.JPG",
            fontawesome: "fa-solid fa-calendar-days",
            mostUsed: true,
        },
        {
            name: "Exam Date",
            link: "https://lichhoc-lichthi.tdtu.edu.vn/xemlichthi.aspx",
            fontawesome: "fa-solid fa-magnet",
        },
        {
            name: "Learning Outcomes",
            link: "https://ketquahoctap.tdtu.edu.vn/",
            fontawesome: "fa-solid fa-square-poll-horizontal",
            mostUsed: true,
        },
    ],
    "Learning Management System": [
        {
            name: "E-learning",
            link: "https://stdportal.tdtu.edu.vn/main/elearningv2",
            fontawesome: "fa-solid fa-laptop-file",
            mostUsed: true,
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
            mostUsed: true,
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
            mostUsed: true,
        },
        {
            name: "Document view statistics",
            link: "https://old-stdportal.tdtu.edu.vn/main/thongkexemtailieu",
            fontawesome: "fa-solid fa-database",
        },
    ],
};

const categoriesHTML = document.querySelector("#categories");

function renderCategories(selectedOption) {
    categoriesHTML.innerHTML = "";

    const items =
        selectedOption === "essential-feature"
            ? Object.fromEntries(
                  Object.entries(categoryItems).map(([key, value]) => [
                      key,
                      value.filter((item) => item.mostUsed),
                  ])
              )
            : categoryItems;

    Object.keys(items).forEach((categoryName) => {
        if (items[categoryName].length === 0) return;

        const categoryHeader = document.createElement("h2");
        const categoryLink = document.createElement("a");
        const categoryId = categoryName.replace(/\s+/g, "_");
        categoryHeader.id = categoryId;
        categoryLink.href = `#${categoryId}`;
        categoryLink.innerHTML = `<i class="fas ${items[categoryName][0].fontawesome}"></i> <span>${categoryName}</span>`;
        categoryHeader.appendChild(categoryLink);

        categoriesHTML.appendChild(categoryHeader);

        const categoryItemsHTML = items[categoryName].map((item) => {
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

const savedView = localStorage.getItem("viewPreference") || "essential-feature";
renderCategories(savedView);

const changeViewButton = document.querySelector("#change-view-button");
changeViewButton.innerHTML =
    savedView === "essential-feature" ? "Minimal" : "All";

changeViewButton.addEventListener("click", () => {
    if (changeViewButton.innerHTML === "Minimal") {
        changeViewButton.innerHTML = "All";
        renderCategories("all");
        localStorage.setItem("viewPreference", "all");
    } else {
        changeViewButton.innerHTML = "Minimal";
        renderCategories("essential-feature");
        localStorage.setItem("viewPreference", "essential-feature");
    }
});
