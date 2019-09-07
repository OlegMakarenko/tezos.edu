import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Student from './components/Student.vue'

Vue.use(VueRouter)

const routes = [
    { name: "dashboard", path: '/', component: Dashboard },
    { name: "student", path: '/student/:id', component: Student },
];

export default new VueRouter({routes}); 