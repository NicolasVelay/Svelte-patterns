<script lang="ts">
  import { formatDate } from "../Tools/formatDate";
  import { getTitle } from "../Tools/getTitle";

  export let value: TReleaseNote, details: TReleaseNote;
</script>

<div>
  <h5>{formatDate(value?.creationDate)}</h5>
  <h3>{getTitle(value?.values?.notes)}</h3>
  <button on:click={() => (details = value)}>Details</button>
</div>
