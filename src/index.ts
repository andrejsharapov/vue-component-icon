import CIcon from '@/components/c-icon.vue';

export { CIcon };

export default {
  install(app) {
    app.component(CIcon.name, CIcon);
  },
};