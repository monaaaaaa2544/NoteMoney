import { defineStore } from 'pinia'
import createId from "@/lib/createId"
import { clone } from '@/lib/clone'


export const useStore = defineStore('store', {
  state: () => {
    return {
      recordList: [],
      tagList: [],
      createRecordError: null,
      createTagError: null,
      currentTag: undefined,
    } as RootState
  },
  actions: {
    fetchRecords() {
      this.recordList = JSON.parse(localStorage.getItem("recordList") || '[]') as RecordItem[]
    },
    createRecord(record: RecordItem) {
      const record2 = clone(record)
      record2.createdAt = record2.createdAt || new Date().toISOString()
      this.recordList.push(record2)
      this.saveRecords()
    },
    saveRecords() {
      localStorage.setItem("recordList", JSON.stringify(this.recordList))
    },
    setCurrentTag(id: string) {
      this.currentTag = this.tagList.filter(t => t.id === id)[0]
    },
    updateTag(payload: { id: string, name: string }) {
      const { id, name } = payload
      const idList = this.tagList.map(item => item.id)

      if (idList.indexOf(id) >= 0) {
        const names = this.tagList.map(item => item.name)

        if (names.indexOf(name) >= 0 && idList.indexOf(id) !== names.indexOf(name)) {
          window.alert('标签名重复')
        } else {
          const tag = this.tagList.filter(item => item.id === id)[0]

          tag.name = name
          this.saveTags()
        }
      }
    },
    removeTag(id: string) {
      const idList = this.tagList.map(item => item.id)
      this.tagList.splice(idList.indexOf(id), 1)
      this.saveTags()
      return true
    },
    fetchTags() {
      this.tagList = JSON.parse(localStorage.getItem("tagList") || '[]')
      if (!this.tagList || this.tagList.length == 0) {
        this.createTag('衣')
        this.createTag('食')
        this.createTag('住')
        this.createTag('行')
      }
    },
    createTag(name: string) {
      const id = createId().toString()
      const names = this.tagList.map(item => item.name)
      this.createTagError = null

      if (names.indexOf(name) >= 0) {
        this.createTagError = new Error('tag name duplicated')
        return 'duplicated';
      }
      this.tagList.push({ id: id, name: name })
      this.saveTags()
    },
    saveTags() {
      localStorage.setItem("tagList", JSON.stringify(this.tagList))
    }
  }
})



