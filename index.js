const categories = [
    { name: "Login", fontawesome: "fa-solid fa-right-to-bracket" },
    { name: "Education", fontawesome: "fa-solid fa-school" },
    {
        name: "TDTU Learning Management System",
        fontawesome: "fa-solid fa-laptop-file",
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
        },
    ],
    Education: [
        {
            name: "Program Specification - Cumulative Plots",
            link: "https://learninginfo.tdtu.edu.vn/sv_xemctdt",
        },
        {
            name: "Planning for The Academic year",
            link: "https://fileviewer.tdtu.edu.vn/home/file?url=itJ57zehCA3dsM2rwVNFuWDT3KdUi%2BzfgIHnAFWpG48qfUYOOFLzuOIDu2iVoR7woAkI1sPn8CShisGxpoL6wvOP3%2BF9bnh%2B%2BGT7rjsKDYsk%2B8C8GVLREvJ1fODRPTD1JRSs8B0xDbbY3TrZ0tUe5Q%3D%3D",
        },
        { name: "Registration For Subjects", link: "http://dkmh.tdt.edu.vn/" },
        {
            name: "Course Schedule",
            link: "https://lichhoc-lichthi.tdtu.edu.vn/tkb2.aspx",
        },
        {
            name: "Exam Date",
            link: "https://lichhoc-lichthi.tdtu.edu.vn/xemlichthi.aspx",
        },
        {
            name: "Exam Date MOS",
            link: "https://old-stdportal.tdtu.edu.vn/main/lichthimos",
        },
        {
            name: "Academic Results",
            link: "https://old-stdportal.tdtu.edu.vn/main/ketquahocvu",
        },
        {
            name: "Learning Outcomes",
            link: "https://ketquahoctap.tdtu.edu.vn/",
        },
        { name: "Request support", link: "https://nopdon.tdtu.edu.vn/" },
    ],
    "TDTU Learning Management System": [
        {
            name: "E-learning",
            link: "https://old-stdportal.tdtu.edu.vn/main/elearningv2",
        },
        { name: "Graduation Internship", link: "https://tsnn.tdtu.edu.vn/" },
        {
            name: "Thesis/Substitution alternative for graduation",
            link: "https://tttn.tdtu.edu.vn/",
        },
    ],
    "Student Affairs": [
        {
            name: "Results of Training Evaluation",
            link: "https://old-stdportal.tdtu.edu.vn/main/hoatdongphongtrao",
        },
        {
            name: "Scholarship",
            link: "https://old-stdportal.tdtu.edu.vn/main/hocbong/thukhen",
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
        { name: "Service account", link: "https://tkdv.tdtu.edu.vn/" },
        { name: "Tuition", link: "https://hocphilephi.tdtu.edu.vn/" },
    ],
    "Inspire Library": [
        { name: "Reservea Room", link: "http://reservearoom-sv.tdtu.edu.vn/" },
        {
            name: "Document view statistics",
            link: "https://old-stdportal.tdtu.edu.vn/main/thongkexemtailieu",
        },
    ],
};

const categoriesHTML = document.querySelector("#categories");

categories.forEach((category) => {
    const categoryHeader = document.createElement("h2");

    categoryHeader.innerHTML = `<i class="fas ${category.fontawesome}"></i> <span>${category.name}</span>`;
    categoriesHTML.appendChild(categoryHeader);

    const categoryItemsHTML = categoryItems[category.name].map((item) => {
        const categoryHTML = document.createElement("p");
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.name;
        link.target = "_blank";
        categoryHTML.appendChild(link);
        categoryHTML.id = item.name.replace(/\s+/g, "_");
        return categoryHTML;
    });

    categoriesHTML.append(...categoryItemsHTML);
});
