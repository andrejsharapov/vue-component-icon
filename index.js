import icon from './components/icon.vue'

export const vIcon = icon

export default {
	install(app) {
		app.component(icon.name, icon)
	},
	add(icons){
		icon.add(icons);
	}
}
