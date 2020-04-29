<template>
  <tr>
    <td class="left"><b>{{scope}}</b></td>
    <td class="left">{{title}} <a href="javascript://" @click="more = !more" v-if="hasMore"><b>Show More</b></a>
      <div class="more-block" v-if="more">
        <slot></slot>
      </div>
    </td>
    <td class="left"><span class="label" v-if="breaking">Breaking Change</span></td>
    <td class="left"><a v-if="issue" :href="issueLink" target="_blank">#{{issue}}<cds-icon class="external-link" size="12" shape="pop-out"></cds-icon></a></td>
    <td class="left"><a v-if="commit" :href="commitLink" target="_blank">{{commitHash}}<cds-icon class="external-link" size="12" shape="pop-out"></cds-icon></a></td>
  </tr>
</template>

<script>
export default {
  name: 'ReleaseItem',
  props: ['title', 'commit', 'issue', 'breaking', 'scope'],
  data: function() {
    return {
      more: false,
    };
  },
  computed: {
    hasMore: function() {
      return this.$slots && this.$slots.default && this.$slots.default.length;
    },
    issueLink: function() {
      return `https://github.com/vmware/clarity/issues/${this.issue}`;
    },
    commitLink: function() {
      return `https://github.com/vmware/clarity/commit/${this.commit}`;
    },
    commitHash: function() {
      return this.commit ? this.commit.substring(0, 8) : '';
    },
  },
};
</script>

<style scoped>
.external-link {
  margin-top: -0.5rem;
}
</style>
