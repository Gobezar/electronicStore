const phones = [
    {
        image: 'iphone14',
        brand: 'Apple',
        model: '14',
        price: '92.000 руб.',
        storage: '512 ГБ',
        date: '01.01.2022',
    },
    {
        image: 'iphone13',
        brand: 'Apple',
        model: '13',
        price: '80.000 руб.',
        storage: '512 ГБ',
        date: '04.12.2022',
    },
    {
        image: 'iphone12',
        brand: 'Apple',
        model: '12',
        price: '70.000 руб.',
        storage: '256 ГБ',
        date: '20.04.2022',
    },
    {
        image: 'iphone11',
        brand: 'Apple',
        model: '11',
        price: '60.000 руб.',
        storage: '128 ГБ',
        date: '01.10.2022',
    },
    {
        image: 'motorola',
        brand: 'Motorola',
        model: 'E398',
        price: '560 руб.',
        storage: '4 МБ',
        date: '23.10.2022',
    },
    {
        image: 'nokia',
        brand: 'Nokia',
        model: 'Легенда 3310',
        price: 'бесценно',
        storage: '300 КБ',
        date: '21.12.2022',
    },
    {
        image: 'pixel',
        brand: 'Pixel',
        model: 'DM-300',
        price: '50.000 руб.',
        storage: '128 ГБ',
        date: '08.01.2023',
    },
    {
        image: 'samsungGalaxy',
        brand: 'Samsung',
        model: 'Galaxy E-200',
        price: '30.000 руб.',
        storage: '64 ГБ',
        date: '15.02.2023',
    },
    {
        image: 'siemens',
        brand: 'Siemens',
        model: 'SX-1',
        price: '345 руб.',
        storage: '1 МБ',
        date: '18.03.2023',
    },
    {
        image: 'sonyEricsson',
        brand: 'Sony Ericsson',
        model: 'k-750i',
        price: '750 руб.',
        storage: '32 МБ',
        date: '11.05.2023',
    },
]
const notebooks = [
    {
        image: 'AppleNotebook',
        brand: 'Apple',
        model: 'Macbook Air',
        price: '150.000 руб.',
        storage: '1 ТБ',
        date: '22.05.2023',
    },
    {
        image: 'MicrosoftNotebook',
        brand: 'Microsoft',
        model: 'Surface Laptop 5',
        price: '120.000 руб.',
        storage: '1 ТБ',
        date: '14.04.2023',
    },
    {
        image: 'DellNotebook',
        brand: 'Dell',
        model: 'XPS 13 Plus',
        price: '110.000 руб.',
        storage: '1 ТБ',
        date: '15.03.2023',
    },
    {
        image: 'AsusNotebook',
        brand: 'Asus',
        model: 'ROG Zephyrus G15',
        price: '115.000 руб.',
        storage: '1 ТБ',
        date: '14.02.2023',
    },
    {
        image: 'AsusNotebook',
        brand: 'Asus',
        model: 'Zenbook Pro Duo 14',
        price: '113.000 руб.',
        storage: '1 ТБ',
        date: '14.03.2023',
    },
    {
        image: 'LenovoNotebook',
        brand: 'Lenovo',
        model: 'ThinkPad X1 Fold (2nd Gen)',
        price: '134.000 руб.',
        storage: '1 ТБ',
        date: '14.04.2023',
    },
    {
        image: 'RazerNotebook',
        brand: 'Razer',
        model: 'Lambda Tensorbook',
        price: '135.000 руб.',
        storage: '1 ТБ',
        date: '16.04.2023',
    },
    {
        image: 'XiaomiNotebook',
        brand: 'Xiaomi',
        model: 'Book Pro 2022',
        price: '141.000 руб.',
        storage: '1 ТБ',
        date: '20.04.2023',
    },
    {
        image: 'AsusNotebook',
        brand: 'ASUS',
        model: 'Chromebook Flip CX5',
        price: '98.000 руб.',
        storage: '1 ТБ',
        date: '05.05.2023',
    },
    {
        image: 'AsusNotebook',
        brand: 'ASUS',
        model: 'Chromebook Flip CR6',
        price: '77.000 руб.',
        storage: '1 ТБ',
        date: '13.05.2023',
    },

]
const tablets = [
    {
        image: 'acer',
        brand: 'Acer',
        model: 'hh-03',
        price: '20.000 руб.',
        storage: '256 ГБ',
        date: '20.05.2023',
    },
    {
        image: 'asus',
        brand: 'Asus',
        model: 'Laptop-3',
        price: '25.000 руб.',
        storage: '256 ГБ',
        date: '16.04.2023',
    },
    {
        image: 'ipad',
        brand: 'Apple',
        model: 'Ipad Pro',
        price: '60.000 руб.',
        storage: '512 ГБ',
        date: '14.03.2023',
    },
    {
        image: 'ipad2',
        brand: 'Apple',
        model: 'Ipad 2',
        price: '30.000 руб.',
        storage: '64 ГБ',
        date: '11.02.2023',
    },
    {
        image: 'lenovo',
        brand: 'Lenovo',
        model: 'Zero - X3',
        price: '23.000 руб.',
        storage: '64 ГБ',
        date: '10.03.2023',
    },
    {
        image: 'samsung',
        brand: 'Samsung',
        model: 'ThinkPad',
        price: '44.000 руб.',
        storage: '512 ГБ',
        date: '08.04.2023',
    },
    {
        image: 'sony',
        brand: 'Sony',
        model: 'Mini X',
        price: '50.000 руб.',
        storage: '256 ГБ',
        date: '20.04.2023',
    },
    {
        image: 'sony2',
        brand: 'Sony',
        model: 'Book Pro',
        price: '60.000 руб.',
        storage: '128 ГБ',
        date: '23.04.2023',
    },
    {
        image: 'samsung',
        brand: 'Samsung',
        model: 'IdeaPad',
        price: '40.000 руб.',
        storage: '256 ГБ',
        date: '27.04.2023',
    },
    {
        image: 'lenovo',
        brand: 'Lenovo',
        model: 'Zero - Boom',
        price: '28.000 руб.',
        storage: '128 ГБ',
        date: '15.03.2023',
    },
    {
        image: 'asus',
        brand: 'Asus',
        model: 'Laptop-S',
        price: '35.000 руб.',
        storage: '512 ГБ',
        date: '03.04.2023',
    },

]
const gaming_pc = [
    {
        image: 'pcLenovo',
        brand: 'Lenovo',
        model: 'h-03',
        price: '80.000 руб.',
        storage: '256 ГБ',
        date: '23.05.2023',
    },
    {
        image: 'pcIntel',
        brand: 'Intel',
        model: 'Core 2 Duo',
        price: '75.000 руб.',
        storage: '256 ГБ',
        date: '17.04.2023',
    },
    {
        image: 'pcHp2',
        brand: 'HP',
        model: 'Pavilion',
        price: '90.000 руб.',
        storage: '512 ГБ',
        date: '16.03.2023',
    },
    {
        image: 'pcHp',
        brand: 'HP',
        model: 'Pavilion 2',
        price: '95.000 руб.',
        storage: '512 ГБ',
        date: '18.03.2023',
    },
    {
        image: 'pcDell',
        brand: 'Dell',
        model: 'H3',
        price: '46.000 руб.',
        storage: '64 ГБ',
        date: '13.03.2023',
    },
    {
        image: 'pcAsus2',
        brand: 'Asus',
        model: 'Idea-D',
        price: '76.000 руб.',
        storage: '512 ГБ',
        date: '10.04.2023',
    },
    {
        image: 'pcAsus',
        brand: 'Asus',
        model: 'Idea-A',
        price: '65.000 руб.',
        storage: '512 ГБ',
        date: '08.04.2023',
    },
    {
        image: 'pcApple2',
        brand: 'Apple',
        model: 'MacBook Pro',
        price: '100.000 руб.',
        storage: '128 ГБ',
        date: '14.04.2023',
    },
    {
        image: 'pcApple',
        brand: 'Apple',
        model: 'MacBook',
        price: '86.000 руб.',
        storage: '128 ГБ',
        date: '17.04.2023',
    },
    {
        image: 'pcAcer',
        brand: 'Acer',
        model: 'Zero PC',
        price: '77.000 руб.',
        storage: '128 ГБ',
        date: '26.03.2023',
    },
    {
        image: 'pcAcer2',
        brand: 'Acer',
        model: 'Zero PC-3',
        price: '81.000 руб.',
        storage: '128 ГБ',
        date: '25.03.2023',
    },
    {
        image: 'pcAsus',
        brand: 'Asus',
        model: 'Idea-Vito',
        price: '66.000 руб.',
        storage: '512 ГБ',
        date: '09.04.2023',
    },

]
const accessories = [
    {
        image: 'mouse1',
        brand: 'Logitech',
        model: 'x10',
        price: '800 руб.',
        date: '21.05.2023',
    },
    {
        image: 'mouse2',
        brand: 'Lenovo',
        model: 'm-10',
        price: '700 руб.',
        date: '13.04.2023',
    },
    {
        image: 'mouse3',
        brand: 'Acer',
        model: 'A-30',
        price: '500 руб.',
        date: '19.03.2023',
    },
    {
        image: 'mouse4',
        brand: 'Logitech',
        model: 'L-90',
        price: '1000 руб.',
        date: '11.03.2023',
    },
    {
        image: 'headphones1',
        brand: 'Marshall',
        model: 'MU-1',
        price: '1000 руб.',
        date: '23.03.2023',
    },
    {
        image: 'headphones2',
        brand: 'Soundcore',
        model: 'F-89',
        price: '3000 руб.',
        date: '14.04.2023',
    },
    {
        image: 'headphones3',
        brand: 'Soundcore',
        model: 'A-100',
        price: '5000 руб.',
        date: '05.04.2023',
    },
    {
        image: 'headphones4',
        brand: 'Apple',
        model: 'Iheards-3',
        price: '7000 руб.',
        date: '20.04.2023',
    },
    {
        image: 'keyboard1',
        brand: 'Acer',
        model: 'AC33',
        price: '1400 руб.',
        date: '17.04.2023',
    },
    {
        image: 'keyboard2',
        brand: 'Acer',
        model: 'Zero Keyb-9',
        price: '2000 руб.',
        date: '24.03.2023',
    },
    {
        image: 'keyboard3',
        brand: 'Asus',
        model: 'Magnitude',
        price: '3000 руб.',
        date: '29.03.2023',
    },
    {
        image: 'keyboard4',
        brand: 'HP',
        model: 'Normalize-Z3',
        price: '5000 руб.',
        date: '03.04.2023',
    },

]



