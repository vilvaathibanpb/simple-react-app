import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import App from "./App";
import "./App.css";
import messages from '../translations/translations.en.json'

const el = document.getElementById("app");

customLogic = () => {
    const messages = import(`../translations/translations.${currentLocale}.json`)
}

ReactDOM.render(
    <IntlProvider messages={messages} locale="en" >
        <App />
    </IntlProvider>, el);


//  index.jsx -> App.jsx -> text.jsx
//             -> App.css
            // -> React -> proptyes.ts -> custom props.js
                        // -> getHooks
                        // -> jdkjnjf
            // -> React-dom
