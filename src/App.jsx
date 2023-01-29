import { FormattedMessage } from "react-intl";
import Text from "./Text";
const App = () => {
  const [x, setX] = useState();
  return (
    <div>
      <h1>
        <FormattedMessage id="hello_react" />
      </h1>
      <Text />
    </div>
  );
};

export default App;