function createCards(array, sectionId) {
    const section = document.getElementById(sectionId);

    section.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        const card = document.createElement('div');
        card.classList.add(`${sectionId}__card`);

        const image = document.createElement('img');
        image.src = `../../images/products/${item.image}.png`;
        image.alt = `${item.brand} ${item.model}`;
        image.classList.add('cardImage');
        card.appendChild(image);

        const brand = document.createElement('p');
        const brandLabel = document.createElement('span');
        brandLabel.textContent = 'Производитель: ';
        brand.classList.add('cardText');
        brand.appendChild(brandLabel);
        brand.appendChild(document.createTextNode(item.brand));
        card.appendChild(brand);

        if (item.model) {
            const model = document.createElement('p');
            const modelLabel = document.createElement('span');
            modelLabel.textContent = 'Модель: ';
            model.appendChild(modelLabel);
            model.appendChild(document.createTextNode(item.model));
            card.appendChild(model);
        }

        const price = document.createElement('p');
        const priceLabel = document.createElement('span');
        priceLabel.textContent = 'Цена: ';
        price.appendChild(priceLabel);
        price.appendChild(document.createTextNode(item.price));
        card.appendChild(price);

        if (item.storage) {
            const storage = document.createElement('p');
            const storageLabel = document.createElement('span');
            storageLabel.textContent = 'Объем памяти: ';
            storage.appendChild(storageLabel);
            storage.appendChild(document.createTextNode(item.storage));
            card.appendChild(storage);
        }

        const date = document.createElement('p');
        const dateLabel = document.createElement('span');
        dateLabel.textContent = 'Добавлено: ';
        date.appendChild(dateLabel);
        date.appendChild(document.createTextNode(getDayInfo(item.date)));
        card.appendChild(date);


        const button = document.createElement('button');
        button.classList.add('buy-button');
        button.textContent = 'Купить';
        button.onclick = showModal;
        card.appendChild(button);

        section.appendChild(card);
    }
}

function showModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");
    localStorage.setItem("isModalVisible", true);
}



function getDayInfo(dateString) {
    const dateParts = dateString.split('.');
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const year = parseInt(dateParts[2], 10);

    const date = new Date(year, month, day);
    const dayOfWeek = [
        "Воскр-е",
        "Понед-к",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ][date.getDay()];

    const weekNumber = Math.ceil(
        (date.getDate() + 6 - (date.getDay() || 7)) / 7
    );

    const monthNames = [
        "янв.",
        "февр.",
        "мар.",
        "апр.",
        "мая",
        "июн.",
        "июл.",
        "авг.",
        "сент.",
        "окт.",
        "нояб.",
        "дек."
    ];

    const formattedDate = `${dayOfWeek}, ${weekNumber} неделя ${monthNames[month]} ${year} года`;
    return formattedDate;
}




createCards(phones, 'phones');
createCards(notebooks, 'notebooks');
createCards(tablets, 'tablets');
createCards(gaming_pc, 'gaming_pc');
createCards(accessories, 'accessories');
