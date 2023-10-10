import { defineComponent, ref } from 'vue';
import { Button } from '../shared/Button';
import { Center } from '../shared/Center';
import { FloatButton } from '../shared/FloatButton';
import { Icon } from '../shared/Icon';
import { Navbar } from '../shared/Navbar';
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
   setup:(props,context)=>{
    const onClick = ()=>{
      console.log(111111111);
      
    }

   return ()=>(
     <div>

      <Navbar>{
        {
          default:'山竹记账',
          icon:<Icon name='menu' class={s.navIcon}/>}
      }</Navbar>

      <Center class={s.pig_wrapper}>
        <Icon name='pig' class={s.pig}></Icon>
      </Center>

      <div class={s.button_wrapper}>
        <Button class={s.button} onClick={onClick}>测试</Button>
      </div>
      <FloatButton iconName='add'></FloatButton>
     </div>
     )
   }
})