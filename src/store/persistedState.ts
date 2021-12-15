import { IStore } from './types';
import { Store, MutationPayload } from 'vuex';

// 数据持久化
const key = 'infore-pc-persisted'
export default (store: Store<IStore>) => {

  console.log('store====', store)
  //获取state的值
  const getState = (key: string) => {
    return localStorage.getItem(key)
  }

  // 设置state的值
  const setState = (key: string, value: string) => {
    localStorage.setItem(key, value)
  }

  //初始化如果有值覆盖
  const data: string|null = getState(key)
  if(data && data !== '') {
    try {
      store.replaceState(JSON.parse(data))
    } catch (e) {
      console.log(e)
    }
  }

  const updateState = (state: IStore) => {
    const data = getState(key)
    try {
      setState(key, JSON.stringify(state))
    } catch (e) {
      console.error(e)
      // 设置失败，则恢复值
      setState(key, data ?? '')
    }
  }
  //订阅store的mutation，handler会在每个mutation完成后调用
  // 接收 mutation 和经过 mutation 后的状态作为参数
  store.subscribe((mutation: MutationPayload, state: IStore) => {
    updateState(state)
  })

}