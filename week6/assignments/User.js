
module.exports = class User{
    constructor(items){
        this.items = items
        this.size = items.length
    }
    
    appendItem(item){
        this.items.push(item)
        return `Item ${item} has been added`
    }

    getItem(item){
        const find = this.items.findIndex(e => e === item)
        if(find == -1){
            return 'Item not Found'
        }
        return true
    }

    removeItem(item){

        const find = this.items.findIndex(e => e === item)
        const e = this.items[find]
        if(find == -1){
            return "Item Cannot be 'deleted' Item Not Found"
        }
        this.items.splice(find, 1)
        return `${e} was removed`  
    }

    showItems(){
        return this.items
    }

}