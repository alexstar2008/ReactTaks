export const textChange = (event)=>{
    return {
        type:'TEXT',
        text:event.target.value
    }
}