import React from 'react'
import {screen, render} from "@testing-library/react"
import {  Score } from './Score'


describe("Score component test suite", () => {
    it('match the snapshot', () => {
        const { container } = render(<Score />)

        expect(container).toMatchSnapshot()
    })

    it('display "00" if an undefined score is passed', () => { 
        render(<Score />)

        expect(screen.getByText('00')).toBeInTheDocument()
    })

    it('display 05 if the score 5 is passed to the Score component', () => {
        render(<Score score={5} />)

        expect(screen.getByText("05")).toBeInTheDocument()
    })
})