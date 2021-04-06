import { shallow } from "enzyme";
import App from "../App";

describe("<Error />", () => {
  const wrapper = shallow(<App />);

  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
