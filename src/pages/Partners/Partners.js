import './Partners.scss'
import cub from './imgs/cub.svg'
export default function Partners() {
    return (
        <section className="partners">
            <div className="partners__header">
                <div className='partners__headlines'>
                    <h1 className='partners__title'>наши</h1>
                    <h1 className='partners__subtitle'>партнеры</h1>
                </div>
                <img src={cub} alt='Квадраты' className='partners__cub' />
            </div>
            <h3>Лизинг</h3>
            <h4>ООО «ЭкономЛизинг» в г. Воронеж</h4>
            <a className="partners__link" target="_blank" href="http://www.economleasing.ru"><p>www.economleasing.ru</p></a>
            <p className='partners__info'>Лизинг оборудования позволяет компании в короткий срок увеличить эффективность своего производства, снизить его издержки и тем самым повысить свою конкурентоспособность.</p>
            <p>Условия приобретения оборудования в лизинг:</p>
            <ul>
                <li><p>Аванс от 15% стоимости оборудования</p></li>
                <li><p>Срок договора лизинга от 12 месяцев</p></li>
                <li><p>Платежи могут быть убывающими, равномерными или сезонными (учитываются особенности ведения бизнеса)</p></li>
                <li><p>Ускоренная амортизация оборудования с применением коэффициента от 1 до 3</p></li>
            </ul>
            <p>Преимущества приобретения оборудования в лизинг:</p>
            <ul>
                <li><p>Возмещение НДС со всех платежей</p></li>
                <li><p>Уменьшение налога на прибыль за счет переноса лизинговых платежей на расходы</p></li>
                <li><p>Удобный график платежей на выбор Лизингополучателя с учетом особенности ведения бизнеса</p></li>
                <li><p>Отвлечение из оборота только части денежных средств: на требуемый аванс</p></li>
            </ul>
        </section>
    )
}

