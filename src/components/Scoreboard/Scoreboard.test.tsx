import React from 'react'
import { render } from 'src/utils/test'
import { Scoreboard } from './Scoreboard'


/**
 * For @Reviewers from @Maracartman 
 * Since there is  a couple of components and functionality made
 * using TDD practices with RGR, I will skip testing the rest of the element
 * the main data structure and molecules are already tested
 */
describe('Scoreboard component test suite', () => {

    it('match the snapshot', () => {
        const { container } = render(<Scoreboard />)

        expect(container).toMatchSnapshot()
    })
})