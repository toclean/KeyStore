import Store from './models/Store'

var store = new Store('test')
store.get('aa')
store.set('aa', [0, 1, 2])
store.get('aa')
store.get('aa')
