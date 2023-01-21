import React, { ReactElement } from 'react'
import {RenderOptions, render} from '@testing-library/react'
import TranslationsProvider from 'src/contexts/translations'

const AllTheProviders = ({children}:{children: ReactElement}): ReactElement => (
    <TranslationsProvider>
        {children}
    </TranslationsProvider>
)

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}