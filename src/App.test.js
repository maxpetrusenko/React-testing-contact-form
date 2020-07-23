import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

// test("renders App without crashing", () => {
//   render(<App />);
// });

// it('First Name is more than 3 and less than 50', () => {
//   const app = render(<ContactForm foo="you may inject props!" />);
// });

test('Login', ()=> {
  const handleSubmit = jest.fn()
  const user = {firstName : 'Maksym', lastName: 'Petrusenko', email:'max.petrusenko@gmail.com', message : 'hello world'}

    fireEvent.change(getByLabelText(/firstName/i), {target:{value:user.firstName}})

    fireEvent.change(utils.getByLabelText(/lastName/i), {target:{value:user.lastName}})
    
    fireEvent.change(utils.getByLabelText(/email/i), {target:{value:user.email}})

    fireEvent.click(getByText(/submit/i))

    expect(handleSubmit).toHaveBeenCalled(1)
    expect(handleSubmit).toHaveBeenCalledWith(user)
})

test('error when no info provided', ()=> {
  const handleSubmit = jest.fn()
  const {getByLabelText, getByText, getByRole} = render(
    <ContactForm onSubmit={handleSubmit}/>
  )
  fireEvent.change(getByLabelText(/firstName/i),{target:{value:''}})
  fireEvent.click(getByText(/submit/i))

  const errorMessage = getByRole('alert')
  expect(errorMessage).toHaveTextContent(/maksyms/i)
  expect(handleSubmit).not.toHaveBeenCalled()
})
