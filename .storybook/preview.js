import React from 'react'
import TranslationsProvider from '../src/contexts/translations'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <TranslationsProvider>
      {Story()}
    </TranslationsProvider>
  ),
];