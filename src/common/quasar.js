import Vue from 'vue'

import './styles/quasar.styl'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar, 
  QLayout,
  QHeader,
  QAvatar,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QPopupEdit,
  QInput,
  QScrollArea,
  QDialog,
  QCard,
  QCardSection,
  QCardActions,
  QSelect,
  QSplitter,
  QTabPanels,
  QTabPanel,
  QTree,
  QSpinner,
  QBtnToggle,
  ClosePopup,
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QAvatar,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QPopupEdit,
    QInput,
    QScrollArea,
    QDialog,
    QCard,
    QCardSection,
    QCardActions,
    QSelect,
    QSplitter,
    QTabPanels,
    QTabPanel,
    QTree,
    QSpinner,
    QBtnToggle
  },
  directives: {
   ClosePopup
  },
  plugins: {

  },
})
