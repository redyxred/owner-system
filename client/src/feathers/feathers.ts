import io from 'socket.io-client'
import feathers from '@feathersjs/client'
import { SERVER_URI } from '@app/consts/server'

const socket = io(SERVER_URI)

const client = feathers()

try {
  client.configure(feathers.socketio(socket)).configure(
    feathers.authentication({
      storage: window.localStorage,
    })
  )
} catch (e) {
  console.error('Error', e)
}

export default client
