import React from 'react';
import "./styles/chooseView.css";

import UniversityCard from "../custom_components/universityCard"
import {AutoComplete} from 'primereact/autocomplete';

class ChooseView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            brandSuggestions: null
        };

        this.brands = [
            'НИУ ВШЭ',
            'МИФИ',
            'МФТИ',
            'МГТУ',
            'МГИМО',
            'СПбГУ',
            'РАНХиГС',
            'МГУ'];
    }

    suggestBrands(event) {
        let results = this.brands.filter((brand) => {
            return brand.toLowerCase().startsWith(event.query.toLowerCase());
        });

        this.setState({brandSuggestions: results});
    }

    render() {
        return (
            <div id="chooseView">
                <p style={{fontSize: "36px", fontWeight: "bold"}}>
                    ВУЗы России
                </p>
                <div className="chooseViewSearchContainer">
                    <AutoComplete value={this.state.brand} onChange={(e) => this.setState({brand: e.value})}
                                  suggestions={this.state.brandSuggestions}
                                  completeMethod={this.suggestBrands.bind(this)}
                                  placeholder="Найти ВУЗ"/>
                </div>
                <div className="p-grid">
                    <div className="p-col">
                        <UniversityCard
                            title="НИУ ВШЭ"
                            src="https://upload.wikimedia.org/wikipedia/ru/d/d6/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9D%D0%98%D0%A3_%D0%92%D0%A8%D0%AD.jpg"
                        />
                    </div>
                    <div className="p-col">
                        <UniversityCard
                            title="МГУ"
                            src="https://www.msu.ru/upload/iblock/812/logo_msu.jpg"
                        />
                    </div>
                    <div className="p-col-3">
                        <UniversityCard
                            title="МФТИ"
                            src="https://pp.userapi.com/c629213/v629213551/3e675/QxnlS8icHYc.jpg?ava=1"
                        />
                    </div>
                    <div className="p-col-3">
                        <UniversityCard
                            title="МИФИ"
                            src="http://www.ssti.ru/images/f_style/logo_mephi2.jpg"
                        />
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col-3">
                        <UniversityCard
                            title="МГТУ"
                            src="http://abali.ru/wp-content/uploads/2013/03/Gerb_MGTU_imeni_Baumana.png"
                        />
                    </div>
                    <div className="p-col-3">
                        <UniversityCard
                            title="СПбГУ"
                            src="https://pr.spbu.ru/images/simvolika/logo/CoA_Medium_color.png"
                        />
                    </div>
                    <div className="p-col-3">
                        <UniversityCard
                            title="МГИМО"
                            src="https://mgimo.ru/upload/mgimologo-big.jpg"
                        />
                    </div>
                    <div className="p-col-3">
                        <UniversityCard
                            title="РАНХиГС"
                            src="https://academkin.ru/images/high_schools/logo/severodvinskiy_filial_rossiyskoy_akademii_narodnogo_khozyaystva_i_gosudarstvennoy_sluzhbi_pri_prezidente_rossiyskoy_federatsii_1621.png"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChooseView;