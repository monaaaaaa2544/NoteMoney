export function clone(data: RecordItem | RecordItem[]) {
    return JSON.parse(JSON.stringify(data))
}