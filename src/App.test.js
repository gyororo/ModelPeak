// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModelPeak title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModelPeak/i);
    expect(titleElement).toBeInTheDocument();
});
