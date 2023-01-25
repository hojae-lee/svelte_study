import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte'
import { writable } from 'svelte/store'

export function lifecycle () {
  // onMount(() => {
  //   console.log('Mounted!')
  // })
  onDestroy(() => {
    console.log('Destroy!')
  })
  beforeUpdate(() => {
    console.log('beforeUpdate!')
  })
  afterUpdate(() => {
    console.log('afterUpdate!')
  })
}

export function delayRender(delay = 3000) {
  let render = writable(false)
  onMount(() => {
    setTimeout(() => {
      // $render = true
      console.log(render)
      render.set(true)
    }, delay)
  })
  return render
}