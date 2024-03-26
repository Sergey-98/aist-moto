import mainBenda from '../assets/img/mainPhotos/mainBenda.png';
import MainARIIC from '../assets/img/mainPhotos/MainARIIC.png';
import mainChangjiang from '../assets/img/mainPhotos/mainChangjiang.png';

import funrider125 from '../assets/img/Benda/funrider125.png';
import chinchilla300 from '../assets/img/Benda/chinchilla300.png';
import rock300 from '../assets/img/Benda/rock300.png';
import darkflag500 from '../assets/img/Benda/darkflag500.png';
import Napoleon500 from '../assets/img/Benda/Napoleon500.png';
import lfc700 from '../assets/img/Benda/lfc700.png';

import ariicGemma108 from '../assets/img/ARIIC/ariic-gemma-108.png';
import ariic318 from '../assets/img/ARIIC/ariic-318.png';
import ariic318tft from '../assets/img/ARIIC/ariic-318-tft.png';

import CJDynasty700 from '../assets/img/Changjiang/CJ Dynasty 700.png';
import CJAdept700 from '../assets/img/Changjiang/CJ Adept 700.png';
import CJAdept700Solo from '../assets/img/Changjiang/CJ Adept 700 Solo.png';
import CJТермит350 from '../assets/img/Changjiang/CJ Термит 350.png';
import CJСкарабей350 from '../assets/img/Changjiang/CJ Скарабей 350.png';

