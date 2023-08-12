import { useState } from 'react'

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const inputProps = {
    value,
    onChange: handleChange,
  }

  return inputProps
}
