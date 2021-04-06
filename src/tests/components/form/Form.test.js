import { shallow } from "enzyme";
import Form from "../../../components/form/Form";

describe("<Error />", () => {
  const setAsentamientos = jest.fn();

  const wrapper = shallow(<Form setAsentamientos={setAsentamientos} />);

  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
