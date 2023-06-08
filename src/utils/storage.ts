class StorageManager {
  private storage: Storage

  constructor() {
    this.storage = localStorage
  }

  save(cardList: any[]) {
    this.storage.setItem('cardList', JSON.stringify(cardList))
  }

  fetchAll(): any[] | null {
    const serializedCardList = this.storage.getItem('cardList')
    return serializedCardList ? JSON.parse(serializedCardList) : null
  }
}

export default new StorageManager()
