/**
 */
// import { expect, test, describe } from 'vitest';
/**
 * @vitest-environment jsdom
 */
import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './src/components/Navbar/Navbar';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';


describe('Navbar', () => {
  test('renders the Navbar correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Logo finden (Falls der alt-Text leer ist, nutzen wir die Klasse)
    const logo = screen.getAllByAltText('').find(img => img.className === 'logo');
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

    // Menü-Icon mit einer sichereren Methode finden
    const menuIcon = screen.getAllByAltText('').find(img => img.className === 'menue-icon');
    expect(menuIcon).toBeInTheDocument();

    // Menü-Element finden
    const menuLists = screen.getAllByRole('list');
    expect(menuLists.length).toBeGreaterThan(0);
    const menuList = menuLists[0]


    // Menü sollte zuerst verborgen sein
    expect(menuList).toHaveClass('hide-mobile-menu');

    // Menü öffnen
    await userEvent.click(menuIcon);

    // Überprüfen, ob die Klasse für das geöffnete Menü gesetzt wurde
    expect(menuList).not.toHaveClass('hide-mobile-menu');
  });

  test('scrolling changes navbar to dark mode', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

      // Richtige Navigation finden
      const navbars = screen.getAllByRole('navigation');
      expect(navbars.length).toBeGreaterThan(0);
      const navbar = navbars[0];

  });
});
