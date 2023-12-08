import { $, component$ } from '@builder.io/qwik'
import { navigate } from 'astro:transitions/client'

const NavigateButton = component$(({ path }: { path: string }) => {
  const handleNavigate = $(() => {
    return navigate(path)
  })

  return (
    <button
      onClick$={handleNavigate}
    >
      Navigate to {path}
    </button>
  )
})

export default NavigateButton
