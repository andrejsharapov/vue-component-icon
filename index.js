import icon from './src/components/icon.vue';

export const cIcon = icon;

export default {
  install(app) {
    app.component(icon.name, icon);
  },
};