export const data = [
    {
        url: 'benda-motorcycle',
        title: 'Benda Motorcycle',
        nameLink: 'BendaMotorcycle',
        img: mainBenda,
        pages:[
            {
                url: 'benda-motorcycle-funrider125',
                titleProduct: 'Мотоцикл Benda Funrider 125',
                nameLinkProduct: 'funrider125',
                imgProduct: funrider125,
                manufacturer: 'Benda Motorcycle',   // Производитель
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: 'Hangzhou Saturn Power Technology Co., Ltd, BD2V42MI'
                            },
                            {
                                titleElem: 'Тип',
                                meaning: 'V - образный, 2х цилиндровый, 8ми клапанный, 4х тактный, жидкостного охлаждения'
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: '125 cc'
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: '4'
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: '45х45'
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: '11,3:1'
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: '14,5 (10,8) при 8500об/мин'
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: '14 при 6500 об/мин'
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: 'Электронный впрыск топлива EFI'
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: '18,5 (4)'
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: 'Бензин с октановым числом не ниже АИ 95'
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: 'Depurace'
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Механическая'
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: 'Многодисковое в масляной ванне'
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: '6 (1-N-2-3-4-5-6)'
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: 'Цепь'
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: 'MOTION, MT05'
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: 'DELPHI/TORCH'
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: 'электрический'
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: '12В'
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Дуплексная, трубчатая стальная рама с изменяемым сечением типа Soft Tail'
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: 'Перевернутая вилка с двумя гидравлическими телескопическими амортизаторами'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'маятниковая 2х амортизационная подвеска пружинного типа'
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Гидравлическая двухканальная'
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: 'Дисковый тормоз 300мм с двухпоршневым суппортом'
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: 'Дисковый тормоз 240мм с двухпоршневым суппортом'
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: '2130'
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: '810'
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: '1000'
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: '681'
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: '1460'
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: '163'
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: '120/80R17, M/C, Бескамерная, Yuanxing'
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: '140/70R17, M/C, Бескамерная, Yuanxing'
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: 'Легкосплавный, 17'
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: 'Легкосплавный, 17'
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: 'LED с интегрированным ДХО'
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: 'LED'
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: 'монохромный TFT дисплей с аналоговой сигнализацией предупреждений'
                            },
                            {
                                titleElem: 'USB',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'ABS',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: 'Механическое'
                            },
                            {
                                titleElem: 'Защита радиатора',
                                meaning: 'Есть / пластик'
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: 'Винилискожа со строчкой'
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: 'Механический ключ'
                            },
                            {
                                titleElem: 'Регулировка лапки положения КПП',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Регулировка лапки положения тормоза',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Установка положения зеркал заднего вида',
                                meaning: 'Верхнее'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: '2х амортизационная подвеска пружинного типа'
                            },
                            {
                                titleElem: 'Регулировка передней вилки',
                                meaning: 'Нет'
                            }
                        ]
                    }
                }
            },
            {
                url: 'benda-motorcycle-chinchilla300',
                titleProduct: 'Мотоцикл Benda Chinchilla 300',
                nameLinkProduct: 'chinchilla300',
                imgProduct: chinchilla300,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: 'Hangzhou Saturn Power Technology Co., Ltd, BD2V58MN'
                            },
                            {
                                titleElem: 'Тип',
                                meaning: 'V - образный, 2х цилиндровый, 8ми клапанный, 4х тактный, жидкостного охлаждения'
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: '298 cc'
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: '4'
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: '58 x 56.4'
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: '11,5:1'
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: '30,5 (22,5) при 8500об/мин'
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: '25,3 при 7000 об/мин'
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: 'Электронный впрыск топлива EFI'
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: '15'
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: 'Бензин с октановым числом не ниже АИ 95'
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: '2 х ступенчатый Depurace'
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Механическая'
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: 'Многодисковое в масляной ванне.'
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: '6 (1-N-2-3-4-5-6)'
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: 'Ремень (Continental)'
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: 'MOTION, MT05'
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: 'DELPHI/TORCH'
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: 'электрический'
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: '12В'
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Дуплексная, трубчатая стальная рама с изменяемым сечением типа Soft Tail'
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: 'Перевернутая вилка с двумя гидравлическими телескопическими амортизаторами'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'Алюминиевая, маятниковая 2х амортизационная подвеска пружинного типа с регулировкой преднатяга пружин'
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Гидравлическая двухканальная с ABS'
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: 'Дисковый тормоз 300мм с двухпоршневым суппортом'
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: 'Дисковый тормоз 240мм с двухпоршневым суппортом'
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: '2120'
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: '826'
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: '1050'
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: '690'
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: '1420'
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: '170'
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: '120/80R16, M/C, Бескамерная, Timsun'
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: '150/80R15, M/C, Бескамерная, Timsun'
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: 'Легкосплавный, 16'
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: 'Легкосплавный, 15'
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: 'LED с интегрированным ДХО'
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: 'LED'
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: 'монохромный TFT дисплей с аналоговой сигнализацией предупреждений'
                            },
                            {
                                titleElem: 'USB',
                                meaning: '1'
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'ABS',
                                meaning: 'Есть. перед/зад'
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: 'Механическое'
                            },
                            {
                                titleElem: 'Защита радиатора',
                                meaning: 'Есть / пластик'
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: 'Винилискожа со строчкой'
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: 'Механический ключ'
                            },
                            {
                                titleElem: 'Регулировка лапки положения КПП',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Регулировка лапки положения тормоза',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Установка положения зеркал заднего вида',
                                meaning: 'Верхнее/нижнее'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: '2х амортизационная подвеска пружинного типа с регулировкой преднатяга пружин'
                            },
                            {
                                titleElem: 'Регулировка передней вилки',
                                meaning: 'Нет'
                            }
                        ]
                    }
                }
            },
            {
                url: 'benda-motorcycle-rock300',
                titleProduct: 'Мотоцикл Benda Rock 300',
                nameLinkProduct: 'rock300',
                imgProduct: rock300,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: 'Hangzhou Saturn Power Technology Co., Ltd, BD2V58MN'
                            },
                            {
                                titleElem: 'Тип',
                                meaning: 'V - образный, 2х цилиндровый, 8ми клапанный, 4х тактный, жидкостного охлаждения'
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: '298 cc'
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: '4'
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: '58 x 56.4'
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: '11,5:1'
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: '30,5 (22,5) при 8500об/мин'
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: '25,3 при 7000 об/мин'
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: 'Электронный впрыск топлива EFI'
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: '16'
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: 'Бензин с октановым числом не ниже АИ 95'
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: '2-х ступенчатый Depurace'
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Механическая'
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: 'Многодисковое в масляной ванне.'
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: '6 (1-N-2-3-4-5-6)'
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: 'Ремень (Continental)'
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: 'MOTION, MT05'
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: 'DELPHI/TORCH'
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: 'электрический'
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: '12В'
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Дуплексная, трубчатая стальная рама с изменяемым сечением типа Soft Tail'
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: 'Перевернутая вилка с двумя гидравлическими телескопическими амортизаторами'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'Алюминиевая, маятниковая 2х амортизационная подвеска пружинного типа с регулировкой преднатяга пружин'
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Гидравлическая двухканальная с ABS'
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: 'Дисковый тормоз 300мм с двухпоршневым суппортом'
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: 'Дисковый тормоз 240мм с двухпоршневым суппортом'
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: '2225'
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: '853'
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: '1072'
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: '720'
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: '1520'
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: '177'
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: '130/90R16, M/C, Бескамерная, CST'
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: '150/80R16, M/C, Бескамерная, CST'
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: 'Легкосплавный, 16'
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: 'Легкосплавный, 16'
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: 'LED с интегрированным ДХО'
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: 'LED'
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: 'монохромный TFT дисплей с аналоговой сигнализацией предупреждений'
                            },
                            {
                                titleElem: 'USB',
                                meaning: '1'
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'ABS',
                                meaning: 'Есть. перед/зад'
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: 'Механическое'
                            },
                            {
                                titleElem: 'Защита радиатора',
                                meaning: 'Есть / пластик'
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: 'Раздельные сиденья. Винилискожа со строчкой и тактильной вставкой'
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: 'Механический ключ'
                            },
                            {
                                titleElem: 'Регулировка лапки положения КПП',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Регулировка лапки положения тормоза',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Установка положения зеркал заднего вида',
                                meaning: 'Верхнее/нижнее'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: '2х амортизационная подвеска пружинного типа с регулировкой преднатяга пружин'
                            },
                            {
                                titleElem: 'Регулировка передней вилки',
                                meaning: 'Нет'
                            }
                        ]
                    }
                }
            },
            {
                url: 'benda-motorcycle-darkflag500',
                titleProduct: 'Мотоцикл Benda Darkflag 500',
                nameLinkProduct: 'darkflag500',
                imgProduct: darkflag500,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: 'Hangzhou Saturn Power Technology Co., Ltd, BD4V53MR'
                            },
                            {
                                titleElem: 'Тип',
                                meaning: 'V - образный, 4х цилиндровый, 16ти клапанный, 4х тактный, жидкостного охлаждения с отключаемыми задними цилиндрами'
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: '496 сс'
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: '4'
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: '53.5 x 55.2'
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: '11,5:1'
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: '54 (40) при 10000 об/мин'
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: '42 при 7500 об/мин'
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: 'Электронный впрыск топлива EFI'
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: '16'
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: 'Бензин с октановым числом не ниже АИ 95'
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: '2-х ступенчатый Depurace'
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Механическая'
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: 'Многодисковое, проскальзывающее в масляной ванне.'
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: '6 (1-N-2-3-4-5-6)'
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: 'Ремень (Continental)'
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: 'KENZZEFI'
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: 'AOTONG/NGK'
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: 'электрический'
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: '12В'
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Дуплексная, трубчатая стальная рама с накладками из алюминиевого сплава типа Soft Tail'
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: 'Перевернутая вилка с двумя гидравлическими телескопическими амортизаторами'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: '2х амортизационная электронно-управляемая пневмоподвеска с регулировкой высоты и поддержанием клиренса Benda Air Suspension'
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Гидравлическая двухканальная с ABS'
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: 'Плавающий тормозной диск 320мм, Радиальный четырёхпоршневой суппорт Brembo'
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: 'Дисковый тормоз 260мм с двухпоршневым суппортом'
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: '2330'
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: '907'
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: '1100'
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: '670-700'
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: '1575'
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: '241'
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: '130/90R16, 67H, Бескамерная, CST'
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: '150/80R16, 71H, Бескамерная, CST'
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: 'Легкосплавный, 16'
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: 'Легкосплавный, 16'
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: 'LED с интегрированным ДХО'
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: 'LED'
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: 'Аналоговый дисплей с интеграцией бортового компьютера'
                            },
                            {
                                titleElem: 'USB',
                                meaning: '1'
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'ABS',
                                meaning: 'Есть. перед/зад (отключаемый)'
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: 'Есть (отключаемый)'
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: 'Электронное'
                            },
                            {
                                titleElem: 'Защита радиатора',
                                meaning: 'Есть / пластик'
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: 'Раздельные сиденья. Винилискожа со строчкой и тактильной вставкой'
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: 'Механический ключ'
                            },
                            {
                                titleElem: 'Регулировка лапки положения КПП',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Регулировка лапки положения тормоза',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Установка положения зеркал заднего вида',
                                meaning: 'Верхнее'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'Адаптивная, пневматическая с регулировкой высоты'
                            },
                            {
                                titleElem: 'Регулировка передней вилки',
                                meaning: 'Нет'
                            }
                        ]
                    }
                }
            },
            {
                url: 'benda-motorcycle-napoleon500',
                titleProduct: 'Мотоцикл Benda Napoleon 500',
                nameLinkProduct: 'Napoleon500',
                imgProduct: Napoleon500,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: 'Hangzhou Saturn Power Technology Co., Ltd, BD2V69MR'
                            },
                            {
                                titleElem: 'Тип',
                                meaning: 'V - образный, 2х цилиндровый, 8ми клапанный, 4х тактный, жидкостного охлаждения'
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: '475.6cc'
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: '4'
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: '69 х 63.6'
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: '11,5:1'
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: '50 (37) при 8500 об/мин'
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: '42 при 6700 об/мин'
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: 'Электронный впрыск топлива EFI'
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: '16'
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: 'Бензин с октановым числом не ниже АИ 95'
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: '2 х ступенчатый Depurace'
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Механическая'
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: 'Многодисковое, проскальзывающее в масляной ванне.'
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: '6 (1-N-2-3-4-5-6)'
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: 'Ремень'
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: 'MOTION, MT05'
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: 'NGK'
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: 'электрический'
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: '12В'
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Дуплексная, трубчатая стальная рама с изменяемым сечением типа Soft Tail'
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: 'Вилка с двумя гидравлическими телескопическими амортизаторами'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'Алюминиевая, маятниковая моноамортизационная подвеска пружинного типа с регулировкой преднатяга пружины, регулировкой сжатия и облегченным алюминиевым маятником'
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Гидравлическая двухканальная с ABS'
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: 'Плавающий тормозной диск 320мм с четырёхпоршневым суппортом'
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: 'Дисковый тормоз 260мм с двухпоршневым суппортом'
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: '2285'
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: '810'
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: '1080'
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: '695'
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: '1550'
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: '215'
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: '150/80-16, М/С, Бескамерная'
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: '180/65-16, М/С, Бескамерная'
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: 'Легкосплавный, 16'
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: 'Легкосплавный, 16'
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: 'LED с интегрированным ДХО'
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: 'LED'
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: 'Цветной TFT дисплей с цифровой сигнализацией предупреждений'
                            },
                            {
                                titleElem: 'USB',
                                meaning: '1'
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'ABS',
                                meaning: 'Есть. перед/зад'
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: 'Есть (отключаемый)'
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: 'Электронное'
                            },
                            {
                                titleElem: 'Защита радиатора',
                                meaning: 'Есть / пластик'
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: 'Винилискожа'
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: 'нет'
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: 'Механический ключ'
                            },
                            {
                                titleElem: 'Регулировка лапки положения КПП',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Регулировка лапки положения тормоза',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Установка положения зеркал заднего вида',
                                meaning: 'Верхнее/нижнее'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'моноамортизационная подвеска пружинного типа с регулировкой сжатия, преднатягом пружины и алюминиевым маятником'
                            },
                            {
                                titleElem: 'Регулировка передней вилки',
                                meaning: 'Нет'
                            }
                        ]
                    }
                }
            },
            {
                url: 'benda-motorcycle-lfc700',
                titleProduct: 'Мотоцикл Benda LFC 700',
                nameLinkProduct: 'lfc700',
                imgProduct: lfc700,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: 'Hangzhou Saturn Power Technology Co., Ltd, BD467MU'
                            },
                            {
                                titleElem: 'Тип',
                                meaning: 'Рядный, 4х цилиндровый, 16ти клапанный, 4х тактный, жидкостного охлаждения'
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: '676 сс'
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: '4'
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: '67 x 48'
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: '11,6:1'
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: '94 (69) при 11000об/мин'
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: '63 при 8500 об/мин'
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: 'Электронный впрыск топлива EFI'
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: '20'
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: 'Бензин с октановым числом не ниже АИ 95'
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: '2 х ступенчатый Depurace'
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Механическая'
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: 'Многодисковое, проскальзывающее в масляной ванне.'
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: '6 (1-N-2-3-4-5-6)'
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: 'Цепь'
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: 'MOTION, MT05'
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: 'AOTONG/NGK'
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: 'электрический'
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: '12В'
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Хребтовая усиленная из алюминиевого сплава'
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: 'Перевернутая вилка с двумя гидравлическими телескопическими амортизаторами KYB, дополненными регулировкой сжатия и отбоя каждого амортизатора'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'Алюминиевая, маятниковая моноамортизационная подвеска пружинного типа с регулировкой преднатяга пружины, регулировкой сжатия и облегченным алюминиевым маятником'
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Гидравлическая двухканальная с ABS'
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: 'Два плавающих тормозных диска 320мм, 2 радиальных четырёхпоршневых суппорта Brembo'
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: 'Дисковый тормоз 260мм с двухпоршневым суппортом Brembo'
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: '2430'
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: '880'
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: '1100'
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: '695'
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: '1720'
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: '275'
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: '130/70R19, M/C, Бескамерная, Kingtyre'
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: '310/35R18, M/C, Бескамерная, Kingtyre'
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: 'Легкосплавный, 19'
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: 'Легкосплавный, 18'
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: 'LED с интегрированным ДХО'
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: 'Цветной LCD дисплей управляемый клавишами на руле'
                            },
                            {
                                titleElem: 'USB',
                                meaning: '1'
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'ABS',
                                meaning: 'Есть. перед/зад'
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: 'Механическое'
                            },
                            {
                                titleElem: 'Защита радиатора',
                                meaning: 'Есть / пластик'
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: 'Винилискожа'
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: 'Механический ключ'
                            },
                            {
                                titleElem: 'Регулировка лапки положения КПП',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Регулировка лапки положения тормоза',
                                meaning: 'Есть/Механическая'
                            },
                            {
                                titleElem: 'Установка положения зеркал заднего вида',
                                meaning: 'Верхнее/нижнее'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'моноамортизационная подвеска пружинного типа с регулировкой сжатия, преднатягом пружины и алюминиевым маятником'
                            },
                            {
                                titleElem: 'Регулировка передней вилки',
                                meaning: 'Сжатие/отбой'
                            }
                        ]
                    }
                }
            }
            
        ]
    },
    {
        url: 'ariic',
        title: 'ARIIC',
        nameLink: 'ARIIC',
        img: MainARIIC,
        pages:[
            {
                url: 'skyter-ariicGemma108',
                titleProduct: 'Скутер ARIIC Gemma 108',
                nameLinkProduct: 'ariicGemma108',
                imgProduct: ariicGemma108,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: 'Jinlang Science And Technology Co. Ltd., 1P52QMH-2'
                            },
                            {
                                titleElem: 'Тип',
                                meaning: '1 цилиндровый, 4х тактный, воздушного охлаждения'
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: '117'
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: '2'
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: '52,4 x 54,4'
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: '9,5:1'
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: '8,5 (6,2) при 7500 об/мин'
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: '9 при 6000 об/мин'
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: 'Электронный впрыск топлива EFI'
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: '4'
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: 'Бензин с октановым числом не ниже АИ 95'
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: '2х ступенчатый DP'
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Вариатор'
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: 'Automatic CVT'
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: '1'
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: 'Ремень Gates'
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: 'BOSCH'
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: 'DELPHI/NGK'
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: 'электрический'
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: 'электрический'
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Дуплексная, трубчатая стальная рама с изменяемым сечением'
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: 'Вилка с двумя гидравлическими телескопическими амортизаторами KAIFA'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'маятниковая подвеска KAIFA с газомасляным амортизатором и выносным резервуаром'
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'комбинированный привод; гидравлический на контур переднего колеса и механический (тросовый) на контур заднего колеса'
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: 'Дисковый тормоз 190мм'
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: 'Барабанный с CBS'
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: '1840'
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: '677'
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: '1165'
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: '760'
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: '1270'
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: '102'
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: '100/90R12, M/C, Бескамерная, CST'
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: '110/90R12, M/C, Бескамерная, CST'
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: 'Легкосплавный, 12'
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: 'Легкосплавный, 12'
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: 'LED с интегрированным ДХО'
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: 'LED'
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: 'цветной TFT дисплей с аналоговой сигнализацией предупреждений'
                            },
                            {
                                titleElem: 'USB',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'ABS',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Камера переднего вида/видеорегистратор',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: 'Механическое'
                            },
                            {
                                titleElem: 'Обдув ног',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: 'Винилискожа с фактурной строчкой и поясничным упором водителя'
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: 'Электронная метка/механический ключ'
                            },
                            {
                                titleElem: 'Подсветка вещевого отсека',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'BLUETOOTH',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Отображение навигации на экране',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Подключение гарнитуры',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Система Старт/Стоп',
                                meaning: 'Есть'
                            }
                        ]
                    }
                }
            },
            {
                url: 'skyter-ariic318',
                titleProduct: 'Скутер ARIIC 318',
                nameLinkProduct: 'ariic318',
                imgProduct: ariic318,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: 'Jinlang Science And Technology Co. Ltd., 1P73MN-3'
                            },
                            {
                                titleElem: 'Тип',
                                meaning: '1 цилиндровый, 4х клапанный, 4х тактный, жидкостного охлаждения'
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: '276'
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: '4'
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: '75,0 x 68'
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: '10,2:1'
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: '24 (17,5) при 8000 об/мин'
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: '25 при 5500 об/мин'
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: 'Электронный впрыск топлива EFI'
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: '13'
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: 'Бензин с октановым числом не ниже АИ 95'
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: '2х ступенчатый DP'
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Вариатор'
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: 'Automatic CVT'
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: '1'
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: 'Ремень Gates'
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: 'BOSCH'
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: 'DELPHI/NGK'
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: 'электрический'
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: '12В'
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Дуплексная, трубчатая стальная рама с изменяемым сечением'
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: 'Вилка с двумя гидравлическими телескопическими амортизаторами KAIFA'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'маятниковая 2х амортизационная подвеска KAIFA пружинного типа с креплением силового агрегата'
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Гидравлическая двухканальная с ABS'
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: 'Два плавающих тормозных диска 260мм, 2 двухпоршневых суппорта'
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: 'Дисковый тормоз 240мм с двухпоршневым суппортом'
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: '2215'
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: '780'
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: '1335'
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: '800'
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: '1540'
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: '195'
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: '120/70R14, M/C, Бескамерная, CST'
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: '150/70R13, M/C, Бескамерная, CST'
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: 'Легкосплавный, 14, Jinlang'
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: 'Легкосплавный, 13, Jinlang'
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: 'LED с интегрированным ДХО'
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: 'LED'
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: 'цветной TFT дисплей с аналоговой сигнализацией предупреждений'
                            },
                            {
                                titleElem: 'USB',
                                meaning: '2'
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'ABS',
                                meaning: 'Есть. перед/зад'
                            },
                            {
                                titleElem: 'Камера переднего вида/видеорегистратор',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: 'Механическое'
                            },
                            {
                                titleElem: 'Отсек для хранения',
                                meaning: '3'
                            },
                            {
                                titleElem: 'Обдув ног',
                                meaning: 'Есть с регулировкой направления потока'
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: 'Винилискожа с фактурной строчкой и поясничным упором водителя'
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: 'Электронная метка/механический ключ'
                            },
                            {
                                titleElem: 'Подсветка вещевого отсека',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'BLUETOOTH',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Отображение навигации на экране',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Подключение гарнитуры',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Система Старт/Стоп',
                                meaning: 'Нет'
                            }
                        ]
                    }
                }
            },
            {
                url: 'skyter-ariic318tft',
                titleProduct: 'Скутер ARIIC 318 TFT',
                nameLinkProduct: 'ariic318tft',
                imgProduct: ariic318tft,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: 'Jinlang Science And Technology Co. Ltd., 1P73MN-3'
                            },
                            {
                                titleElem: 'Тип',
                                meaning: '1 цилиндровый, 4х клапанный, 4х тактный, жидкостного охлаждения'
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: '276'
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: '4'
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: '75,0 x 68'
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: '10,2:1'
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: '24 (17,5) при 8000 об/мин'
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: '25 при 5500 об/мин'
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: 'Электронный впрыск топлива EFI'
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: '13'
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: 'Бензин с октановым числом не ниже АИ 95'
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: '2х ступенчатый DP'
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Вариатор'
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: 'Automatic CVT'
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: '1'
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: 'Ремень Gates'
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: 'BOSCH'
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: 'DELPHI/NGK'
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: 'электрический'
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: '12В'
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Дуплексная, трубчатая стальная рама с изменяемым сечением'
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: 'Вилка с двумя гидравлическими телескопическими амортизаторами KAIFA'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'маятниковая 2х амортизационная подвеска KAIFA пружинного типа с креплением силового агрегата'
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Гидравлическая двухканальная с ABS'
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: 'Два плавающих тормозных диска 260мм, 2 двухпоршневых суппорта'
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: 'Дисковый тормоз 240мм с двухпоршневым суппортом'
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: '2215'
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: '780'
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: '1335'
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: '800'
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: '1540'
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: '195'
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: '120/70R14, M/C, Бескамерная, CST'
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: '150/70R13, M/C, Бескамерная, CST'
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: 'Легкосплавный, 14, Jinlang'
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: 'Легкосплавный, 13, Jinlang'
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: 'LED с интегрированным ДХО'
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: 'LED'
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: 'цветной LCD дисплей с аналоговой сигнализацией предупреждений'
                            },
                            {
                                titleElem: 'USB',
                                meaning: '2'
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'ABS',
                                meaning: 'Есть. перед/зад'
                            },
                            {
                                titleElem: 'Камера переднего вида/видеорегистратор',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: 'Механическое'
                            },
                            {
                                titleElem: 'Обдув ног',
                                meaning: 'Есть с регулировкой направления потока'
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: 'Винилискожа с фактурной строчкой и поясничным упором водителя'
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Отсек для хранения',
                                meaning: '3'
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: 'Электронная метка/механический ключ'
                            },
                            {
                                titleElem: 'Подсветка вещевого отсека',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'BLUETOOTH',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Отображение навигации на экране',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Подключение гарнитуры',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Система Старт/Стоп',
                                meaning: 'Нет'
                            }
                        ]
                    }
                }
            },
        ]
    },
    {
        url: 'changjiang',
        title: 'Changjiang',
        nameLink: 'Changjiang',
        img: mainChangjiang,
        pages:[
            {
                url: 'ariic-motorcycle-dynasty-700',
                titleProduct: 'Мотоцикл CJ Dynasty 700',
                nameLinkProduct: 'CJDynasty700',
                imgProduct: CJDynasty700,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: 'CHANGJIANG, CJ283MU-F'
                            },
                            {
                                titleElem: 'Тип',
                                meaning: 'Рядный, 2х цилиндровый, 8ми клапанный, 4х тактный, жидкостного охлаждения'
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: '693 cc'
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: '4'
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: '83 x 64'
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: '11,6:1'
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: '75 (55) при 8500 об/мин'
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: '68 при 6500 об/мин'
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: 'Электронный впрыск топлива EFI'
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: '18 (5)'
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: 'Бензин с октановым числом не ниже АИ 92'
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: 'SH'
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Механическая'
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: 'Многодисковое в масляной ванне.'
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: '4 передние, 1 задняя (R-N-1-2-3-4)'
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: 'Цепь'
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: 'BOSCH'
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: 'HENRY/TORCH'
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: 'электрический'
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: '12В'
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Трубчатая стальная рама с изменяемым сечением'
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: 'Рычажная вилка с двумя гидравлическими телескопическими амортизаторами'
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: 'маятниковая 2х амортизационная подвеска пружинного типа с вертикально установленными амортизаторами'
                            },
                            {
                                titleElem: 'Подвеска бокового прицепа',
                                meaning: 'пружинная, с одним пружинно-гидравлическим амортизатором'
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: 'Тормозная система с раздельным контуром переднего и заднего тормоза'
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: 'Плавающий тормозной диск 320мм с двухпоршневым суппортом'
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: '2 дисковых тормоза 260мм с двухпоршневыми суппортами'
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: '2500'
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: '1685'
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: '1110'
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: '840'
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: '1520'
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: '369'
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: '110/100R19, M/C, Timsun'
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: '110/100R19, M/C, Timsun'
                            },
                            {
                                titleElem: 'Шина бокового прицепа',
                                meaning: '110/100R19, M/C, Timsun'
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: 'Спицованный, 19'
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: 'Спицованный, 19'
                            },
                            {
                                titleElem: 'Диск бокового прицепа',
                                meaning: 'Спицованный, 19'
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: 'LED с интегрированным ДХО'
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: 'LED'
                            },
                            {
                                titleElem: 'ПТФ бокового прицепа',
                                meaning: 'Опция'
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: 'цветной TFT дисплей с аналоговой сигнализацией предупреждений'
                            },
                            {
                                titleElem: 'USB',
                                meaning: '2'
                            },
                            {
                                titleElem: 'Ручной тормоз',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Задний ход',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Запасное колесо',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'ABS',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: 'Механическое'
                            },
                            {
                                titleElem: 'Защита радиатора',
                                meaning: 'Опция'
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: 'Раздельные сиденья с амортизатором и регулировкой посадки водителя и пассажира. Винилискожа со строчкой и тактильной вставкой'
                            },
                            {
                                titleElem: 'BLUETOOTH',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Отображение навигации на экране',
                                meaning: 'Нет'
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: 'Механический ключ'
                            },
                            {
                                titleElem: 'Герулировка лапки положения КПП',
                                meaning: 'Механическая'
                            },
                            {
                                titleElem: 'Установка положения зеркал заднего вида',
                                meaning: 'Верхнее'
                            },
                            {
                                titleElem: 'Чехол запасного колеса',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Чехол бокового прицепа',
                                meaning: 'Есть'
                            },
                            {
                                titleElem: 'Демпфер рулевого управления',
                                meaning: 'Есть'
                            }
                        ]
                    }
                }
            },
            {
                url: 'ariic-motorcycle-adept-700',
                titleProduct: 'Мотоцикл CJ Adept 700',
                nameLinkProduct: 'CJAdept700',
                imgProduct: CJAdept700,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: ''
                            },
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: ''
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: ''
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: ''
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: ''
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: ''
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: ''
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: ''
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: ''
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: ''
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: ''
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: ''
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: ''
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: ''
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: ''
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: ''
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: ''
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: ''
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: ''
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: ''
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: ''
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: ''
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: ''
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: ''
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: ''
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: ''
                            },
                            {
                                titleElem: 'USB',
                                meaning: ''
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: ''
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: ''
                            },
                            {
                                titleElem: 'ABS',
                                meaning: ''
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: ''
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: ''
                            },
                            {
                                titleElem: 'Защита радиатора',
                                meaning: ''
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: ''
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: ''
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка лапки положения КПП',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка лапки положения тормоза',
                                meaning: ''
                            },
                            {
                                titleElem: 'Установка положения зеркал заднего вида',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка передней вилки',
                                meaning: ''
                            }
                        ]
                    }
                }
            },
            {
                url: 'ariic-motorcycle-adept-700-solo',
                titleProduct: 'Мотоцикл CJ Adept 700 Solo',
                nameLinkProduct: 'CJAdept700Solo',
                imgProduct: CJAdept700Solo,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: ''
                            },
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: ''
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: ''
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: ''
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: ''
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: ''
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: ''
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: ''
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: ''
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: ''
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: ''
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: ''
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: ''
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: ''
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: ''
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: ''
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: ''
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: ''
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: ''
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: ''
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: ''
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: ''
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: ''
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: ''
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: ''
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: ''
                            },
                            {
                                titleElem: 'USB',
                                meaning: ''
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: ''
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: ''
                            },
                            {
                                titleElem: 'ABS',
                                meaning: ''
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: ''
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: ''
                            },
                            {
                                titleElem: 'Защита радиатора',
                                meaning: ''
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: ''
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: ''
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка лапки положения КПП',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка лапки положения тормоза',
                                meaning: ''
                            },
                            {
                                titleElem: 'Установка положения зеркал заднего вида',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка передней вилки',
                                meaning: ''
                            }
                        ]
                    }
                }
            },
            {
                url: 'ariic-motorcycle-termit-350',
                titleProduct: 'Мототехника CJ Термит 350',
                nameLinkProduct: 'CJТермит350',
                imgProduct: CJТермит350,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: ''
                            },
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: ''
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: ''
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: ''
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: ''
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: ''
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: ''
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: ''
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: ''
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: ''
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: ''
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: ''
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: ''
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: ''
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: ''
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: ''
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: ''
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: ''
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: ''
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: ''
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: ''
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: ''
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: ''
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: ''
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: ''
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: ''
                            },
                            {
                                titleElem: 'USB',
                                meaning: ''
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: ''
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: ''
                            },
                            {
                                titleElem: 'ABS',
                                meaning: ''
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: ''
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: ''
                            },
                            {
                                titleElem: 'Защита радиатора',
                                meaning: ''
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: ''
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: ''
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка лапки положения КПП',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка лапки положения тормоза',
                                meaning: ''
                            },
                            {
                                titleElem: 'Установка положения зеркал заднего вида',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка передней вилки',
                                meaning: ''
                            }
                        ]
                    }
                }
            },
            {
                url: 'ariic-motorcycle-scarabey-350',
                titleProduct: 'Мототехника CJ Скарабей 350',
                nameLinkProduct: 'CJСкарабей350',
                imgProduct: CJСкарабей350,
                description: {	
                    engine: {
                        title: 'Двигатель',
                        elemDesc: [
                            {
                                titleElem: 'Наименование',
                                meaning: ''
                            },
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Рабочий объем, см3',
                                meaning: ''
                            },
                            {
                                titleElem: 'Количество клапанов на цилиндр',
                                meaning: ''
                            },
                            {
                                titleElem: 'Диаметр цилиндра и ход поршня (мм)',
                                meaning: ''
                            },
                            {
                                titleElem: 'Степень сжатия',
                                meaning: ''
                            },
                            {
                                titleElem: 'Макс. мощность, л.с.(кВт) при об в мин',
                                meaning: ''
                            },
                            {
                                titleElem: 'Макс.крутящий момент, Н*м',
                                meaning: ''
                            }
                        ]
                    },
                    fuelSystem: {
                        title: 'Топливная система',
                        elemDesc: [
                            {
                                titleElem: 'Система питания',
                                meaning: ''
                            },
                            {
                                titleElem: 'Емкость топливного бака вкл резерв (резерв), л.',
                                meaning: ''
                            },
                            {
                                titleElem: 'Топливо',
                                meaning: ''
                            },
                            {
                                titleElem: 'Система выпуска и нейтрализации отрааботавших газов',
                                meaning: ''
                            }
                        ]
                    },
                    transmission: {
                        title: 'Трансмиссия',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Сцепление',
                                meaning: ''
                            },
                            {
                                titleElem: 'Количество передач',
                                meaning: ''
                            },
                            {
                                titleElem: 'Привод на колесо',
                                meaning: ''
                            }
                        ]
                    },
                    electricalEquipment: {
                        title: 'Электрооборудование',
                        elemDesc: [
                            {
                                titleElem: 'Блок управления двигателем',
                                meaning: ''
                            },
                            {
                                titleElem: 'Катушка зажигания/свечи',
                                meaning: ''
                            },
                            {
                                titleElem: 'Стартер',
                                meaning: ''
                            },
                            {
                                titleElem: 'Напряжение бортовой сети',
                                meaning: ''
                            }
                        ]
                    },
                    frame: {
                        title: 'Рама',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            }
                        ]
                    },
                    suspension: {
                        title: 'Подвеска',
                        elemDesc: [
                            {
                                titleElem: 'Передняя подвеска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: ''
                            }
                        ]
                    },
                    brakeSystem: {
                        title: 'Тормозная система',
                        elemDesc: [
                            {
                                titleElem: 'Тип',
                                meaning: ''
                            },
                            {
                                titleElem: 'Передняя тормозная система',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя тормозная система',
                                meaning: ''
                            }
                        ]
                    },
                    overallDimensions: {
                        title: 'Габаритные размеры, вес',
                        elemDesc: [
                            {
                                titleElem: 'Длина, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Ширина (без учета зеркал), мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Высота, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Высота по седлу, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Колесная база, мм',
                                meaning: ''
                            },
                            {
                                titleElem: 'Снаряженная масса, кг',
                                meaning: ''
                            }
                        ]
                    },
                    wheelWeight: {
                        title: 'Колеса, колесные диски',
                        elemDesc: [
                            {
                                titleElem: 'Передняя шина/производитель',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя шина/производитель',
                                meaning: ''
                            },
                            {
                                titleElem: 'Передний колесный диск',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задний колесный диск',
                                meaning: ''
                            }
                        ]
                    },
                    externalLightingDevices: {
                        title: 'Внешние световые приборы',
                        elemDesc: [
                            {
                                titleElem: 'Передняя фара',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задний фонарь',
                                meaning: ''
                            },
                            {
                                titleElem: 'Повторители поворота',
                                meaning: ''
                            }
                        ]
                    },
                    instrumentPanel: {
                        title: 'Панель приборов, мультимедиа, доп. оснащение',
                        elemDesc: [
                            {
                                titleElem: 'Панель приборов',
                                meaning: ''
                            },
                            {
                                titleElem: 'USB',
                                meaning: ''
                            },
                            {
                                titleElem: 'Бесключевой доступ',
                                meaning: ''
                            },
                            {
                                titleElem: 'Подогрев рукояток руля',
                                meaning: ''
                            },
                            {
                                titleElem: 'ABS',
                                meaning: ''
                            },
                            {
                                titleElem: 'TCS (Tranction control system)',
                                meaning: ''
                            },
                            {
                                titleElem: 'Открытие дросселя',
                                meaning: ''
                            },
                            {
                                titleElem: 'Защита радиатора',
                                meaning: ''
                            },
                            {
                                titleElem: 'Сиденье/Отделка',
                                meaning: ''
                            },
                            {
                                titleElem: 'Круиз контроль',
                                meaning: ''
                            },
                            {
                                titleElem: 'Система запуска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка лапки положения КПП',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка лапки положения тормоза',
                                meaning: ''
                            },
                            {
                                titleElem: 'Установка положения зеркал заднего вида',
                                meaning: ''
                            },
                            {
                                titleElem: 'Задняя подвеска',
                                meaning: ''
                            },
                            {
                                titleElem: 'Регулировка передней вилки',
                                meaning: ''
                            }
                        ]
                    }
                }
            }
        ]
    }
]