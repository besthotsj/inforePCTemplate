import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { IStore } from './types'
import { App, InjectionKey } from 'vue'
import modules from './modules'
import presistenceVuexPlugin from './persistedState'

export const key: InjectionKey<Store<IStore>> = Symbol()

const store = createStore<IStore>({
  modules,
  plugins: [presistenceVuexPlugin]
})
export function useStore() {
  return baseUseStore(key)
}
export function setupStore(app: App) {
  app.use(store, key)
}
export default store
