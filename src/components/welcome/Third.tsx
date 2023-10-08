import { defineComponent, ref } from 'vue';
import s from './WelcomeLayout.module.scss'
import chart from '../../assets/icons/chart.svg'
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';


export const Third = ()=>(
     <WelcomeLayout>
      {{
        icon:()=> <img src={chart}/>,
        title:()=> <h2>数据可视化<br/>收支一目了然</h2>,
        bottons:()=><>
        <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
        <RouterLink to="/welcome/4">下一页</RouterLink>
        <RouterLink to="/start">跳过</RouterLink>
        </>
      }}
     </WelcomeLayout>
)
Third.displayName = 'Third'