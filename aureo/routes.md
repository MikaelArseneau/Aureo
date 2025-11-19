
## Permet au clique du logo en haut de retourner a la page d'acceuil
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

## Permet au clique du bouton d'ouvrir la page roomView selon le id du slider
  {
    path: '/room/:id',
    name: 'room',
    component: RoomView,
  }


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;