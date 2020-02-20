import React from 'react'
import { renderToggle } from '../../test/utils'
// import Usage from '../exercises-final/03'
import Usage from '../exercises/03'

test('renders a toggle component', () => {
  const handleToggle = jest.fn()
  const { toggleButton, toggle } = renderToggle(
    <Usage onToggle={handleToggle} />,
  )
  expect(toggleButton).toBeOff()
  toggle()
  expect(toggleButton).toBeOn()
  expect(handleToggle).toHaveBeenCalledTimes(1)
  expect(handleToggle).toHaveBeenCalledWith(true)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react%20patterns&e=03&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
/**
 * 1. React Context solves the prop drilling problem.
 * 2. If you need more than one context provider, consider making a provider that provides an object.
 * 3. It's a good practice to show warning when context consumer cannot get a value.
 * 4. New API: React.createContext(defaultValue). 'defaultValue' is used when there is no <provider> for <consumer>.
 * 5. It's okay to create variables outside class component.
 *    These variables aren't exported and can be used by the class component.
 * 6. Since consumers are re-rendered when provider value changes, it's a good practice to do this:
 *    <Context.Provider value={this.state}>...</Context.Provider>
 *    instead of
 *    <Context.Provider value={{prop1: 'whatever', prop2: 'whatever'}}>...</Context.Provider>
 *    because the consumers are re-rendered only when provider state changes in the first case
 *    while consumers are always re-rendered when provider is re-rendered.
 */
////////////////////////////////
