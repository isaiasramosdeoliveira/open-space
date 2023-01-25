class Dice {
    constructor(){}
    addAssignmentAll = () => {
        const body = document.querySelectorAll("body") as NodeListOf<HTMLBodyElement>
        const inputs = body[0].querySelectorAll("input")
        for(const input of inputs){
            if(input.value === ''){
                return false
            }
        }
        return inputs
    }
    addAssignmentToday = () => {
        return
    }
    addAssignmentWeek = () => {
        return
    }
    addAssignmeentMonth = () => {
        return
    }
}
export default new Dice