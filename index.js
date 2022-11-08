import icon from './src/components/icon.vue';

export const vIcon = icon;

export default {
  install(app) {
    app.component(icon.name, icon);
  },
};
