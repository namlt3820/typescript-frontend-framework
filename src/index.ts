import { UserList } from './views/UserList'
import { Collection } from './models/Collection'
import { UserProps, User } from './models/User'

const root = document.getElementById('root')
if (root) {
    const users = new Collection(
        'http://localhost:3000/users', 
        (json: UserProps) => User.buildUser(json)
    )
    users.on('change', () => {
        new UserList(root, users).render();
    })
    users.fetch()
}