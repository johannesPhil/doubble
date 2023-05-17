import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../Redux";

const ProviderWrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);
const customRender = (ui, options = {}) =>
	render(ui, {
		// wrap provider(s) here if needed

		wrapper: ProviderWrapper,

		...options,
	});

export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

// override render export

export { customRender as render };
