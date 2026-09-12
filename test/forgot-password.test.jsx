import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ForgotPasswordPage from "../app/forget/email-confirmation/page";

describe("forgot password flow", () => {
  it("shows the check-email state after a valid email submission", () => {
    render(<ForgotPasswordPage />);
    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "learner@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: "Send Reset Link" }));

    expect(screen.getByRole("heading", { name: "Check your email" })).toBeInTheDocument();
    expect(screen.getByText("Sent to learner@example.com")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Back to login/i })).toHaveAttribute("href", "/Login");
  });

  it("returns to the form when resend is selected", () => {
    render(<ForgotPasswordPage />);
    fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "learner@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: "Send Reset Link" }));
    fireEvent.click(screen.getByRole("button", { name: "Click to resend" }));

    expect(screen.getByRole("button", { name: "Send Reset Link" })).toBeInTheDocument();
    expect(screen.getByDisplayValue("learner@example.com")).toBeInTheDocument();
  });
});