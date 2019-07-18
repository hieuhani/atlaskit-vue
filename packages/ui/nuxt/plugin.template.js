import Vue from 'vue'

<% if (options.atlaskit.components) { %>
import {
  AtlaskitVue,
  <%= options.atlaskit.components.join(',\n    ') %>
} from <%= options.treeShaking ? `'@atlaskit-vue/ui/src/index.js'` : `'@atlaskit-vue/ui/dist/AtlaskitVue.common.js'` %>;

Vue.use(AtlaskitVue, {
  components: [
    <%= options.atlaskit.components.join(',\n        ') %>
  ]
});
<% } else { %>
import AtlaskitVue from <%= options.treeShaking ? `'@atlaskit-vue/ui/src/index.js'` : `'@atlaskit-vue/ui/dist/AtlaskitVue.umd.js'` %>;
Vue.use(AtlaskitVue, <%= JSON.stringify(options.atlaskit ? options.atlaskit : {}, undefined, 4) %>);
<% } %>
