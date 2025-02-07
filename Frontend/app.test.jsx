// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "./src/data/App";

// describe("App", () => {
//   test("renders the App correctly", () => {
//     render(<App />);
//     expect(screen.getByText("Welcome to the App")).toBeInTheDocument();
//   });

//   test("button click updates state", async () => {
//     render(<App />);
//     const button = screen.getByRole("button", { name: /click me/i });
//     await userEvent.click(button);
//     expect(screen.getByText("Clicked!")).toBeInTheDocument();
//   });
// });
/**
 * @vitest-environment jsdom
 */
import { expect, test, describe } from 'vitest';
/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './src/components/Navbar/Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {
  test('renders the Navbar correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Überprüfen, ob das Logo vorhanden ist
    const logo = screen.getByAltText(''); // Alt-Text des Logos (leer im Code)
    expect(logo).toBeInTheDocument();

    // Überprüfen, ob die Links korrekt gerendert werden
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Stellplatzsuche')).toBeInTheDocument();
    expect(screen.getByText('Länderregeln')).toBeInTheDocument();
  });

  test('mobile menu toggles on menu icon click', async () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Menü-Icon finden
    const menuIcon = screen.getByAltText('Menue Icon');
    expect(menuIcon).toBeInTheDocument();

    // Überprüfen, ob das mobile Menü initial versteckt ist
    const menuList = screen.getByRole('list');
    expect(menuList.className).toContain('hide-mobile-menu');

    // Klick auf das Menü-Icon
    await userEvent.click(menuIcon);

    // Überprüfen, ob das mobile Menü sichtbar wird
    expect(menuList.className).not.toContain('hide-mobile-menu');
  });

  test('scrolling changes navbar to dark mode', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const navbar = screen.getByRole('navigation');

    // Simulieren des Scrollens
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));

    // Überprüfen, ob die Klasse 'dark-nav' hinzugefügt wurde
    expect(navbar.className).toContain('dark-nav');
  });
});
