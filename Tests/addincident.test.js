import { render, screen } from "@testing-library/react";
import AddIncident from "../pages/[pets]/symptoms/[id]/addIncident.js";
import "@testing-library/jest-dom";
import "@jest/globals";
import { UserProvider } from '@auth0/nextjs-auth0';

jest.mock('@auth0/nextjs-auth0', () => ({ UserProvider: ({ children }) => '<div>{children}</div>' }));

describe("Add Incident page", () => {
    render(
    <UserProvider>
    <AddIncident incidents={"props"}/>
    </UserProvider>)
it("checks that the add incident input form renders correctly on the page", () => {
expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
})
})