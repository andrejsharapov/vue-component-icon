import CIcon from './src/components/c-icon.vue';

export { CIcon };

export default {
  install(app) {
    app.component(CIcon.name, CIcon);
  },
};
