<template>
  <div class="clr-col-sm-6 clr-col-md-4 clr-col-12">
    <h4>{{ colors.name }}</h4>
    <ul class="swatch-list">
      <li
        v-for="color in colors.palette"
        v-bind:style="{ backgroundColor: getHsl(color), color: getForeground(color) }"
      >
        <div class="color">
          <div v-if="color.bullet" class="bullet" aria-label="Base Palette Color">•</div>
          <div v-else class="bullet"></div>
          <div class="weight">{{ color.weight }}</div>
          <div class="hsl" @click="copyText(getHsl(color))">{{ getHsl(color) }}</div>
          <div class="hex" @click="copyText(getHex(color))">{{ getHex(color) }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import colors from '../../../data/colors.json';

const textarea = document.createElement('textarea');
textarea.setAttribute('readonly', '');
textarea.classList.add('offscreen-clipboard-textarea');

export default {
  name: 'ClrColorPalette',
  props: ['type'],
  computed: {
    colors: function () {
      return colors[this.type];
    },
  },
  methods: {
    getHsl: function (color) {
      return `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
    },
    getHex: function (color) {
      // Credit https://css-tricks.com/converting-color-spaces-in-javascript/
      let { h, s, l } = color;
      s /= 100;
      l /= 100;

      let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

      if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
      } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
      } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
      } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
      } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
      } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
      }
      // Having obtained RGB, convert channels to hex
      r = Math.round((r + m) * 255).toString(16);
      g = Math.round((g + m) * 255).toString(16);
      b = Math.round((b + m) * 255).toString(16);

      // Prepend 0s, if necessary
      if (r.length == 1) r = '0' + r;
      if (g.length == 1) g = '0' + g;
      if (b.length == 1) b = '0' + b;

      return '#' + r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
    },
    getForeground: function (color) {
      const hex = this.getHex(color).replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      const yiq = Math.round((r * 299 + g * 587 + b * 114) / 1000);
      // 120
      return yiq > 120 ? 'black' : 'white';
    },
    copyText: function (text) {
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    },
  },
};
</script>

<style scoped lang="scss">
.swatch-list {
  border-radius: 0.25rem;
  font-size: 0.75rem;

  li:first-child {
    border-radius: 0.125rem 0.125rem 0 0;
  }

  li:last-child {
    border-radius: 0 0 0.125rem 0.125rem;
  }

  li {
    list-style: none;
  }

  .hex,
  .hsl {
    cursor: pointer;
  }

  .color {
    display: grid;
    padding: 0.375rem;
    grid-template-columns: 0.5rem 4rem auto 4rem;
  }
}
</style>
