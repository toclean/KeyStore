export default class Map
{
    keys: string[]
    values: any[]

    constructor()
    {
        this.keys = []
        this.values = []
    }
    
    private findIndexByKey(key: string): number
    {
        for (let i = 0; i < this.keys.length; i++)
        {
            if (this.keys[i] == key)
            {
                return i
            }
        }

        return -1
    }

    private getValueByIndex(index: number): any
    {
        return this.values[index] || -1
    }

    getValueByKey(key: string): any
    {
        let index = this.findIndexByKey(key)
        let object = this.getValueByIndex(index)

        return object
    }

    setValue(key: string, obj: any): number
    {
        if (this.getValueByKey(key) != -1) return -1

        this.keys.push(key)
        this.values.push(obj)

        return 0
    }

    removeValue(key: string): number
    {
        let index = this.findIndexByKey(key)
        if (index == -1) return -1

        this.keys.splice(index, 1)
        this.values.splice(index, 1)

        return 0
    }
}