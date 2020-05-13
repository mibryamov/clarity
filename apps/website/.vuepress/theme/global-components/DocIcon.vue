<template>
  <div class="icon-item clr-col-md-4 clr-col-sm-6 clr-col-12">
    <button type="button" class="icon-button" @click="open = !open" :class="{ open }">
      <cds-icon size="24" :shape="name"></cds-icon> {{ name }}
    </button>
    <div class="icon-detail" v-if="open">
      <div class="icon-variants">
        <h5>Variations</h5>
        <button
          type="button"
          class="icon-variant"
          v-if="variants.outline"
          :class="{ active: variant == 'outline' }"
          @click="variant = 'outline'"
        >
          <cds-icon :shape="name" size="24"></cds-icon>
        </button>
        <button
          type="button"
          class="icon-variant"
          v-if="variants.outlineAlerted"
          :class="{ active: variant == 'outlineAlerted' }"
          @click="variant = 'outlineAlerted'"
        >
          <cds-icon :shape="name" size="24" class="has-alert"></cds-icon>
        </button>
        <button
          type="button"
          class="icon-variant"
          v-if="variants.outlineBadged"
          :class="{ active: variant == 'outlineBadged' }"
          @click="variant = 'outlineBadged'"
        >
          <cds-icon :shape="name" size="24" class="has-badge"></cds-icon>
        </button>
        <button
          type="button"
          class="icon-variant"
          v-if="variants.solid"
          :class="{ active: variant == 'solid' }"
          @click="variant = 'solid'"
        >
          <cds-icon :shape="name" size="24" class="is-solid"></cds-icon>
        </button>
        <button
          type="button"
          class="icon-variant"
          v-if="variants.solidAlerted"
          :class="{ active: variant == 'solidAlerted' }"
          @click="variant = 'solidAlerted'"
        >
          <cds-icon :shape="name" size="24" class="is-solid has-alert"></cds-icon>
        </button>
        <button
          type="button"
          class="icon-variant"
          v-if="variants.solidBadged"
          :class="{ active: variant == 'solidBadged' }"
          @click="variant = 'solidBadged'"
        >
          <cds-icon :shape="name" size="24" class="is-solid has-badge"></cds-icon>
        </button>
      </div>
      <div class="icon-snippet">
        <code class="language-html" v-html="getCode()"></code>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';
import { ClarityIcons } from '@clr/core/icon-shapes';

export default {
  name: 'DocIcon',
  props: ['name'],
  data: function () {
    return {
      open: false,
      variant: 'outline',
    };
  },
  computed: {
    variants: function () {
      const icon = ClarityIcons.registry[this.name];
      return {
        outline: true,
        outlineAlerted: icon.indexOf('can-alert') > -1,
        outlineBadged: icon.indexOf('can-badge') > -1,
        solid: icon.indexOf('has-solid') > -1,
        solidAlerted: icon.indexOf('has-solid') > -1 && icon.indexOf('can-alert') > -1,
        solidBadged: icon.indexOf('has-solid') > -1 && icon.indexOf('can-badge') > -1,
      };
    },
  },
  methods: {
    getCode: function () {
      let code = `<clr-icon shape="${this.name}"`;
      let klasses = [];
      console.log(this.variant);
      if (this.variant == 'outlineAlerted' || this.variant == 'solidAlerted') {
        klasses.push('has-alert');
      }
      if (this.variant == 'outlineBadged' || this.variant == 'solidBadged') {
        klasses.push('has-badge');
      }
      if (this.variant == 'solid' || this.variant == 'solidAlerted' || this.variant == 'solidBadged') {
        klasses.push('is-solid');
      }
      if (klasses.length) {
        code += ` class="${klasses.join(' ')}"`;
      }
      code += `></clr-icon>`;
      return Prism.highlight(code, Prism.languages.html, 'html');
    },
  },
};
</script>

<style scoped lang="scss">
.icon-item {
  padding: 1rem;

  .icon-button {
    position: relative;
    top: 0.15rem;
    width: 100%;
    height: 3rem;
    display: flex;
    text-align: left;
    padding: 0.9rem 0.3rem;
    background-color: transparent;
    border: 0.05rem solid hsla(0, 0%, 83.9%, 0);
    transform: translateZ(0);
    color: #666;
    cursor: pointer;
    z-index: 1;

    cds-icon {
      margin: 0 0.6rem;
    }
  }

  .icon-snippet {
    background: #2d2d2d;
    padding: 0.5rem;
  }

  .icon-variants {
    margin: 0.5rem 0;
  }

  .icon-variant {
    width: 36px;
    height: 36px;
    justify-content: space-around;
    text-align: center;
    border: 1px dashed hsla(0, 0%, 40%, 0);
    background-color: transparent;
    outline: none;
    color: #666;
    cursor: pointer;
    padding: 0;
    margin-right: 0.1rem;
    transition: all 0.2s ease-out;

    &.active {
      border: 1px dashed hsla(0, 0%, 40%, 1);
    }
  }

  .icon-detail {
    background: #fff;
    position: relative;
    padding: 0.25rem 1rem;
    height: 13.2rem;
  }
}
</style>
