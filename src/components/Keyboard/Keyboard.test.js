import Keyboard from "./Keyboard";
import { render, screen } from "@testing-library/react";
import StatusContextProvider from "../../contexts/StatusContextProvider";

describe("Given a Keyboard component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a list of keys with the numbers 1-0", () => {
      const expectedNumbers = ["1", "2", "3"];

      render(
        <StatusContextProvider>
          <Keyboard />
        </StatusContextProvider>
      );

      const key1 = screen.queryByText(expectedNumbers[0]);
      const key2 = screen.queryByText(expectedNumbers[1]);

      expect(key1).toBeInTheDocument();
      expect(key2).toBeInTheDocument();
    });
  });
});
