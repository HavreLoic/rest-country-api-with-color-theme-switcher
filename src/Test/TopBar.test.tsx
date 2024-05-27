import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TopBar } from "../Components";
import { ThemeProvider } from "../Context";

describe("TopBar", () => {
  it("should have light-mode when page first loads", () => {
    render(
      <ThemeProvider>
        <TopBar />
      </ThemeProvider>
    );

    const topBarElement = screen.getByTestId("top-bar");
    const moonIcon = screen.getByRole("img", { name: "moon" });

    expect(topBarElement.className.includes("light-mode")).toBe(true);

    fireEvent.click(moonIcon);

    expect(topBarElement.className.includes("light-mode")).toBe(false);
    expect(topBarElement.className.includes("dark-mode")).toBe(true);
  });
});
