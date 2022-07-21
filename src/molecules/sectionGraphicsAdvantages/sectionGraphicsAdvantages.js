import React from 'react';
import mainBig from "./imgs/main-big.png";
import mainSmall from "./imgs/main-small.png"
import "./sectionGraphicsAdvantages.scss"

const SectionGraphicsAdvantages = () => {
    return (
        <div className="SectionGraphicsAdvantages">
            <div className="SectionGraphicsAdvantages__mainPreview">
                <div className="graphics-container">
                    <div className="graphics">
                        <div className="graphics-item">
                            <div className="graphics-item-number">
                                <h2 className="graphics-item-number__content">164</h2>
                            </div>
                            <h4 className="graphics-item__description">запатентованные разработки</h4>
                        </div>
                        <div className="graphics-item">
                            <div className="graphics-item-number">
                                <h2 className="graphics-item-number__content">100</h2>
                            </div>
                            <h4 className="graphics-item__description">видов стали и сплавов</h4>
                        </div>
                        <div className="graphics-item">
                            <div className="graphics-item-number">
                                <h2 className="graphics-item-number__content">130</h2>
                            </div>
                            <h4 className="graphics-item__description">режимов термообработки</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/*<img src={mainBig} alt="" className="SectionGraphicsAdvantages__main"/>*/}
        </div>
    );
};

export default SectionGraphicsAdvantages;