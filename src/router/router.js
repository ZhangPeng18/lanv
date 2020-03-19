import index from '@/components/index'
import chatrecord from '@/components/chatrecord'
import contact from '@/components/contact'
import userPu from '@/components/userPu'


const routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/chatrecord',
    component: chatrecord
  },
  {
    path: '/contact',
    component: contact

  },
  {
    path: '/userPu',
    component: userPu
  }

];

export default routes;
