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

    const navbar = screen.getByRole('navigation');

    // Simulieren des Scrollens
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));

    // Überprüfen, ob die Klasse 'dark-nav' hinzugefügt wurde
    expect(navbar.className).toContain('dark-nav');
  });
});
