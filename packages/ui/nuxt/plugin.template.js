import Vue from 'vue'

<% if (options.atlaskit.components) { %>
import {
  AtlaskitVue,
  <%= options.atlaskit.components.join(',\n    ') %>
} from '@atlaskit-vue/ui';

Vue.use(AtlaskitVue, {
  components: [
    <%= options.atlaskit.components.join(',\n        ') %>
  ]
});
<% } else { %>
import Atlaskit from '@atlaskit-vue/ui';
Vue.use(Atlaskit, <%= JSON.stringify(options.atlaskit ? options.atlaskit : {}, undefined, 4) %>);
<% } %>
