export const counterInitialValue = 1

export const counterReducer = (counter, action) => {
    const tipeAksi = action.tipeAksi

    if(tipeAksi === 'increment'){
        return counter + 1
    }else if(tipeAksi === 'decrement'){
        return counter - 1
    }else if(tipeAksi === 'incrementSpec'){
        return counter + action.amount
    }else if(tipeAksi === 'decrementSpec'){
        return counter - action.amount
    }else if(tipeAksi === 'reset'){
        return 0
    }else{
        return counter
    }
}