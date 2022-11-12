import CIcon from './src/components/CIcon.vue';

export { CIcon };

export default {
  install(app) {
    app.component(CIcon.name, CIcon);
  },
};
