import React from 'react';
import preview0 from "./imgs/preview0.png"
import preview1 from "./imgs/preview1.png"
import preview2 from "./imgs/preview2.png"
import preview3 from "./imgs/preview3.png"
import "./MetalWorking.scss"

const MetalWorking = () => {
    return (
        <div className="MetalWorking">
            <h3>Металлообработка</h3>
            <img src={preview0} alt=""/>
            <p>Новейшие технологии обработки металла уже не те, что были раньше. Постоянный процесс совершенствования существующих технологий и внедрений инноваций и научных разработок позволяют создавать перспективные типы станков для обработки металла, а также дополнительных инструментов. Это активное движение обусловлено ростом и оживленностью данной отрасли, ведь она участвует во всех направлениях экономики страны.</p>
            <h3>8 лет на рынке</h3>
            <p>Эксклюзивная металлообработка на заказ — направление, развиваемое ООО Техностиль с 2005 года – уже 8 лет данное направление активно развивается и пополняется новейшими разработками. В активе фирмы цех, позволяющий выполнять услуги по металлообработке любой сложности. Кроме того, производственные мощности делают возможным организовать производство по полному циклу под ключ, все этапы обработки в пределах одного цеха.</p>
            <div>
                <img src={preview1} alt=""/>
                <img src={preview2} alt=""/>
                <img src={preview3} alt=""/>
            </div>
            <ul>
                <p>
                    <li>Резка листа. Мы можем нарезать лист металла с высочайшей точностью, что исключает необходимость дальнейшей его доработки. Инновационные станки позволяют резать сталь максимальной толщины до 20 мм размером 3 на 1,5 метра.</li>
                    <li>Токарная и фрезерная</li>
                    <li>Расточка: координатная и горизонтальная</li>
                    <li>Все методы шлифования, в том числе плоское, круглое и внутреннее, а также шлифование кулачковых валов и резьбы, зубообработка</li>
                    <li>Сверление</li>
                    <li>Доводка</li>
                    <li>Хонингование</li>
                    <li>Строгание</li>
                    <li>Долбление</li>
                    <li>Шлицешлифование</li>
                    <li>Балансировка</li>
                    <li>Гибка</li>
                </p>
            </ul>
            <h4>ПОЧЕМУ НУЖНО ДОВЕРЯТЬ ПРОВЕДЕНИЕ РАБОТ НАШЕЙ КОМПАНИИ?</h4>
            <ul>
                <p>
                    <li>100% гарантия соблюдения сроков и качества полученных.</li>
                    <li>Доставка по всей России на место, где будет производиться эксплуатация.</li>
                    <li>Для обработки металла вы можете предоставить как собственный материал, так и воспользоваться нашим сырьем, служба снабжения оперативно решит все вопросы по заказу и доставке материалов в цех.</li>
                    <li>Все станки сертифицированы и испытано в соответствии с международными стандартами, мы предоставим все необходимые документы для подтверждения.</li>
                    <li>Выдаем необходимые сертификаты и протоколы механических испытаний.</li>
                </p>
            </ul>
            <h3>Мы предоставляем следующие услуги:</h3>
            <ul>
                <p>
                    <li>Резка (плазменная, лазерная, газовая)</li>
                    <li>Производство молотовых и прессовых поковок массой до 200 тонн вне зависимости от типа изделия</li>
                    <li>Переков предоставленного заказчиком изделия</li>
                    <li>Все типы изделий из всевозможных видов сталей по чертежам клиента</li>
                    <li>Комплексное изготовление на станках с числовым программным управлением (ЧПУ). Это не только токарная и фрезерная обработка, но и другие виды механических работ над металлом: карусельная обработка (координатно-расточная и горизонтально-расточная, зубошлифовка и зубонарезка)</li>
                    <li>Любые виды термообработки изделий для увеличения прочности: закалка, отжиг, отпуск, азотация, токи высокой частоты (ТВЧ)</li>
                    <li>Поставка поковок</li>
                </p>
            </ul>
            <ul>
                <p>
                    <li>Металлообработка любой сложности будет выполнена нами на современном оборудовании в срок и с необходимой документацией.</li>
                </p>
            </ul>
        </div>
    );
};

export default MetalWorking;