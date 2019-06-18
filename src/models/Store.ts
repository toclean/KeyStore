import Map from './Map'
import fs from 'fs'

export default class Store
{
    name: string
    map: Map

    constructor(name: string)
    {
        this.name = name + '.db'
        this.map = new Map()
        this.read()
    }

    private read(): void
    {
        if (!fs.existsSync('./' + this.name))
        {
            fs.writeFileSync('./' + this.name, 'utf8')
            return
        }

        let data = fs.readFileSync('./' + this.name, 'utf8')
        let json = JSON.parse(data)

        this.map.keys = json.keys
        this.map.values = json.values
    }

    get(key: string): void
    {
        return this.map.getValueByKey(key)
    }
    
    set(key: string, value: any): number
    {
        let result = this.map.setValue(key, value)
        this.write()
        return result
    }

    remove(key: string): number
    {
        let result = this.map.removeValue(key)
        this.write()
        return result
    }

    write(): void
    {
        fs.writeFileSync('./' + this.name, JSON.stringify(this.map), 'utf8')
    }
}