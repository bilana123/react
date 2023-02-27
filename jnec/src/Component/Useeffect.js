import {useCallback, useEffect, experimental_useEffectEvent as useEffectEvent} from "react"
export function ChatRoom({url, loggingOption}) {
    function onConnected(url){
        logConnection('Connected to ${url}')
    
    }
    useEffect(()=> {
        const room = connectToRoom(url)
        room.onConnected(()=> {
            onConnected(url)
        })
        return() => {
            room.disconnect()
        }
        },[url, onConnected])
        return null
    
}
function logConnection(message, options) {

}b
function connectToRoom(url){

}

    
export default useEffect

