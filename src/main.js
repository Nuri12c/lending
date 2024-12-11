import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './styles/global.scss';

const app = createApp(App);

store.dispatch('fetchUsers')
  .catch(error => {
    console.error("Критическая ошибка при загрузке пользователей:", error);
    // Здесь можно добавить более сложную обработку ошибки, например, показать сообщение пользователю
    // или перейти на страницу ошибки
  });

app.use(store).mount('#app');
