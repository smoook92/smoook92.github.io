import logo from "./assets/images/me.png";
import project1 from "./pages/portfolio/projects/project-1.png";
import project2 from "./pages/portfolio/projects/project-2.png";
import project3 from "./pages/portfolio/projects/project-3.png";
import project4 from "./pages/portfolio/projects/project-4.png";
import project5 from "./pages/portfolio/projects/project-5.png";
import project6 from "./pages/portfolio/projects/project-6.png";
import project7 from "./pages/portfolio/projects/project-7.png";

const logotext = "smoook92";
const meta = {
    title: "Сорин Михайлов | Программист, Web-Разработчик",
    description: "Я Сорин Михайлов, Web-разработчик",
};

const introdata = {
    title: "Я Сорин Михайлов",
    animated: {
        first: "Я разрабатываю сайты с нуля",
        second: "Я фрилансер программист",
        third: "Я кодирую классные сайты",
    },
    description: "Программирование - это искусство, где бинарные нули и единицы становятся музыкой инноваций и гармонией технологий.",
    your_img_url: logo,
};

const dataabout = {
    title: "Немного о себе",
    aboutme: "Начинающий PHP-разработчик с базовыми знаниями в веб-разработке. Имею опыт создания небольших проектов, таких как блог, сайт с парсингом данных и других веб-приложений. Постоянно учусь и стремлюсь улучшать свои навыки в PHP и сопутствующих технологиях. Умею работать с базами данных, HTML, CSS и JavaScript, знаком с Git. В поиске новых вызовов и возможностей для профессионального роста.",
};
const worktimeline = [{
        jobtitle: "Программист PHP",
        where: "Фриланс биржи",
        date: "12.2018 - настоящее время",
    },
    {
        jobtitle: "Менеджер по работе с клиентами",
        where: "NAOS GROUP",
        date: "01.2023-02.2023",
    },
    {
        jobtitle: "Сборщик Персональных Компьютеров",
        where: "Современные Компьютерные Технологии | г. Зеленоград",
        date: "02.2023 - 03.2023",
    },
];

const skills = [{
        name: "HTML5&CSS3",
        value: 90,
    },
    {
        name: "Photoshop",
        value: 85,
    },
    {
        name: "PHP",
        value: 70,
    },
    {
        name: "SQL",
        value: 45,
    },
    {
        name: "Javascript",
        value: 40,
    },
    {
        name: "VisualStudio C#",
        value: 30,
    },
    {
        name: "React",
        value: 20,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: project1,
        description: "Страница товара с записями",
        link: "#",
    },
    {
        img: project2,
        description: "Система CMS блога на PHP",
        link: "https://github.com/smoook92/web/tree/smoook92",
    },
    {
        img: project3,
        description: "CMS блог 2.0 для дипломной работы",
        link: "https://github.com/smoook92/Blog",
    },
    {
        img: project4,
        description: "Автоматизированный блог о фильмах",
        link: "#",
    },
    {
        img: project5,
        description: "Веб-приложение 'To-Do лист'",
        link: "https://github.com/smoook92/To-DoList",
    },
    {
        img: project6,
        description: "Система управления студентами",
        link: "https://github.com/smoook92/studentmanagement-app",
    },
                       {
        img: project7,
        description: "Разработка электронного каталога продукции и услуг",
        link: "https://github.com/smoook92/electronic-catalog",
    },
];

const contactConfig = {
    YOUR_EMAIL: "smoook92@gmail.com",
    YOUR_FONE: "+7 901 786-90-55",
    description: "Программисты - это архитекторы цифровой революции, строящие здания истории на фундаменте кода. ",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    telegram: "https://t.me/smoook92/",
    github: "https://github.com/smoook92",
    instagram: "https://instagram.com/smoook92/",
    youtube: "https://youtube.com/@CMD_IT",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    //services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
