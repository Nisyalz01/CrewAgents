// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrewAgents title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrewAgents/i);
    expect(titleElement).toBeInTheDocument();
});
