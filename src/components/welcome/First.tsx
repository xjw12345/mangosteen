import { defineComponent, ref } from 'vue';
import s from './WelcomeLayout.module.scss'
import pig from '../../assets/icons/pig.svg'
import { RouterLink } from 'vue-router';
import {WelcomeLayout} from './WelcomeLayout'

export const First = defineComponent({
   setup:(props,context)=>{
    const slots = {
      icon:()=> <img class={s.pig} src={pig}/>,
      title:()=> <h2>会赚钱<br/>还要会省钱</h2>,
      bottons:()=> <>
      <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
      <RouterLink to="/welcome/2">下一页</RouterLink>
      <RouterLink to="/start">跳过</RouterLink>
  </>
    }
   return ()=>(
          <WelcomeLayout v-slots={slots}></WelcomeLayout>
     )
   }
})
