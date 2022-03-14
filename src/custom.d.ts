type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: string
    createAt?: string
}

type Tag = {
    id: string
    name: string
}

type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    createRecordError: Error | null,
    createTagError: Error | null,
    currentTag?: Tag
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated'
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    save: () => void
}


interface Window {

}
