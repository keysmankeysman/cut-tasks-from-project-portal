export const apps = [
{
    id: 1,
    name: "Витрина пространственных данных",
    description: "Каталог пространственных данных ФПД",
    url: "https://gisfpd.lenreg.ru/catalog",
    openNewWindow: true,
    orderNumber: 1,
    isExternal: true
}, {
    id: 2,
    name: "Модули веб-портала ФПД",
    description: "Аналитика, редактор реестров, календарь событий, адресный реестр",
    url: "/gorizont/",
    openNewWindow: true,
    orderNumber: 1,
    isExternal: true
}, {
    id: 3,
    name: "Модуль \"Автоматическое выявление изменений на территории\"",
    description: "",
    url: "http://gisfpd.lenreg.ru/sm/web/#changedetection",
    openNewWindow: true,
    orderNumber: 1,
    isExternal: true
}, {
    id: 4,
    name: "Модуль \"Каталогизация и заказ космических снимков\"",
    description: "",
    url: "http://gisfpd.lenreg.ru/sm/web/#catalogv",
    openNewWindow: true,
    orderNumber: 1,
    isExternal: true
}, {
    id: 5,
    name: "Модуль \"Построение связанностей между пространственными объектами\"",
    description: "Аналитический модуль определения (расчета) и построения связанностей между пространственными объектами в ФПД",
    url: "http://gisfpd.lenreg.ru/sm/web/#links",
    openNewWindow: true,
    orderNumber: 1,
    isExternal: true
}, {
    id: 6,
    name: "ЦКО ЛО",
    description: "ЦКО ЛО",
    "owner": "Фондодержатель ФПД",
    orderNumber: 5,
    isExternal: false
}, {
    id: 7,
    name: "Местное самоуправление, межнациональные и межконфессиональные отношения",
    description: "Сведения о конфессиях, национальных группах",
    "owner": "Комитет по местному самоуправлению, межнациональным и межконфессиональным отношениям Ленинградской области",
    orderNumber: 10,
    isExternal: false
}, {
    id: 8,
    name: "Печать и связи с общественностью",
    description: "Рекламные конструкции",
    "owner": "Комитета по печати и связям с общественностью Ленинградской области",
    orderNumber: 30,
    isExternal: false
}, {
    id: 9,
    name: "Здравоохранение",
    description: "Сведения о местах нахождения медицинских организаций, cведения из реестра лицензий на медицинскую/фармацевтическую  деятельность",
    "owner": "Комитет по здравоохранению Ленинградской области",
    orderNumber: 32,
    isExternal: false
}, {
    id: 10,
    name: "Данные ДЗЗ",
    description: "Космоснимки",
    "owner": null,
    orderNumber: 33,
    isExternal: false
}, {
    id: 11,
    name: "Градостроительная политика",
    description: "",
    "owner": "Комитет градостроительной политики Ленинградской области",
    orderNumber: 50,
    isExternal: false
}, {
    id: 12,
    name: "Управление государственным имуществом",
    description: null,
    "owner": "Комитет по управлению государственным имуществом",
    orderNumber: 60,
    isExternal: false
}, {
    id: 13,
    name: "Комитет по строительству",
    description: null,
    "owner": "Комитет",
    orderNumber: 61,
    isExternal: false
}, {
    id: 14,
    name: "Комитет по жилищно-коммунальному хозяйству",
    description: null,
    "owner": "Комитет",
    orderNumber: 62,
    isExternal: false
}, {
    id: 15,
    name: "Диспетчерские, медицинские службы и организации",
    description: "",
    "owner": "ФПД ЛО",
    orderNumber: 63,
    isExternal: false
}, {
    id: 16,
    name: "ГИСОГД Ленинградской области",
    description: "Документы и картографические материалы, размещенные в Государственной информационной системе обеспечения градостроительной деятельности",
    "owner": "Комитет по градостроительной политике Ленинградской области",
    orderNumber: 90,
    isExternal: false
}, {
    id: 17,
    name: "Административное устройство",
    description: "Схемы территориального планирования муниципальных районов, генеральные планы поселений",
    "owner": "Оператор",
    orderNumber: 91,
    isExternal: false
}, {
    id: 18,
    name: "Экономическое развитие и инвестиции",
    description: "Инвестиционное развитие территории Ленинградской области, данные из ИРИС",
    "owner": "Комитет экономического развития Ленинградской области",
    orderNumber: 100,
    isExternal: false
}, {
    id: 19,
    name: "Развитие малого, среднего бизнеса и потребительского рынка",
    description: "Ярмарки, отчет по НТО",
    "owner": "Комитет по развитию малого, среднего бизнеса и потребительского рынка Ленинградской области",
    orderNumber: 110,
    isExternal: false
}, {
    id: 20,
    name: "Комитет финансов Ленинградской области",
    description: "Раздел Комитета финансов Ленинградской области. Содержит информацию, предназначенную для внутреннего использования",
    "owner": "Комитет финансов",
    orderNumber: 111,
    isExternal: false
}, {
    id: 21,
    name: "Труд и занятость населения",
    description: null,
    "owner": null,
    orderNumber: 120,
    isExternal: false
}, {
    id: 22,
    name: "Перепись населения",
    description: null,
    "owner": null,
    orderNumber: 150,
    isExternal: false
}, {
    id: 23,
    name: "Молодежная политика",
    description: "Разработка и реализация социальных программ и проектов, обеспечение защиты прав и законных интересов молодых граждан",
    "owner": "Комитет по молодежной политике  Ленинградской области",
    orderNumber: 160,
    isExternal: false
}, {
    id: 24,
    name: "Культурное наследие",
    description: "Сведения об объектах культурного наследия Ленинградской области",
    "owner": "Комитет по культуре Ленинградской области",
    orderNumber: 161,
    isExternal: false
}, {
    id: 25,
    name: "Агропромышленный комплекс",
    description: "",
    "owner": "Комитета по агропромышленному и рыбохозяйственному комплексу Ленинградской области",
    orderNumber: 170,
    isExternal: false
}, {
    id: 26,
    name: "Природные ресурсы",
    description: null,
    "owner": "Комитет по природным ресурсам Ленинградской области",
    orderNumber: 180,
    isExternal: false
}, {
    id: 27,
    name: "Животный мир",
    description: "Границы охотничьих угодий, \nДТП с участием диких животных",
    "owner": "Комитет по охране, контролю и регулированию  использования объектов животного мира Ленинградской области",
    orderNumber: 200,
    isExternal: false
}, {
    id: 28,
    name: "Социальная защита",
    description: "Комитет по социальной защите населения Ленинградской области",
    "owner": "Комитет по социальной защите населения Ленинградской области",
    orderNumber: 210,
    isExternal: false
}, {
    id: 29,
    name: "Топливно-энергетический комплекс",
    description: "",
    "owner": null,
    orderNumber: 230,
    isExternal: false
}, {
    id: 30,
    name: "Правопорядок и безопасность",
    description: null,
    "owner": "Комитет правопорядка и безопасности Ленинградской области",
    orderNumber: 240,
    isExternal: false
}, {
    id: 31,
    name: "Связь и информатизация",
    description: "ЕСПД, ЕДДС, РАСЦО, КСЭОН",
    "owner": "Комитет цифрового развития Ленинградской области",
    orderNumber: 260,
    isExternal: false
}, {
    id: 32,
    name: "Служба 112",
    description: null,
    "owner": "Оператор",
    orderNumber: 260,
    isExternal: false
}, {
    id: 33,
    name: "Отходы",
    description: "",
    "owner": "Управления Ленинградской области по организации и контролю деятельности по обращению с отходами",
    orderNumber: 270,
    isExternal: false
}, {
    id: 34,
    name: "Адресные сведения",
    description: "Сведения о геокодированных адресах ФИАС, загруженных в Адресный реестр. Адресный слой, сформированный в 2016 году.",
    "owner": "Оператор",
    orderNumber: 290,
    isExternal: false
}, {
    id: 35,
    name: "Все картматериалы ФПД",
    description: "Картографические материалы, зарегистрированные в ФПД, с возможностью пространственной обработки",
    "owner": "Комитет по информатизации и связи Ленинградской области",
    orderNumber: 290,
    isExternal: false
}, {
    id: 36,
    name: "Дорожная инфраструктура",
    description: "Граф дорог, остановки транспорта, знаки",
    "owner": "Оператор",
    orderNumber: 290,
    isExternal: false
}, {
    id: 37,
    name: "Статистика",
    description: "Статистика о переписи населения ЛО",
    "owner": "Оператор ФПД",
    orderNumber: 330,
    isExternal: false
}, {
    id: 38,
    name: "Благоустройство и улучшение санитарного состояния территорий Ленинградской области",
    description: null,
    "owner": "Оператор электронного правительства Ленигградской области",
    orderNumber: null,
    isExternal: false
}, {
    id: 39,
    name: "ГГЛО",
    description: "Сети газораспределения",
    "owner": "Комитет",
    orderNumber: null,
    isExternal: false
}, {
    id: 40,
    name: "Региональная система оповещения населения Ленинградской области",
    description: "РАСЦО, КСЭОН, МСО, ОСО",
    "owner": "Объект №58 Правительства Ленинградской области",
    orderNumber: null,
    isExternal: false
}]