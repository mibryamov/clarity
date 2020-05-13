<template>
  <div>
    <div class="searchbar-container">
      <div class="icons-search-wrapper">
        <label for="search-icons-sticky" class="searchbar-label">
          <cds-icon shape="search" size="24"></cds-icon>
          <button aria-label="Clear search terms" type="button" class="close">
            <cds-icon shape="close" size="24"></cds-icon>
          </button>
          <input
            id="search-icons-sticky"
            placeholder="Search for Clarity Icons..."
            type="text"
            class="searchbar-input clr-input"
          />
        </label>
        <div class="icon-preview-settings"></div>
      </div>
    </div>

    <h3>Core Shapes</h3>
    <div class="clr-row">
      <DocIcon v-for="icon in core" :name="icon[0]"></DocIcon>
    </div>

    <h3>Commerce Shapes</h3>
    <div class="clr-row">
      <DocIcon v-for="icon in commerce" :name="icon[0]"></DocIcon>
    </div>
  </div>
</template>

<script>
import {
  chartCollectionIcons as chart,
  coreCollectionIcons as core,
  commerceCollectionIcons as commerce,
  essentialCollectionIcons as essential,
  mediaCollectionIcons as media,
  socialCollectionIcons as social,
  travelCollectionIcons as travel,
  textEditCollectionIcons as textEdit,
  technologyCollectionIcons as technology,
} from '@clr/core/icon-shapes';

export default {
  name: 'DocIcons',
  data: function () {
    console.log(core);
    return {
      core,
      chart,
      commerce,
      essential,
      media,
      social,
      travel,
      textEdit,
      technology,
    };
  },
};
</script>

<style scoped lang="scss"></style>
