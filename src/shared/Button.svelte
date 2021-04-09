<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class:flat class:inverse class={type} on:click>
  <slot />
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .flat {
    box-shadow: none;
  }
  .primary:hover {
    background: crimson;
    color: white;
  }
  .primary {
    color: crimson;
    background: white;
    border: 2px solid crimson;
  }
  .secondary:hover {
    background: #45c496;
    color: white;
  }
  .secondary {
    color: #45c496;
    background: white;
    border: 2px solid #45c496;
  }
  .primary.inverse {
    color: crimson;
    background: white;
    border: 2px solid crimson;
  }
  .secondary.inverse {
    color: #45c496;
    background: white;
    border: 2px solid #45c496;
  }
</style>
