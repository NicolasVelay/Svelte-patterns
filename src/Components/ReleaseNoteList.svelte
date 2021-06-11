<script lang="ts">
  import Button from "@smui/button";
  import LayoutGrid from "@smui/layout-grid";
  import SvelteMarkdown from "svelte-markdown";
  import ReleaseNote from "./ReleaseNote.svelte";
  import { formatDate } from "../Tools/formatDate";

  let details: TReleaseNote = null;

  const fetchReleaseNotes = (async (): Promise<[TReleaseNote]> => {
    const response = await fetch(
      "https://octure.flowthings.io/api/release-note",
    );
    console.log(response);
    return await response.json();
  })();
</script>

{#await fetchReleaseNotes}
  <div>...loading</div>
{:then releaseNotes}
  {#if details}
    <LayoutGrid container direction="column">
      <Button on:click={() => (details = null)}>Back</Button>
      <LayoutGrid item>
        <h5>
          {formatDate(details.creationDate)}
        </h5>
      </LayoutGrid>
      <LayoutGrid item>
        <SvelteMarkdown source={details?.values.notes} />
      </LayoutGrid>
    </LayoutGrid>
  {/if}
  {#if !details}
    {#each releaseNotes as releaseNote}
      <ReleaseNote bind:details value={releaseNote} />
    {/each}
  {/if}
{:catch error}
  <div>{error}</div>
{/await}
