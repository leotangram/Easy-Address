import { shallow } from "enzyme";
import Error from "../../../components/error/Error";

describe("<Error />", () => {
  const wrapper = shallow(<Error />);

  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
