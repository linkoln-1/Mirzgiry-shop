import { New } from '../../pages/newProducts/New'
import { Catalog } from '../../pages/catalog'
import { HomePage } from '../../components/common/homepage/HomePage'
import { DescriptionCard } from '../../pages/catalog/card'
import { Basket } from '../../pages/basket'
import { About } from '../../pages/About'
import { Exchange } from '../../pages/exchange-and-refund'
import { Delivery } from '../../pages/delivery'
import { Favorites } from '../../pages/favorite'
import { Personal } from '../../pages/personal'
import { Authorization } from '../../components/modal/subComponents/authorization'
import { Registration } from '../../components/modal/subComponents/registration/registrationFirstPage'
import { RegistrationSecond } from '../../components/modal/subComponents/registration/registrationSecondPage'
import { RegistrationSuccess } from '../../components/modal/subComponents/registration/registrationSuccess'
import { Recovery } from '../../components/modal/subComponents/recovery/recoveryFirstPage'
import { RecoverySecond } from '../../components/modal/subComponents/recovery/recoverySecondPage'
import { RecoverySuccess } from '../../components/modal/subComponents/recovery/recoverySuccess'
import { Search } from '../../components/search'

export const routeConfig = [
  { path: '/', component: HomePage, isIndex: true },
  { path: '/new', component: New },
  { path: '/catalog', component: Catalog },
  { path: '/about', component: About },
  { path: '/exchange', component: Exchange },
  { path: '/catalog/card', component: DescriptionCard },
  { path: '/delivery', component: Delivery },
  { path: '/basket', component: Basket },
  { path: '/favorite', component: Favorites },
  { path: '/personal', component: Personal },
  { path: '/authorization', component: Authorization },
  { path: '/registration', component: Registration },
  { path: '/registration/second', component: RegistrationSecond },
  { path: '/registration/success', component: RegistrationSuccess },
  { path: '/recovery', component: Recovery },
  { path: '/recovery/second', component: RecoverySecond },
  { path: '/recovery/success', component: RecoverySuccess },
  { path: '/search', component: Search },
]
