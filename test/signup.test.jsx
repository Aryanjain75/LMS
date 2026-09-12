import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SignupPage from "../app/Signup/page";

describe("signup flow", () => {
  it("advances through organization, catalog, identity, and password steps", () => {
    render(<SignupPage />);

    fireEvent.click(screen.getByRole("button", { name: "Tailor your category" }));
    expect(screen.getByText("Tailor your catalog")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(screen.getByText("Verify Your Identity")).toBeInTheDocument();

    screen.getAllByRole("textbox").forEach((input, index) => {
      fireEvent.change(input, { target: { value: String(index + 1) } });
    });
    fireEvent.click(screen.getByRole("button", { name: "Verify & Continue" }));

    expect(screen.getByText("Create Your Password")).toBeInTheDocument();
    expect(screen.getAllByDisplayValue("weakpass")).toHaveLength(2);
  });

  it("toggles catalog selections and password visibility", () => {
    render(<SignupPage />);
    fireEvent.click(screen.getByRole("button", { name: "Tailor your category" }));

    const sales = screen.getByRole("button", { name: "Sales" });
    fireEvent.click(sales);
    expect(sales).toHaveClass("border-slate-900");

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    screen.getAllByRole("textbox").forEach((input, index) => fireEvent.change(input, { target: { value: String(index + 1) } }));
    fireEvent.click(screen.getByRole("button", { name: "Verify & Continue" }));
    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(screen.getAllByDisplayValue("weakpass")[0]).toHaveAttribute("type", "text");
  });

  it("updates the catalog when the department changes", () => {
    render(<SignupPage />);

    fireEvent.change(screen.getByLabelText("Department"), {
      target: { value: "sales" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Tailor your category" }));

    const sales = screen.getByRole("button", { name: "Sales" });
    const engineering = screen.getByRole("button", { name: "Engineering" });
    expect(sales).toHaveClass("border-slate-900");
    expect(engineering).toHaveClass("border-gray-200");

    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    fireEvent.change(screen.getByLabelText("Department"), {
      target: { value: "design" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Tailor your category" }));

    expect(screen.getByRole("button", { name: "Design" })).toHaveClass("border-slate-900");
    expect(screen.getByRole("button", { name: "Sales" })).toHaveClass("border-gray-200");
  });
});