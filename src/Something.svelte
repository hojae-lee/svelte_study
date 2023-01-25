<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte'

  let name = 'Something!'

  function moreDot() {
    name += '!!'
  }

  beforeUpdate(() => {
    alert('beforeUpdate')
  })
  afterUpdate(() => {
    alert('afterUpdate')
  })
  onMount(() => {
    alert('Toggle')
    return () => {
      alert('Destory in mount')
    }
  })
  onDestroy(() => {
    alert('Destory')
  })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<h2 on:click={moreDot}>{name}</h2>