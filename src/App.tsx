import {defineComponent} from 'vue'
import { RouterView } from 'vue-router'
import 'vant/lib/index.css';
import './App.scss'



export const App = defineComponent({
  setup() {
    return ()=> (
      <div class='page'>
        <RouterView></RouterView>
      </div>
    )
  }
})