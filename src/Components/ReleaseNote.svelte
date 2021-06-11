<script>
  import { formatDate } from "../Tools/formatDate";
  import { getTitle } from "../Tools/getTitle";

  export let value;
  export let details;
</script>

<div>
  <h5 variant="caption">{formatDate(value?.creationDate)}</h5>
  <h3>{getTitle(value?.values?.notes)}</h3>
  <button on:click={() => (details = value)}>Details</button>
</div>
